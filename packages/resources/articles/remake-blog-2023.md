---
id: remake-blog-2023
tags:
  - tech
  - frontend
title: ブログをまた作り直した2023冬
publishedAt: 2023-12-25T03:00:00+09:00
updatedAt: 2023-12-25T03:00:00+09:00
---

## ブログをまた作り直した

* **ソースコード** - [GitHubリポジトリ](https://github.com/shotanue/shotanue.dev)
* **前回の記事** - [前回のブログ作りに関する記事](https://shotanue.hatenablog.com/entry/2022/12/10/042735)
* **技術スタック** - Next.jsなどは使わず、**bun.sh**と**mustache.js**を使ったオレオレSSG（Static Site Generator）で構築
* **ホスティング変更** - 以前ははてなやQiitaの記事のインデックスサイトだったが、今回の作り直しで**自前でコンテンツをホスティング**できるようにした

---

## 今回のテーマ（設計）

* **目的** - アプリケーションの依存関係を減らすこと
* **手法** - Next.jsなどを使わず、mustacheなどシンプルなものを組み合わせて構築
* **依存関係** - 以下の通り、非常に少ない依存関係で済んでいる

```json
  "dependencies": {
    "just-sort-by": "3.2.0",
    "mustache": "4.2.0",
    "zod": "3.22.4"
  },
  "devDependencies": {
    "@biomejs/biome": "1.3.1",
    "@types/browser-sync": "^2.29.0",
    "@types/html-minifier": "^4.0.5",
    "@types/mustache": "^4.2.5",
    "browser-sync": "^2.29.3",
    "bun-types": "latest",
    "feed": "4.2.2",
    "html-minifier": "^4.0.0"
  },