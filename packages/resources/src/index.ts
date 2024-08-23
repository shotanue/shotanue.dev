import esa from "./_generated/esa.json";
import hatena from "./_generated/hatena.json";
import qiita from "./_generated/qiita.json";

export const allPosts = async () => {
  const all = [...esa, ...hatena, ...qiita];

  return all.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
};
