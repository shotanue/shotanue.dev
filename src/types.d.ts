export { Posts, Post };

declare module "bun" {
  interface Env {
    FEED_ENDPOINT: string;
  }
}

type Post = {
  kind: string;
  id: string;
  title: string;
  link: string;
  publishedAt: string;
  updatedAt: string;
  tags?: string[];
  html?: string;
};
type Posts = Array<Post>;
