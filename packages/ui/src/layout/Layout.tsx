import React from "react";
import { motion } from "motion/react";

interface LayoutProps {
  children: React.ReactNode;
}

import { GeometricPattern } from "../primitive/GeometricPattern";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-zinc-800 selection:text-zinc-100 relative">
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <GeometricPattern seed={42} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50">
          <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-sm font-medium hover:text-white transition-colors">
              <span className="text-zinc-500 mr-2">#</span>
              home
            </a>
            {/* Add more navigation items here if needed */}
          </div>
        </header>

        <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto w-full flex-grow">
          {children}
        </main>

        <footer className="border-t border-zinc-900 mt-auto">
          <div className="max-w-4xl mx-auto px-4 py-8 text-center text-zinc-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Tech Blog. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
