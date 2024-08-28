import { ArticleCollection } from "./ArticleCollection";
import { Readme } from "./Readme";

import type { Welcome as Descriptor } from "../descriptor";

export const Welcome: React.FC<Descriptor> = ({
  readme,
  articleCollection,
}) => {
  return (
    <div>
      <Readme {...readme} />
      <ArticleCollection {...articleCollection} />
    </div>
  );
};
