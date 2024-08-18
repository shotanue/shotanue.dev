import axios from "axios";
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
        id: x.id,
        title: x.title,
        href: x.url,
        publishedAt: x.created_at,
        updatedAt: x.updated_at,
      };
    }),
);

export const qiita = async (userName: string): Promise<Entry[]> => {
  const response = await axios.get(`https://qiita.com/api/v2/users/${userName}/items?page=1&per_page=100`);

  return schema.parse(response.data);
};
