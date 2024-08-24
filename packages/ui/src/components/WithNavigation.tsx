export const WithNavigation: React.FC<
  React.PropsWithChildren & { nav: React.ReactNode }
> = ({ children, nav }) => {
  return (
    <div className="grid grid-cols-[300px_1fr]">
      <nav className="px-4">{nav}</nav>
      <section>{children}</section>
    </div>
  );
};
