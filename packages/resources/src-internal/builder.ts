import { esa, hatena, qiita } from "@repo/fetcher";

export const buildEsa = async ({
  outputPath,
  token,
  category,
  teamName,
  skip,
}: {
  outputPath: string;
  token: string;
  teamName: string;
  category: string;
  skip?: boolean;
}) => {
  if (skip) {
    return;
  }

  console.log("fetching esa...");

  const res = await esa({
    teamName,
    category,
    token,
  });

  await Bun.write(outputPath, JSON.stringify(res));
};

export const buildHatena = async ({
  outputPath,
  userName,
  skip,
}: {
  outputPath: string;
  userName: string;
  skip?: boolean;
}) => {
  if (skip) {
    return;
  }
  console.log("fetching hatena...");

  const res = await hatena({ userName });

  await Bun.write(outputPath, JSON.stringify(res));
};

export const buildQiita = async ({
  outputPath,
  userName,
  skip,
}: {
  outputPath: string;
  userName: string;
  skip?: boolean;
}) => {
  if (skip) {
    return;
  }
  console.log("fetching hatena...");

  const res = await qiita({ userName });

  await Bun.write(outputPath, JSON.stringify(res));
};
