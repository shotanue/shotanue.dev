export const App = ({ txt }: { txt: string }) => {
  return (
    <div className="h-screen grid grid-cols-[80px_auto] grid-rows-[auto_1fr] ">
      <header className="col-span-2 grid justify-start items-baseline px-4 py-2 ">
        <div className="font-museo text-2xl">shotanue.dev</div>
      </header>
      <aside className="col-span-1 grid justify-centera">
        <ul className="flex flex-col gap-4 pt-4">
          <li>
            <a
              className="grid grid-cols-1 grid-rows-[2fr_1fr] justify-center items-center"
              href="/"
            >
              <i className="col-span-1 i-heroicons-home text-4xl mx-auto" />
              <span className="col-span-1 text-xs mx-auto">Home</span>
            </a>
          </li>
          <li>
            <a
              className="grid grid-cols-1 grid-rows-[2fr_1fr] justify-center items-center"
              href="/posts"
            >
              <i className="col-span-1 i-heroicons-document-text text-4xl mx-auto" />
              <span className="col-span-1 text-xs mx-auto">Posts</span>
            </a>
          </li>
          <li>
            <a
              className="grid grid-cols-1 grid-rows-[2fr_1fr] justify-center items-center"
              href="/tags"
            >
              <i className="col-span-1 i-heroicons-tag text-4xl mx-auto" />
              <span className="col-span-1 text-xs mx-auto">Tags</span>
            </a>
          </li>
        </ul>
      </aside>
      <main className="col-span-1">
        <h1>{txt}</h1>
      </main>
    </div>
  );
};
