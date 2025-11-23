import type { Metadata } from "next";
import "@repo/ui/index.css";

export const metadata: Metadata = {
  title: "Web",
  description: "Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body><>{children}</></body>
    </html>
  );
}
