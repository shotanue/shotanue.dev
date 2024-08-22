import classNames from "classnames";

export const App = ({ txt }: { txt: string }) => {
  return (
    <div className="h-screen grid grid-cols-[80px_auto] grid-rows-[auto_1fr] ">
      <header className="col-span-2 grid justify-start items-baseline px-4 py-2 ">
        <div className="font-museo text-2xl">shotanue.dev</div>
      </header>
      <aside className="col-span-1 grid justify-centera">
        <nav>
          <ul className="flex flex-col gap-4 pt-4">
            <li>
              <IconLink icon="i-heroicons-home" href="/" selected>
                HOME
              </IconLink>
            </li>
            <li>
              <IconLink icon="i-heroicons-document-text" href="/posts">
                POSTS
              </IconLink>
            </li>
            <li>
              <IconLink icon="i-heroicons-tag" href="/tags">
                TAGS
              </IconLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="col-span-1 grid grid-cols-[300px_1fr]">
        <nav>
          <ul>
            <li>
              <a href="/readme" className="p-2 text-sm">
                <span>README</span>
              </a>
            </li>
            <li>
              <a href="/posts?tag=qiita" className="p-2 text-sm">
                <span>qiita</span>
              </a>
            </li>
            <li>
              <a href="/posts?tag=hatena" className="p-2 text-sm">
                <span>hatena</span>
              </a>
            </li>
          </ul>
        </nav>
        <article>{txt}</article>
      </main>
    </div>
  );
};

const IconLink = ({
  icon,
  selected,
  href,
  children,
}: {
  icon: string;
  selected?: boolean;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className="grid grid-cols-1 grid-rows-[2fr_1fr] justify-center items-center"
      href={href}
    >
      <div className="flex relative">
        <i className={classNames(icon, "col-span-1", "text-4xl", "mx-auto")} />
        {selected && (
          <span
            className="w-0 h-0 absolute left-16 top-2
          border-t-[10px] border-t-transparent
          border-r-[15px] border-r-gray-700
          border-b-[10px] border-b-transparent"
          />
        )}
      </div>
      <span className="col-span-1 text-xs mx-auto">{children}</span>
    </a>
  );
};
