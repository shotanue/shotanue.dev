import React from "react";
import { motion } from "motion/react";
import { Layout } from "../../layout/Layout";
import { ArticleCard } from "../ontology/ArticleCard";

interface WelcomeProps {
  recentArticles: Array<{
    title: string;
    publishedAt: string;
    href: string;
    kind?: string;
    category?: string;
    tags?: string[];
  }>;
}

export const Welcome: React.FC<WelcomeProps> = ({ recentArticles }) => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Intro Section */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-zinc-500 font-mono">##</span>
            <h2 className="text-xl font-bold text-zinc-200">Welcome to Tech Blog</h2>
          </div>

          <div className="prose prose-invert max-w-none text-zinc-400">
            <p>
              This is a technical blog where I share insights, tutorials, and thoughts about software development, web technologies, and engineering practices.
            </p>
          </div>
        </section>

        {/* What You'll Find Here Section */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-zinc-500 font-mono">##</span>
            <h2 className="text-xl font-bold text-zinc-200">What You'll Find Here</h2>
          </div>

          <div className="space-y-4 text-zinc-400">
            <ul className="space-y-2 list-disc list-inside marker:text-zinc-600">
              <li>
                <strong className="text-zinc-200">**Web Development**:</strong> Deep dives into React, TypeScript, and modern frontend frameworks
              </li>
              <li>
                <strong className="text-zinc-200">**System Design**:</strong> Architecture patterns and best practices
              </li>
              <li>
                <strong className="text-zinc-200">**DevOps**:</strong> CI/CD, containerization, and cloud infrastructure
              </li>
              <li>
                <strong className="text-zinc-200">**Programming Concepts**:</strong> Algorithms, data structures, and design patterns
              </li>
            </ul>
            <p className="pt-4">
              Feel free to explore the articles below and reach out if you have any questions!
            </p>
            <p>
              <strong className="text-zinc-200">**[Contact me](mailto:hello@example.com)**</strong>
            </p>
          </div>
        </section>

        {/* Articles Section */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-zinc-500 font-mono">##</span>
            <h2 className="text-xl font-bold text-zinc-200">Articles</h2>
          </div>

          <div className="grid gap-4">
            {recentArticles.map((article, index) => (
              <ArticleCard
                key={article.href}
                article={article}
                index={index}
              />
            ))}
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};
