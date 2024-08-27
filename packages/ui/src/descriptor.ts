// ontlogy
export type Identifier = string;
export type Name = string;
export type ArticleBody = string;
export type DatePublished = string;
export type DateModified = string;
export type Tag = string;
export type Category = string;

// taxonomy
export type Readme = {
  articleBody: ArticleBody;
};
export type TagCollection = Tag[];
export type Article = {
  identifier: Identifier;
  name: Name;
  category: Category;
  tagCollection: TagCollection;
  articleBody: ArticleBody;
  datePublished: DatePublished;
  dateModified: DateModified;
};

export type ArticleCollection = {
  identifier: Article["identifier"];
  name: Article["name"];
  category: Article["category"];
  tagCollection: Article["tagCollection"];
  datePublished: Article["datePublished"];
  dateModified: Article["dateModified"];
  goArticle: goArticle;
}[];

export type CategorizedArticleCollection = {
  articleCollection: ArticleCollection;
};
export type TaggedArticleCollection = {
  articleCollection: ArticleCollection;
};

export type Welcome = {
  readme: Readme;
  articleCollection: ArticleCollection;
};

// choreography
export type goArticle = (props: { identifier: Identifier }) => void;
export type filterByTag = (props: { tag: Tag }) => void;
export type filterByCategory = (props: { category: Category }) => void;
