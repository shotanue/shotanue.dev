import fs from "node:fs";
import path from "node:path";
import { fetchLocalPosts } from "@repo/resources";
import { Article } from "@repo/ui";
import matter from "gray-matter";

// Helper to find articles directory (similar logic to resources/local.ts but we need to read content here)
// Actually, we can read the file content here directly since we are in the server component context
// But wait, fetchLocalPosts returns metadata, not body.
// We need to read the markdown file content here.

const findArticlesDir = () => {
  const potentialPaths = [
    path.join(process.cwd(), "../../packages/resources/articles"), // When running from packages/web
    path.join(process.cwd(), "packages/resources/articles"), // When running from root
    path.join(process.cwd(), "articles"), // Fallback
  ];

  for (const p of potentialPaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  throw new Error("Articles directory not found");
};

export async function generateStaticParams() {
  const posts = await fetchLocalPosts();
  return posts.map((post) => ({
    slug: post.href.split("/").pop(),
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articlesDir = findArticlesDir();
  const filePath = path.join(articlesDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return <div>Article not found</div>;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // Extract tags from frontmatter or infer
  // Assuming tags might be in frontmatter, if not, empty array
  const tags = data.tags || (data.keywords ? data.keywords.split(",").map((t: string) => t.trim()) : []);

  return (
    <Article
      identifier={slug}
      name={data.title}
      articleBody={content}
      datePublished={data.publishedAt}
      dateModified={data.updatedAt}
      category={data.category || "Tech"}
      tagCollection={tags}
    />
  );
}
