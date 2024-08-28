import type { Tag as Descriptor } from "../descriptor";

import { FilterByTag } from "../choreography/FilterByTag";

export const Tag: React.FC<{ children: Descriptor }> = ({ children }) => {
  return (
    <FilterByTag tag={children}>
      <span className="before:content-['#']">{children}</span>
    </FilterByTag>
  );
};
