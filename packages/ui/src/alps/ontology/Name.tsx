import type { Name as Descriptor } from "../descriptor";

export const Name: React.FC<{ children: Descriptor }> = ({ children }) => {
  return <span className="text-gray-700 text-4xl">{children}</span>;
};
