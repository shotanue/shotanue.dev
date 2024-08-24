import { allPosts } from "@repo/resources";
import { Markdown, Stack, StackItem, WithNavigation } from "@repo/ui";

export default async function () {
  const posts = await allPosts();

  const post = posts
    .filter((x) => x.kind === "withContent")
    .find((x) => x.title === "README");

  return (
    <WithNavigation
      nav={
        <Stack>
          <StackItem>
            <a href="/readme" className="p-2 text-sm">
              <span>README</span>
            </a>
          </StackItem>
          <StackItem>
            <a href="/posts?tag=qiita" className="p-2 text-sm">
              <span>qiita</span>
            </a>
          </StackItem>
          <StackItem>
            <a href="/posts?tag=hatena" className="p-2 text-sm">
              <span>hatena</span>
            </a>
          </StackItem>
        </Stack>
      }
    >
      <Markdown>{post?.content ?? ""}</Markdown>
    </WithNavigation>
  );
}
