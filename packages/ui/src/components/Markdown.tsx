import { default as Rernderer } from "react-markdown";

export const Markdown = (props: { children: string }) => {
  return (
    <Rernderer
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
    </Rernderer>
  );
};
