import { z } from "zod";

export { buildEsa, buildHatena, buildQiita } from "./builder";

export const fetchConfig = () => {
  const env = z
    .object({
      ESA_TOKEN: z.string(),
      ESA_TEAM_NAME: z.string(),
      ESA_CATEGORY: z.string(),
      HATENA_USERNAME: z.string(),
      QIITA_USERNAME: z.string(),
    })
    .parse(Bun.env);

  const outputDir = `${__dirname}/../src/_generated`;
  console.log("output to", outputDir);
  return {
    hatena: {
      userName: env.HATENA_USERNAME,
      outputPath: `${outputDir}/hatena.json`,
    },
    esa: {
      token: env.ESA_TOKEN,
      teamName: env.ESA_TEAM_NAME,
      category: env.ESA_CATEGORY,
      outputPath: `${outputDir}/esa.json`,
    },
    qiita: {
      outputPath: `${outputDir}/qiita.json`,
      userName: env.QIITA_USERNAME,
    },
  };
};
