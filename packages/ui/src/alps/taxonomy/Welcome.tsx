"use client";

import { motion } from "motion/react";
import type React from "react";
import { Layout } from "../../layout/Layout";

interface WelcomeProps {
  articles: React.ReactNode;
}

export const Welcome = ({ articles }: WelcomeProps) => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-12">
        {/* Profile Section */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-zinc-500 font-mono">#</span>
            <h1 className="text-2xl font-bold text-zinc-200">Shotaro Hirukawa</h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-zinc-500 font-mono">##</span>
            <h2 className="text-xl font-bold text-zinc-200">Hello, there🤘🏼</h2>
          </div>

          <div className="prose prose-invert max-w-none text-zinc-400">
            <p>I'm a web developer, working in Japan.</p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-zinc-500 font-mono">##</span>
            <h2 className="text-xl font-bold text-zinc-200">Capabilities</h2>
          </div>

          <div className="text-zinc-400">
            <p>Web development, TypeScript, React, Next.js, PHP, MySQL</p>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-zinc-500 font-mono">##</span>
            <h2 className="text-xl font-bold text-zinc-200">You can find me on</h2>
          </div>

          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            <li>
              <a
                href="https://x.com/shotanue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-100 underline decoration-zinc-600 hover:decoration-zinc-400"
              >
                [X](https://x.com/shotanue)
              </a>
            </li>
            <li>
              <a
                href="https://github.com/shotanue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-100 underline decoration-zinc-600 hover:decoration-zinc-400"
              >
                [GitHub](https://github.com/shotanue)
              </a>
            </li>
            <li>
              <a
                href="https://qiita.com/shotanue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-100 underline decoration-zinc-600 hover:decoration-zinc-400"
              >
                [Qiita](https://qiita.com/shotanue)
              </a>
            </li>
            <li>
              <a
                href="https://shotanue.hatenablog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-100 underline decoration-zinc-600 hover:decoration-zinc-400"
              >
                [Hatena](https://shotanue.hatenablog.com)
              </a>
            </li>
          </ul>
        </section>

        {/* Articles Section */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-zinc-500 font-mono">##</span>
            <h2 className="text-xl font-bold text-zinc-200">Articles</h2>
          </div>

          <div className="grid gap-4">{articles}</div>
        </section>
      </motion.div>
    </Layout>
  );
};
