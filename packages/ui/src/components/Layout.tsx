import type { PropsWithChildren } from "react";

export const Layout = ({ children, path }: PropsWithChildren<{ path: string }>) => (
  <section className="w-screen h-screen bg-gradient-to-r from-teal-900 from-10% via-teal-800 to-teal-700 flex items-center justify-center">
    <div className="container bg-gray-800">{path}</div>
  </section>
);
