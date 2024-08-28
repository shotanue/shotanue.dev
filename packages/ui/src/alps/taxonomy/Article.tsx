import type { Article as Descriptor } from "../descriptor";
import { ArticleBody } from "../ontology/ArticleBody";
import { Category } from "../ontology/Category";
import { DateModified } from "../ontology/DateModified";
import { DatePublished } from "../ontology/DatePublished";
import { Identifier } from "../ontology/Identifier";
import { Name } from "../ontology/Name";
import { Tag } from "../ontology/Tag";

export const Article: React.FC<Descriptor> = ({
  articleBody,
  category,
  dateModified,
  datePublished,
  identifier,
  name,
  tagCollection,
}) => {
  return (
    <section>
      <Identifier>{identifier}</Identifier>
      <Category>{category}</Category>
      <Name>{name}</Name>
      {tagCollection.map((tag) => {
        return <Tag key={tag}>{tag}</Tag>;
      })}
      <DatePublished>{datePublished}</DatePublished>
      <DateModified>{dateModified}</DateModified>
      <ArticleBody>{articleBody}</ArticleBody>
    </section>
  );
};
