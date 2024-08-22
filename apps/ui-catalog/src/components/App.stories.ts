import type { Meta, StoryObj } from "@storybook/react";

import { App } from "@repo/ui";

const meta: Meta<typeof App> = {
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {
  args: {
    txt: `
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
