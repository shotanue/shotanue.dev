import type { Meta, StoryObj } from "@storybook/react";

import { ArticleBody } from "@repo/ui";

const meta: Meta<typeof ArticleBody> = {
  component: ArticleBody,
};

export default meta;
type Story = StoryObj<typeof ArticleBody>;

export const Default: Story = {
  args: {
    children: `
# Markdownサンプルテキスト

## はじめに

これは**Markdown**を使用したサンプルテキストです。様々な要素を含んでいます。

## テキストスタイル

*イタリック*と**太字**のテキストを使用できます。また、***太字とイタリック***を組み合わせることもできます。

## リスト

### 番号なしリスト

- アイテム1
- アイテム2
  - サブアイテムA
  - サブアイテムB
- アイテム3

### 番号付きリスト

1. 最初のアイテム
2. 2番目のアイテム
3. 3番目のアイテム

## リンク

[OpenAI](https://www.openai.com/)のウェブサイトはこちらです。

## 引用

> 知識とは、行動を起こすための力である。
>
> -- ピーター・ドラッカー

## テーブル

| 名前 | 年齢 | 職業 |
|------|------|------|
| 山田太郎 | 30 | エンジニア |
| 佐藤花子 | 28 | デザイナー |
| 鈴木一郎 | 45 | マネージャー |

## 水平線

以下は水平線です：

---

## 結論

これで、Markdownの主要な要素をカバーするサンプルテキストが完成しました。このテキストを使用して、MarkdownRendererコンポーネントの機能をテストできます。
    `,
  },
};

export const Empty: Story = {};

export const h1: Story = {
  args: {
    children: "# 見出し1",
  },
};

export const h2: Story = {
  args: {
    children: "## 見出し2",
  },
};
export const h3: Story = {
  args: {
    children: "### 見出し3",
  },
};

export const h4: Story = {
  args: {
    children: "#### 見出し4",
  },
};

export const h5: Story = {
  args: {
    children: "##### 見出し5",
  },
};

export const h6: Story = {
  args: {
    children: "###### 見出し6",
  },
};
export const BoldText: Story = {
  args: {
    children: "**これは太字のテキストです**",
  },
};

export const ItalicText: Story = {
  args: {
    children: "*これはイタリックのテキストです*",
  },
};

export const BoldItalicText: Story = {
  args: {
    children: "***これは太字とイタリックのテキストです***",
  },
};

export const UnorderedList: Story = {
  args: {
    children: `
- リストアイテム1
- リストアイテム2
  - サブアイテム1
  - サブアイテム2
- リストアイテム3
    `,
  },
};

export const OrderedList: Story = {
  args: {
    children: `
1. 番号付きリストアイテム1
2. 番号付きリストアイテム2
3. 番号付きリストアイテム3
    `,
  },
};

export const Link: Story = {
  args: {
    children: "[Google](https://www.google.com)",
  },
};

export const Blockquote: Story = {
  args: {
    children: `
> これは引用です。
>
> -- 有名な人物
    `,
  },
};

export const Table: Story = {
  args: {
    children: `
| 見出し1 | 見出し2 | 見出し3 |
|---------|---------|---------|
| データ1 | データ2 | データ3 |
| データ4 | データ5 | データ6 |
    `,
  },
};

export const HorizontalRule: Story = {
  args: {
    children: "---",
  },
};

export const CodeBlock: Story = {
  args: {
    children: `
\`\`\`javascript
console.log("Hello, world!");
\`\`\`
    `,
  },
};

export const InlineCode: Story = {
  args: {
    children: "これは `インラインコード` です。",
  },
};
