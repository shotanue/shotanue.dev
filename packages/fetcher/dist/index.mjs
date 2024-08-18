import * as axios from "axios";
import axios__default from "axios";
import xml2js from "xml2js";
import { z } from "zod";

// src/qiita.ts
var schema = z.array(
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
var qiita = async (userName) => {
  const response = await axios__default.get(`https://qiita.com/api/v2/users/${userName}/items?page=1&per_page=100`);
  return schema.parse(response.data);
};
var schema2 = z.array(
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
var hatena = async (userName) => {
  const response = await axios__default.get(`https://${userName}.hatenablog.com/feed?exclude_body=1&size=100`);
  const parser = new xml2js.Parser({
    explicitArray: false,
    mergeAttrs: true,
  });
  const result = await parser.parseStringPromise(response.data);
  return schema2.parse(result);
};
var getPosts = (teamName, params, options) => {
  return axios.default.get(`/teams/${teamName}/posts`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

// src/esa.ts
var esa = async (teamName, category) => {
  const { data: posts } = await getPosts(teamName, {
    q: `in:${category}`,
    per_page: 100,
  });
  return posts.posts.map((post) => {
    return {
      id: post.number.toString(),
      title: post.name,
      href: post.url,
      publishedAt: post.created_at,
      updatedAt: post.updated_at,
    };
  });
};

export { esa, hatena, qiita };
