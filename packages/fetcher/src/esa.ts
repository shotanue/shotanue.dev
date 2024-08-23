import { getPosts } from "./_generated/esa";
import { AXIOS_INSTANCE } from "./esaAxios";
import type { Entry } from "./types";

export const esa = async ({
  teamName,
  category,
  token,
}: {
  teamName: string;
  category: string;
  token: string;
}): Promise<Entry[]> => {
  AXIOS_INSTANCE.defaults.baseURL = "https://api.esa.io/v1";
  AXIOS_INSTANCE.defaults.headers.get.Authorization = `Bearer ${token}`;

  const { data: posts } = await getPosts(teamName, {
    q: `in:${category}`,
    per_page: 100,
    page: 1,
  });

  while (posts.next_page !== null) {
    const { data: nextPosts } = await getPosts(teamName, {
      q: `in:${category}`,
      per_page: 100,
      page: posts.next_page,
    });
    posts.posts = posts.posts.concat(nextPosts.posts);
  }

  return posts.posts.map((post) => {
    return {
      kind: "esa",
      id: post.number.toString(),
      title: post.name,
      href: post.url,
      publishedAt: post.created_at,
      updatedAt: post.updated_at,
      content: post.body_md,
    } as const;
  });
};
