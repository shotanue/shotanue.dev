export const FilterByTag: React.FC<{
  tag: string;
  children: React.ReactNode;
}> = ({ children, tag }) => {
  return <a href={`/posts?tag=${tag}`}>{children}</a>;
};
