import {
  buildEsa,
  buildHatena,
  buildQiita,
  fetchConfig,
} from "../src-internal";

const main = async () => {
  const config = fetchConfig();

  await buildEsa({
    outputPath: config.esa.outputPath,
    token: config.esa.token,
    category: config.esa.category,
    teamName: config.esa.teamName,
    skip: await Bun.file(config.esa.outputPath)
      .exists()
      .then((x) => {
        if (x) {
          console.log("skip to fetch esa: already exists");
        }

        return x;
      }),
  });

  await buildHatena({
    outputPath: config.hatena.outputPath,
    userName: config.hatena.userName,
    skip: await Bun.file(config.hatena.outputPath)
      .exists()
      .then((x) => {
        if (x) {
          console.log("skip to fetch hatena: already exists");
        }

        return x;
      }),
  });

  await buildQiita({
    outputPath: config.qiita.outputPath,
    userName: config.qiita.userName,
    skip: await Bun.file(config.qiita.outputPath)
      .exists()
      .then((x) => {
        if (x) {
          console.log("skip to fetch qiita: already exists");
        }

        return x;
      }),
  });
};

main();
