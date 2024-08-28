import type { Identifier as Descriptor } from "../descriptor";

export const Identifier: React.FC<{ children: Descriptor }> = ({
  children,
}) => {
  return (
    <span className="text-gray-600 text-base font-semibold">{children}</span>
  );
};
