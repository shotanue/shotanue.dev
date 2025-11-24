import React from "react";
import { motion } from "motion/react";
import { format } from "date-fns";

interface ArticleCardProps {
    article: {
        title: string;
        publishedAt: string;
        href: string;
        kind?: string;
        category?: string;
    };
    index: number;
    onClick?: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, index, onClick }) => {
    return (
        <motion.a
            href={article.href}
            target={article.kind === "external" ? "_blank" : undefined}
            rel={article.kind === "external" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(39, 39, 42, 0.5)" }}
            className="block p-6 rounded-lg border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm transition-colors group cursor-pointer"
            onClick={(e) => {
                if (onClick) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors">
                {article.title}
            </h3>

            <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
                <div className="flex items-center gap-1">
                    <span className="i-heroicons-calendar w-4 h-4" />
                    {format(new Date(article.publishedAt), "yyyy年M月d日")}
                </div>

                {article.category && (
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-xs">
                            {article.category}
                        </span>
                    </div>
                )}
            </div>
        </motion.a>
    );
};
