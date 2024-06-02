export const App = ({ txt }: { txt: string }) => {
  return (
    <div className="flex h-screen">
      <header className="m-auto">
        <p className="text-3xl underline underline-offset-8 font-['Menlo'] hover:underline-offset-4 hover:text-3xl hover:border-red-500 hover:border-4 hover:p-4 hover:cursor-pointer">
          {txt}
        </p>
      </header>
    </div>
  );
};
