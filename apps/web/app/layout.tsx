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
              <Link href="/">
                <StackItem>
                  <LabelledIcon icon="i-heroicons-home" selected>
                    HOME
                  </LabelledIcon>
                </StackItem>
              </Link>
              <Link href="/posts">
                <StackItem>
                  <LabelledIcon icon="i-heroicons-document-text">
                    POSTS
                  </LabelledIcon>
                </StackItem>
              </Link>
              <Link href="/tags">
                <StackItem>
                  <LabelledIcon icon="i-heroicons-tag">TAGS</LabelledIcon>
                </StackItem>
              </Link>
            </Stack>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
