import type { Category as Descriptor } from "../descriptor";

export const Category: React.FC<{ children: Descriptor }> = ({ children }) => {
  return (
    <span className="text-sm text-gray-500 hover:underline underline-offset-2 hover:text-cyan-600">
      {children}
    </span>
  );
};
