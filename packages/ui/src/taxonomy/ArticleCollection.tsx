import type { ArticleCollection as Descriptor } from "../descriptor";
import { Stack, StackItem } from "../layoutPrimitive/Stack";
import { Category } from "../ontology/Category";
import { Name } from "../ontology/Name";
import { Tag } from "../ontology/Tag";

export const ArticleCollection: React.FC<Descriptor> = (articleCollection) => {
  return (
    <Stack>
      {articleCollection.map((article) => (
        <StackItem key={article.identifier}>
          <Category>{article.category}</Category>
          <Name>{article.name}</Name>
          {article.tagCollection.map((tag) => (
            <Tag key={`article_${article.identifier}:tag_${tag}`}>{tag}</Tag>
          ))}
        </StackItem>
      ))}
    </Stack>
  );
};
