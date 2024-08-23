export type Entry = Hatena | Qiita | Esa;

export type Hatena = {
  kind: "hatena";
  id: string;
  title: string;
  href: string;
  publishedAt: string;
  updatedAt: string;
};
export type Qiita = {
  kind: "qiita";
  id: string;
  title: string;
  href: string;
  publishedAt: string;
  updatedAt: string;
};
export type Esa = {
  kind: "esa";
  id: string;
  title: string;
  href: string;
  publishedAt: string;
  updatedAt: string;
  content: string;
};
