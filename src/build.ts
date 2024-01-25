export { build };

import { cpSync } from "fs";
import sortBy from "just-sort-by";
import mustache from "mustache";
import { z } from "zod";
import { makeRenderHTML } from "./makeRenderHTML";
import { Post } from "./types";

// disable cache
mustache.templateCache = undefined;

const aggregateFiles = async (scanDir: string) => {
  const dict: Record<string, string> = {};
  const list: {
    id: string;
    content: string;
  }[] = [];

  for await (const file of new Bun.Glob("*").scan(scanDir)) {
    dict[file] = await Bun.file(`${scanDir}/${file}`).text();
    list.push({ id: file.replace(/\.[^/.]+$/, ""), content: dict[file] });
  }

  return { dict, list };
};

type Conf = {
  mustache: {
    template: string;
    templatePlaceholder: string;
    partialsDir: string;
    // partials: Record<string, string>;
  };
  // define assets directory.
  assets: string;
  routes: {
    path: string;
    html: {
      children: string;
      params: Record<string, unknown>;
    };
  }[];
};

const ssg = async ({ mustache, assets, routes }: Conf) => {
  cpSync(assets, "public/assets", { recursive: true });

  const renderHTML = makeRenderHTML({ ...mustache, partials: (await aggregateFiles(mustache.partialsDir)).dict });
  // write html to given path, adhering to cloudflare pages path specs.
  // `/foo/index.html` is accesible as `/foo`
  const writings = routes.map(async ({ path, html }) => {
    await Bun.write(`public${path}/index.html`, await renderHTML(html));
  });

  return Promise.all(writings);
};

const build = async () => {
  const feeds = await Bun.file("./resources/feeds.json").json();
  const articles = (await aggregateFiles("./resources/articles")).list
    .map((x) => ({
      id: x.id,
      content: JSON.parse(x.content) as {
        html: string;
        frontmatter: { id: string; title: string; tags: string[]; publishedAt: string; updatedAt: string };
      },
    }))
    .map((x): Post => {
      z.object({
        tags: z.array(z.string()),
        publishedAt: z.string(),
      }).parse(x.content.frontmatter);

      const extractTitleUsingRegex = (htmlString: string) => {
        const match = htmlString.match(/<h[1-6]>(.*?)<\/h[1-6]>/);
        return match ? match[1] : "";
      };

      return {
        kind: "shotanue.dev",
        id: x.id,
        title: extractTitleUsingRegex(x.content.html.split("\n").at(0) ?? ""),
        tags: x.content.frontmatter.tags,
        link: `/posts/${x.id}`,
        publishedAt: x.content.frontmatter.publishedAt,
        updatedAt: x.content.frontmatter.updatedAt,
        html: x.content.html,
      };
    });

  const posts = sortBy([...feeds, ...articles], "publishedAt").reverse();

  await ssg({
    mustache: {
      template: await Bun.file("./templates/template.html").text(),
      templatePlaceholder: "%%%%",
      partialsDir: "./partials",
    },
    assets: "./assets",
    routes: [
      {
        path: "/",
        html: {
          children: "top.html",
          params: {
            metaTitle: "shotanue.dev",
            title: "Home",
            location: "/",
            posts,
            A_TARGET: function (this: { link: string }) {
              return this.link.startsWith("/") ? "" : "_blank";
            },
          },
        },
      },
      {
        path: "/nav",
        html: {
          children: "nav.html",
          params: {
            title: "Nav",
            location: "/nav",
            metaTitle: "shotanue.dev|nav",
            returnTo: "/",
          },
        },
      },
      {
        path: "/posts",
        html: {
          children: "posts.html",
          params: {
            title: "Posts",
            metaTitle: "shotanue.dev|Posts",
            location: "/posts",
            returnTo: "/",
            posts,
            A_TARGET: function (this: { link: string }) {
              return this.link.startsWith("/") ? "" : "_blank";
            },
          },
        },
      },
      ...articles.map((article) => {
        return {
          path: `/posts/${article.id}`,
          html: {
            children: "post.html",
            params: {
              metaTitle: `shotanue.dev|${article.title}`,
              location: `/posts/${article.id}`,
              returnTo: "/posts/",
              title: article.title,
              article,
            },
          },
        };
      }),
    ],
  });
};
