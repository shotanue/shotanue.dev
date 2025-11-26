import { Layout } from "@repo/ui";
import type { Metadata, Viewport } from "next";
import "@repo/ui/index.css";

export const metadata: Metadata = {
  title: "shotanue.dev",
  description: "@shotanue's homepage",
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
