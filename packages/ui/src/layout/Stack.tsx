export const Stack = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex flex-col divide-y-2 gap-1">{children}</ul>;
};

export const StackItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="pt-1 place-items-baseline">{children}</li>;
};
