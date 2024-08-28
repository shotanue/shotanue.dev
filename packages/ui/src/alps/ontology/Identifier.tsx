import type { Identifier as Descriptor } from "../descriptor";

export const Identifier: React.FC<{ children: Descriptor }> = ({
  children,
}) => {
  return <span>{children}</span>;
};
