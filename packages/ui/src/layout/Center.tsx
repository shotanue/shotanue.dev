import type { PropsWithChildren } from "react";

export const Center: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-[1220px] m-auto">{children}</div>;
};
