import type { ArticleCollection as Descriptor } from "../descriptor";
import { Category } from "../ontology/Category";
import { Name } from "../ontology/Name";
import { Tag } from "../ontology/Tag";

export const ArticleCollection: React.FC<Descriptor> = (articleCollection) => {
  return (
    <ul className="flex flex-col divide-y-2 gap-1">
      {articleCollection.map((article) => (
        <li className="pt-1 place-items-baseline" key={article.identifier}>
          <Category>{article.category}</Category>
          <Name>{article.name}</Name>
          {article.tagCollection.map((tag) => (
            <Tag key={`article_${article.identifier}:tag_${tag}`}>{tag}</Tag>
          ))}
        </li>
      ))}
    </ul>
  );
};
