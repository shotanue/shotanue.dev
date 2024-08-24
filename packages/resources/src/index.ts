import type { Entry, ExternalEntry, WithContent } from "@repo/fetcher";
import esa from "./_generated/esa.json";
import hatena from "./_generated/hatena.json";
import qiita from "./_generated/qiita.json";

export const allPosts = async (): Promise<Entry[]> => {
  const all = [
    ...(esa as WithContent[]),
    ...(hatena as ExternalEntry[]),
    ...(qiita as ExternalEntry[]),
  ];

  return all.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
};
