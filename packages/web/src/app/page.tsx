import { fetchHatenaPosts, fetchLocalPosts, fetchQiitaPosts } from "@repo/resources";
import { ArticleCard, Welcome } from "@repo/ui";

export default async function Home() {
  const [localPosts, hatenaPosts, qiitaPosts] = await Promise.all([
    fetchLocalPosts(),
    fetchHatenaPosts({ userName: "shotanue" }),
    fetchQiitaPosts({ userName: "shotanue" }),
  ]);

  const allPosts = [...localPosts, ...hatenaPosts, ...qiitaPosts];

  // Sort posts by date descending
  const sortedPosts = allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  // Take recent 20 posts (increased from 10 to show more variety)
  const recentPosts = sortedPosts.slice(0, 20);

  return <Welcome articles={
    <>
      {recentPosts.map((article, index) => (
        <ArticleCard key={article.href} article={article} index={index} />
      ))}
    </>
  } />;
}
