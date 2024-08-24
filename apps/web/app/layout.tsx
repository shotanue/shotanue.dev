import type { Metadata } from "next";

import "@repo/ui/index.css";

export const metadata: Metadata = {
  title: "shotanue.dev",
  description: "Shotaro Hirukawa's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
