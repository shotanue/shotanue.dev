import type { CategorizedArticleCollection as Descriptor } from "../descriptor";
import { ArticleCollection } from "./ArticleCollection";

export const TaggledArticleCollection: React.FC<Descriptor> = ({
  articleCollection,
}) => {
  return <ArticleCollection {...articleCollection} />;
};
