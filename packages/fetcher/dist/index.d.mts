type Entry = {
  id: string;
  title: string;
  href: string;
  publishedAt: string;
  updatedAt: string;
};

declare const qiita: (userName: string) => Promise<Entry[]>;

declare const hatena: (userName: `${string}.hatenablog.com`) => Promise<Entry[]>;

declare const esa: (teamName: string, category: string) => Promise<Entry[]>;

export { esa, hatena, qiita };
