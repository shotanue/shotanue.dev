import { format } from "date-fns";
import { motion } from "motion/react";
import type React from "react";

interface ArticleCardProps {
  article: {
    title: string;
    publishedAt: string;
    href: string;
    kind?: string;
    category?: string;
    tags?: string[];
  };
  index: number;
  onClick?: () => void;
}

import Link from "next/link";

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, index, onClick }) => {
  const isExternal = article.kind === "external" && article.category !== "internal";

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(39, 39, 42, 0.5)" }}
      className="block p-6 rounded-lg border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm transition-colors group cursor-pointer relative overflow-hidden h-full"
    >
      {/* External Badge */}
      {isExternal && article.category && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 rounded bg-zinc-100 text-zinc-900 text-xs font-bold">
            {article.category === "hatena" ? "Hatena" : article.category === "qiita" ? "Qiita" : article.category}
          </span>
        </div>
      )}

      <h3 className="text-xl font-bold text-zinc-100 mb-4 pr-16 leading-snug group-hover:text-blue-400 transition-colors">{article.title}</h3>

      <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 font-mono mb-4">
        <div className="flex items-center gap-2">
          <span className="i-heroicons-calendar w-4 h-4" />
          {format(new Date(article.publishedAt), "yyyy年M月d日")}
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="i-heroicons-tag w-4 h-4" />
            <div className="flex gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-800/50 text-zinc-400 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* External Link Footer */}
      {isExternal && (
        <div className="flex items-center gap-2 text-sm text-blue-400 mt-4 pt-4 border-t border-zinc-800/50">
          <span className="text-zinc-500 shrink-0">[ Read on {article.category === "hatena" ? "Hatena Blog" : "Qiita"} ]</span>
          <span className="opacity-70 hover:opacity-100 transition-opacity break-all">( {article.href.replace(/^https?:\/\//, "")} )</span>
          <span className="i-heroicons-arrow-top-right-on-square w-4 h-4 ml-auto shrink-0" />
        </div>
      )}
    </motion.div>
  );

  if (isExternal) {
    return (
      <a
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        className="block"
      >
        {CardContent}
      </a>
    );
  }

  const LinkComponent = Link as any;

  return (
    <LinkComponent href={article.href} className="block" onClick={onClick}>
      {CardContent}
    </LinkComponent>
  );
};
