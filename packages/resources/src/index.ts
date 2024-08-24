import type { Entry, ExternalEntry, WithContent } from "@repo/fetcher";
import esa from "./_generated/esa.json";
import hatena from "./_generated/hatena.json";
import qiita from "./_generated/qiita.json";

const all = [
  ...(esa as WithContent[]),
  ...(hatena as ExternalEntry[]),
  ...(qiita as ExternalEntry[]),
];

export const allPosts = async (): Promise<Entry[]> => {
  return all.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
};

export const readme = async (): Promise<string> => {
  return esa.find((entry) => entry.title === "README")?.content ?? "";
};
