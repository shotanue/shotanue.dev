import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";
import { z } from "zod";
import type { Entry } from "./types";

const articlesDir = path.join(process.cwd(), "articles");

const frontmatterSchema = z.object({
    title: z.string(),
    publishedAt: z.union([z.string(), z.date()]).transform((v) => new Date(v).toISOString()),
    updatedAt: z.union([z.string(), z.date()]).transform((v) => new Date(v).toISOString()),
});

export const parsePost = (content: string, id: string): Entry => {
    const match = content.match(/^---\n([\s\S]+?)\n---/);
    if (!match) {
        throw new Error(`Frontmatter not found in ${id}`);
    }

    const frontmatter = match[1];
    const data = yaml.load(frontmatter);

    const parsedData = frontmatterSchema.parse(data);

    return {
        kind: "external",
        category: "internal",
        title: parsedData.title,
        href: `/articles/${id}`,
        publishedAt: parsedData.publishedAt,
        updatedAt: parsedData.updatedAt,
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
