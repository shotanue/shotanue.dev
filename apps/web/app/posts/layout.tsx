import { WithNavigation } from "@repo/ui";
import type { PropsWithChildren } from "react";

export default async function ({ children }: PropsWithChildren) {
  return <WithNavigation nav={"記事一覧"}>{children}</WithNavigation>;
}
