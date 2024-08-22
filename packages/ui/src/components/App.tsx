import classNames from "classnames";
import Markdown from "react-markdown";

export const App = ({ txt }: { txt: string }) => {
  return (
    <div className="h-screen grid grid-cols-[80px_auto] grid-rows-[auto_1fr] ">
      <header className="col-span-2 grid justify-start items-baseline px-4 py-2 ">
        <div className="font-museo text-2xl">shotanue.dev</div>
      </header>
      <aside className="col-span-1">
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
        <article className="pr-4">
          <MarkdownRenderer>{txt}</MarkdownRenderer>
        </article>
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

const MarkdownRenderer = (props: { children: string }) => {
  return (
    <Markdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold mt-10 mb-5 border-b-4 pb-3 text-gray-800">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl mt-10 mb-5 font-bold border-b-2 pb-2 text-gray-700">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-medium mb-2 text-gray-600">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-xl font-medium mb-2 text-gray-600">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-lg font-medium mb-2 text-gray-600">{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-base font-medium mb-2 text-gray-600">
            {children}
          </h6>
        ),
        p: ({ children }) => <p className="mb-4 text-gray-600">{children}</p>,
        ul: ({ children }) => (
          <ul className="list-disc list-inside mb-4 text-gray-600">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside mb-4 text-gray-600">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="mb-1">{children}</li>,
        a: ({ href, children }) => (
          <a href={href} className="text-blue-600 hover:underline">
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-gray-300 pl-4 py-2 mb-4 italic text-gray-600">
            {children}
          </blockquote>
        ),

        img: ({ src, alt }) => (
          <img src={src} alt={alt} className="max-w-full h-auto rounded my-4" />
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {children}
          </td>
        ),
      }}
    >
      {props.children}
    </Markdown>
  );
};
