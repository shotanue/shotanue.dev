'use client';

import { format } from "date-fns";
import { motion } from "motion/react";
import type React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../layout/Layout";

interface ArticleProps {
  identifier: string;
  name: string;
  articleBody: string;
  datePublished: string;
  dateModified?: string;
  category?: string;
  tagCollection: string[];
}

export const Article: React.FC<ArticleProps> = ({ name, articleBody, datePublished, dateModified, category, tagCollection }) => {
  return (
    <Layout>
      <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-12 space-y-6 border-b border-zinc-800 pb-12">
          <div className="flex items-center gap-2 text-sm text-zinc-500 font-mono mb-4">
            <a href="/" className="hover:text-zinc-300 transition-colors flex items-center gap-1">
              <span className="i-heroicons-home w-4 h-4" />
              Home
            </a>
            <span>/</span>
            <span>Articles</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight">{name}</h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 font-mono">
            <div className="flex items-center gap-2">
              <span className="i-heroicons-calendar w-4 h-4" />
              <span>Published: {format(new Date(datePublished), "yyyy年M月d日")}</span>
            </div>

            {dateModified && (
              <div className="flex items-center gap-2">
                <span className="i-heroicons-clock w-4 h-4" />
                <span>Updated: {format(new Date(dateModified), "yyyy年M月d日")}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {tagCollection.map((tag) => (
              <a
                key={tag}
                href={`/tags/${tag}`}
                className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm hover:border-zinc-600 hover:text-zinc-200 transition-colors"
              >
                <span className="mr-1">#</span>
                {tag}
              </a>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert prose-zinc max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <div className="flex items-baseline gap-2 mt-12 mb-6">
                  <span className="text-zinc-600 font-mono text-xl">#</span>
                  <h1 className="text-3xl font-bold text-zinc-100 m-0">{children}</h1>
                </div>
              ),
              h2: ({ children }) => (
                <div className="flex items-baseline gap-2 mt-10 mb-4">
                  <span className="text-zinc-600 font-mono text-lg">##</span>
                  <h2 className="text-2xl font-bold text-zinc-200 m-0">{children}</h2>
                </div>
              ),
              h3: ({ children }) => (
                <div className="flex items-baseline gap-2 mt-8 mb-3">
                  <span className="text-zinc-600 font-mono text-base">###</span>
                  <h3 className="text-xl font-bold text-zinc-300 m-0">{children}</h3>
                </div>
              ),
              p: ({ children }) => <p className="text-zinc-400 leading-relaxed mb-6">{children}</p>,
              ul: ({ children }) => <ul className="space-y-2 list-disc list-inside marker:text-zinc-600 mb-6 text-zinc-400">{children}</ul>,
              ol: ({ children }) => <ol className="space-y-2 list-decimal list-inside marker:text-zinc-600 mb-6 text-zinc-400">{children}</ol>,
              li: ({ children }) => <li className="pl-2">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-zinc-700 pl-4 py-1 my-6 text-zinc-500 italic bg-zinc-900/30 rounded-r">
                  {children}
                </blockquote>
              ),
              code: ({ className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || "");
                const isInline = !match;
                return isInline ? (
                  <code className="bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                    {children}
                  </code>
                ) : (
                  <div className="relative group my-6">
                    <div className="absolute -top-3 right-4 text-xs text-zinc-500 font-mono bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                      {match?.[1]}
                    </div>
                    <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto text-sm font-mono text-zinc-300">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  </div>
                );
              },
              a: ({ href, children }) => (
                <a href={href} className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <figure className="my-8">
                  <img src={src} alt={alt} className="rounded-lg border border-zinc-800 shadow-lg w-full" />
                  {alt && <figcaption className="text-center text-sm text-zinc-500 mt-2">{alt}</figcaption>}
                </figure>
              ),
            }}
          >
            {articleBody}
          </ReactMarkdown>
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex justify-between items-center">
            <a href="/" className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-2">
              <span className="i-heroicons-arrow-left w-4 h-4" />
              Back to Home
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-2"
            >
              Top
              <span className="i-heroicons-arrow-up w-4 h-4" />
            </button>
          </div>
        </footer>
      </motion.article>
    </Layout>
  );
};
