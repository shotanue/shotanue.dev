import type { Tag as Descriptor } from "../descriptor";

import { FilterByTag } from "../choreography/FilterByTag";

export const Tag: React.FC<{ children: Descriptor }> = ({ children }) => {
  return (
    <FilterByTag tag={children}>
      <span className="text-gray-500 text-sm hover:underline underline-offset-2 hover:text-cyan-600 before:content-['#']">
        {children}
      </span>
    </FilterByTag>
  );
};
