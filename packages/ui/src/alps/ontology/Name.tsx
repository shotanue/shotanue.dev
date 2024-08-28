import type { Name as Descriptor } from "../descriptor";

export const Name: React.FC<{ children: Descriptor }> = ({ children }) => {
  return <span>{children}</span>;
};
