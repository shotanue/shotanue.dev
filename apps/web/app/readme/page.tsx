import { readme } from "@repo/resources";
import { Markdown, Center } from "@repo/ui";

export default async function () {
  return (
    <Center>
      <Markdown>{await readme()}</Markdown>
    </Center>
  );
}
