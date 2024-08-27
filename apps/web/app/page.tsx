import { allPosts, readme } from "@repo/resources";
import { Center, Markdown, Stack, StackItem, WithNavigation } from "@repo/ui";

export default async function () {
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
            <Center>
              <a href="/posts?tag=hatena" className="p-2 text-sm">
                <span>hatena</span>
              </a>
            </Center>
          </StackItem>
        </Stack>
      }
    >
      <Markdown>{await readme()}</Markdown>
    </WithNavigation>
  );
}
