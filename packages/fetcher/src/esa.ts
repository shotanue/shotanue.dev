import { getPosts } from "./_generated/esa";
import { Entry } from "./types";

export const esa = async (
  teamName: string,
  category: string,
): Promise<Entry[]> => {
  const { data: posts } = await getPosts(teamName, {
    q: `in:${category}`,
    per_page: 100,
  });

  return posts.posts.map((post) => {
    return {
      id: post.number.toString(),
      title: post.name,
      href: post.url,
      publishedAt: post.created_at,
      updatedAt: post.updated_at,
    };
  });
};
