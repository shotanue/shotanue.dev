import type { PropsWithChildren } from "react";

export const GoArticle: React.FC<PropsWithChildren<{ id: string }>> = ({ children, id }) => {
  if (id.startsWith("http")) {
    return (
      <a href={id} target="_blank">
        {children}
      </a>
    );
  }

  return <a href={`/posts/${id}`}>{children}</a>;
};
