import { z } from "zod";
import type { Entry } from "./types";

const schema = z.array(
  z
    .object({
      id: z.string(),
      title: z.string(),
      url: z.string(),
      created_at: z.string(),
      updated_at: z.string(),
    })
    .transform((x) => {
      return {
        kind: "external",
        category: "qiita",
        id: x.id,
        title: x.title,
        href: x.url,
        publishedAt: x.created_at,
        updatedAt: x.updated_at,
      } as const;
    }),
);

export const fetchQiitaPosts = async ({
  userName,
}: {
  userName: string;
}): Promise<Entry[]> => {
  const response = await fetch(
    `https://qiita.com/api/v2/users/${userName}/items?page=1&per_page=100`,
  );

  const data = await response.json();

  return schema.parse(data);
};
