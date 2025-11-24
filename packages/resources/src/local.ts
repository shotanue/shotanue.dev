import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";
import { z } from "zod";
import type { Entry } from "./types";

const findArticlesDir = () => {
    const potentialPaths = [
        path.join(process.cwd(), "articles"), // When running from packages/resources
        path.join(process.cwd(), "../../packages/resources/articles"), // When running from packages/web
        path.join(process.cwd(), "packages/resources/articles"), // When running from root
    ];

    for (const p of potentialPaths) {
        if (fs.existsSync(p)) {
            return p;
        }
    }
    // Fallback to default if not found (though it should be found in one of the above)
    return path.join(process.cwd(), "articles");
};

const articlesDir = findArticlesDir();

const frontmatterSchema = z.object({
    title: z.string(),
    publishedAt: z.union([z.string(), z.date()]).transform((v) => new Date(v).toISOString()),
    updatedAt: z.union([z.string(), z.date()]).transform((v) => new Date(v).toISOString()),
    tags: z.array(z.string()).optional(),
    keywords: z.string().optional(),
});

export const parsePost = (content: string, id: string): Entry => {
    const match = content.match(/^---\n([\s\S]+?)\n---/);
    if (!match) {
        throw new Error(`Frontmatter not found in ${id}`);
    }

    const frontmatter = match[1];
    const data = yaml.load(frontmatter);

    const parsedData = frontmatterSchema.parse(data);

    // Normalize tags: use tags array if present, otherwise split keywords string
    const tags = parsedData.tags || (parsedData.keywords ? parsedData.keywords.split(",").map(t => t.trim()) : []);

    return {
        kind: "external",
        category: "internal",
        title: parsedData.title,
        href: `/articles/${id}`,
        publishedAt: parsedData.publishedAt,
        updatedAt: parsedData.updatedAt,
        tags: tags,
    } as const;
};

export const fetchLocalPosts = async (): Promise<Entry[]> => {
    if (!fs.existsSync(articlesDir)) {
        return [];
    }

    const files = fs.readdirSync(articlesDir).filter((file) => file.endsWith(".md"));

    const posts = files.map((file) => {
        const filePath = path.join(articlesDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const id = file.replace(/\.md$/, "");
        return parsePost(fileContent, id);
    });

    return posts;
};
