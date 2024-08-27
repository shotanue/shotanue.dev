import type { Category as Descriptor } from "../descriptor";

export const Category: React.FC<{ children: Descriptor }> = ({ children }) => {
  return <span>{children}</span>;
};
