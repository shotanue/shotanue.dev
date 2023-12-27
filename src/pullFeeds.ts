export { pullFeeds };

import * as fs from "fs";
import { Feed } from "feed";
import { FEEDS_JSON_PATH } from "./resources";
import { Posts } from "./types";

const persistFeeds = (posts: Posts) => {
  const baseUrl = "https://shotanue.dev";

  const date = new Date();

  const author = {
    name: "Shotaro Hirukawa",
    email: "shotanue@gmail.com",
    link: "https://shotanue.dev",
  };

  const feed = new Feed({
    title: "shotanue.dev",
    description: `@shotanue's homepage`,
    id: baseUrl,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    link: baseUrl,
    language: "ja",
    image: `${baseUrl}/favicon.jpg`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author,
  });

  // feed で定義した情報から各記事での変更点を宣言
  for (const post of posts) {
    // post のプロパティ情報は使用しているオブジェクトの形式に合わせる
    feed.addItem({
      title: post.title,
      description: post.title,
      id: post.link,
      link: post.link,
      date: new Date(post.publishedAt),
    });
  }

  // フィード情報を public/rss 配下にディレクトリを作って保存
  fs.mkdirSync("./public/feed", { recursive: true });
  fs.writeFileSync("./public/feed/feed.xml", feed.rss2());
  fs.writeFileSync("./public/feed/atom.xml", feed.atom1());
  fs.writeFileSync("./public/feed/feed.json", feed.json1());
};

const persistPosts = (posts: Posts) => {
  Bun.write(FEEDS_JSON_PATH, JSON.stringify(posts));
};

const pullFeeds = async (): Promise<Posts> => {
  const feedEndpoint = Bun.env.FEED_ENDPOINT;
  if (!feedEndpoint) {
    throw new Error("no feed endpoint given");
  }
  const res = await fetch(feedEndpoint);
  const { posts } = (await res.json()) as { posts: Posts };

  // todo extract side effects
  persistFeeds(posts);
  persistPosts(posts);

  return posts;
};
