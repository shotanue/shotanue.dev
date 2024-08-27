import type { Readme as Descriptor } from "../descriptor";
import { ArticleBody } from "../ontology/ArticleBody";

export const Readme: React.FC<Descriptor> = ({ articleBody }) => {
  return <ArticleBody>{articleBody}</ArticleBody>;
};
