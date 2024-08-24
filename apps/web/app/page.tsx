import { App } from "@repo/ui";
import { allPosts } from "@repo/resources";

export default async function () {
  const posts = await allPosts();

  const post = posts
    .filter((x) => x.kind === "withContent")
    .find((x) => x.title !== "README");

  return <App txt={post?.content ?? ""} />;
}
