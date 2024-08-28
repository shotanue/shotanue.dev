import type { DateModified as Descriptor } from "../descriptor";

export const DatePublished: React.FC<{ children: Descriptor }> = ({
  children,
}) => {
  return <span>{children}</span>;
};
