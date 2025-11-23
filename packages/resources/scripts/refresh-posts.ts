import {
  fetchHatenaPosts,
  fetchQiitaPosts,
} from "../src";

import * as fs from "node:fs"

const main = async () => {
  const fetching = Promise.all([
    fetchHatenaPosts({ userName: "shotanue" }),
    fetchQiitaPosts({ userName: "shotanue" }),
  ]);

  const [hatena, qiita] = await fetching;

  const all = [...hatena, ...qiita];

  const cwd = process.cwd();

  const outputDir = `${cwd}/posts`;

  if (!cwd.endsWith("resources")) {
    throw new Error("outputDir must be resources");
  }

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir);

  for (const post of all) {
    const base64encodedTitle = Buffer.from(post.title).toString("base64url");
    fs.writeFileSync(`${outputDir}/${base64encodedTitle}.json`, JSON.stringify(post));
  }
};

main();
