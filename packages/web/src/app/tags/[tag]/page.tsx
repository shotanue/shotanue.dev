import { fetchLocalPosts } from "@repo/resources";
import { TagFilter } from "@repo/ui";

export async function generateStaticParams() {
  const posts = await fetchLocalPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags).map((tag) => ({
    tag: tag,
  }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = await fetchLocalPosts();

  const filteredPosts = posts.filter((post) => post.tags?.includes(decodedTag));

  // Sort by date descending
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return <TagFilter tag={decodedTag} articles={sortedPosts} />;
}
