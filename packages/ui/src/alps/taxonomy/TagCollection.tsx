import type { TagCollection as Descriptor } from "../descriptor";
import { Tag } from "../ontology/Tag";

export const TagCollection: React.FC<{ tagCollection: Descriptor }> = ({
  tagCollection,
}) => {
  return (
    <ul>
      {tagCollection.map((tag) => (
        <li key={`${tag}`}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
};
