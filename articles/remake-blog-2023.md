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

[ソースコード](https://github.com/shotanue/shotanue.dev)

[前回のブログ作りはこちら](https://shotanue.hatenablog.com/entry/2022/12/10/042735)

今回はNext.jsなど使わず、オレオレSSGを[bun.sh](https://bun.sh)と[mustache.js](https://github.com/janl/mustache.js)で構築した。


hatenaやQiitaに記事を投稿していて、shotanue.devではそれらの記事へのインデックスを張るサイトだったが、今回の作り直しで自前でコンテンツをホスティングできるようにした。

## 今回のテーマ(設計)
アプリケーションの依存関係を減らすために、Next.jsなど使わず、mustacheなどシンプルなものを組み合わせて構築した。


おかげで、依存関係は以下の少なさで済んでいる。

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
```

## 今回のテーマ(スタイル)

描画されるテキストのスタイルを全体的にマークダウン風にした。

マークダウンのプレビューみながら、テキストを記述する際、文字サイズの具合からheadingのレベルを推測するのが、しんどいなーと常々思っており、h1タグなら`# foo`というような感じで、#を描画させるスタイルにしたかった。

その他の点としては、依存関係を減らしまくった結果、SaSSも使わず、CSSも自前になっている。

CSSネスティングなど試したいなーという意図もある。

ただ、Tailwindなどのフレームワークも利用していない関係、CSS力が露骨に出ており、結果として色々な箇所でスタイル崩れが起きている。

この問題についてはCSS勉強ということで色々試しつつ、ちょっとずつ直していこうと思う。


