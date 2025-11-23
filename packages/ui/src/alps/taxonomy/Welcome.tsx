// import { ArticleCollection } from "./ArticleCollection";
// import { Readme } from "./Readme";

// import type { Welcome as Descriptor } from "../descriptor";
import { motion } from "motion/react";

export const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-lg bg-zinc-900/70 rounded-xl border border-zinc-800 shadow-2xl px-4 py-8 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        hello world
        {/* <MarkdownRenderer content={readme.articleBody} /> */}
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* <Separator className="my-8 bg-zinc-800" /> */}
        aaa
      </motion.div>

      <section>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-baseline gap-2 mb-6"
        >
          <span className="text-zinc-500">##</span>
          <h2 className="text-zinc-200">Recent Articles</h2>
          <span className="text-zinc-400 text-sm ml-2">(last 10 posts)</span>
        </motion.div>

        <div className="space-y-4">
          posts
          {/* {recentArticles.map((article, index) => (
            <ArticleCard
              key={article.identifier}
              article={article}
              index={index}
              onClick={() => onArticleClick(article.identifier)}
            />
          ))} */}
        </div>
      </section>
    </motion.div>
  );
};
