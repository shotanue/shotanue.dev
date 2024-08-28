import type { CategorizedArticleCollection as Descriptor } from "../descriptor";
import { ArticleCollection } from "./ArticleCollection";

export const TaggedArticleCollection: React.FC<Descriptor> = ({
  articleCollection,
}) => {
  return <ArticleCollection {...articleCollection} />;
};
