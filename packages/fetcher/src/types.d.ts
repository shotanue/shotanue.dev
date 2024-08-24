export type Entry = ExternalEntry | WithContent;

export type ExternalEntry = {
  kind: "external";
  category: string;
  title: string;
  href: string;
  publishedAt: string;
  updatedAt: string;
};

export type WithContent = {
  kind: "withContent";
  category: string;
  href: string;
  title: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
};
