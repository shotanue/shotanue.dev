export const Layout = ({
  children,
  aside,
}: {
  children: React.ReactNode;
  aside: React.ReactNode;
}) => {
  return (
    <div className=" grid grid-cols-[80px_auto] grid-rows-[auto_1fr] ">
      <header className="sticky top-0 z-10 col-span-2 grid grid-cols-[300px_auto] justify-start items-baseline px-4 py-2 bg-white">
        <span className="font-museo text-2xl">shotanue.dev</span>
      </header>
      <aside>
        <nav>{aside}</nav>
      </aside>
      <main>{children}</main>
    </div>
  );
};
