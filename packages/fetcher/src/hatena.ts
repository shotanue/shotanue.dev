import axios from "axios";
import xml2js from "xml2js";
import { z } from "zod";
import { Entry } from "./types";

const schema = z.array(
  z
    .object({
      id: z.string(),
      title: z.string(),
      link: z.object({
        href: z.string(),
      }),
      published: z.string(),
      updated: z.string(),
    })
    .transform((x) => {
      return {
        id: x.id,
        title: x.title,
        href: x.link.href,
        publishedAt: x.published,
        updatedAt: x.updated,
      };
    }),
);

export const hatena = async (
  userName: `${string}.hatenablog.com`,
): Promise<Entry[]> => {
  const response = await axios.get<Entry[]>(
    `https://${userName}.hatenablog.com/feed?exclude_body=1&size=100`,
  );

  const parser = new xml2js.Parser({
    explicitArray: false,
    mergeAttrs: true,
  });

  const result = await parser.parseStringPromise(response.data);

  return schema.parse(result);
};