import type { DateModified as Descriptor } from "../descriptor";

export const DateModified: React.FC<{ children: Descriptor }> = ({
  children,
}) => {
  return <span>{children}</span>;
};
