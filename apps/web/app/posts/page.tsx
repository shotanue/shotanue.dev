import { allPosts, readme } from "@repo/resources";
import { Stack, StackItem } from "@repo/ui";

export default async function () {
  const posts = await allPosts();
  return (
    <Stack>
      {posts.map((post) => {
        return <StackItem key={post.href}>{post.title}</StackItem>;
      })}
    </Stack>
  );
}
