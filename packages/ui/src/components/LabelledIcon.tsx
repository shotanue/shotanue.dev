import classNames from "classnames";

export const LabelledIcon = ({
  icon,
  selected,
  children,
}: {
  icon: string;
  selected?: boolean;
  children: React.ReactNode;
}) => {
  // Available icons.
  // For telling the tailwind bundler to include these icons in the package.
  // These codes itself are not bundled in the package, due to dead code elimination.
  <i className="i-heroicons-home" />;
  <i className="i-heroicons-tag" />;
  <i className="i-heroicons-document-text" />;

  return (
    <div className="grid grid-cols-1 grid-rows-[2fr_1fr] justify-center items-center">
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
    </div>
  );
};
