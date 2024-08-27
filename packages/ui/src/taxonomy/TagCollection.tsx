import type { TagCollection as Descriptor } from "../descriptor";
import { Stack } from "../layoutPrimitive/Stack";
import { Tag } from "../ontology/Tag";

export const TagCollection: React.FC<{ tagCollection: Descriptor }> = ({
  tagCollection,
}) => {
  return (
    <Stack>
      {tagCollection.map((tag) => (
        <Tag key={`${tag}`}>{tag}</Tag>
      ))}
    </Stack>
  );
};
