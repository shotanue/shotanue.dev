import { Layout } from "@repo/ui";
import type { Metadata } from "next";
import "@repo/ui/index.css";

export const metadata: Metadata = {
  title: "shotanue.dev",
  description: "@shotanue's homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ja">
      <body>
        <Layout>{children as any}</Layout>
      </body>
    </html>
  );
}
