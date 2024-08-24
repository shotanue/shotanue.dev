import { LabelledIcon, Layout, Logo, Stack, StackItem } from "@repo/ui";
import type { Metadata } from "next";
import Link from "next/link";

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
      <body>
        <Layout
          header={
            <Link href="/">
              <Logo />
            </Link>
          }
          aside={
            <Stack>
              <StackItem>
                <LabelledIcon icon="i-heroicons-home" selected>
                  HOME
                </LabelledIcon>
              </StackItem>
              <StackItem>
                <LabelledIcon icon="i-heroicons-document-text">
                  POSTS
                </LabelledIcon>
              </StackItem>
              <StackItem>
                <LabelledIcon icon="i-heroicons-tag">TAGS</LabelledIcon>
              </StackItem>
            </Stack>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
