export const App = ({ txt }: { txt: string }) => {
  return (
    <div className="grid grid-cols-1 p-4a">
      <header className="">
        <div className="">
          <span className="i-heroicons-folder" />
          <p className="text-purple-500">shotanue.dev</p>
          {txt}
        </div>
      </header>
    </div>
  );
};
