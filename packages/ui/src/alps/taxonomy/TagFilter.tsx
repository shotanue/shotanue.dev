"use client";
import { motion } from "motion/react";
import type React from "react";
import { Layout } from "../../layout/Layout";
import { ArticleCard } from "../ontology/ArticleCard";

interface TagFilterProps {
  tag: string;
  articles: Array<{
    title: string;
    publishedAt: string;
    href: string;
    kind?: string;
    category?: string;
  }>;
}

export const TagFilter: React.FC<TagFilterProps> = ({ tag, articles }) => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-12">
        <header className="space-y-4 border-b border-zinc-800 pb-8">
          <div className="flex items-center gap-2 text-sm text-zinc-500 font-mono mb-4">
            <a href="/" className="hover:text-zinc-300 transition-colors flex items-center gap-1">
              <span className="i-heroicons-home w-4 h-4" />
              Home
            </a>
            <span>/</span>
            <span>Tags</span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-zinc-500 font-mono text-xl">##</span>
            <h1 className="text-3xl font-bold text-zinc-100">
              Tagged with: <span className="text-blue-400">{tag}</span>
            </h1>
          </div>

          <p className="text-zinc-400">
            {articles.length} {articles.length === 1 ? "article" : "articles"} found
          </p>
        </header>

        <div className="grid gap-4">
          {articles.map((article, index) => (
            <ArticleCard key={article.href} article={article} index={index} />
          ))}
        </div>

        {articles.length === 0 && <div className="text-center py-12 text-zinc-500">No articles found with this tag.</div>}
      </motion.div>
    </Layout>
  );
};
