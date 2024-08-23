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
  });

  await buildHatena({
    outputPath: config.hatena.outputPath,
    userName: config.hatena.userName,
  });

  await buildQiita({
    outputPath: config.qiita.outputPath,
    userName: config.qiita.userName,
  });
};

main();
