---
title: ブログをまたまた作り直した2025秋
tags: ["nextjs", "react", "tailwindcss", "turborepo", "antigravity"]
publishedAt: 2025-11-25T00:00:00+09:00
updatedAt: 2025-11-25T00:00:00+09:00
---

ブログをまた作り直した。
時々作り直すことで、自分の力量なんかが計れて良いし、メディア系のサイト作る時の実験台としても便利。

## 技術構成

今回の技術構成は以下の通り

- **Framework**: Next.js 16 (React)
- **Styling**: Tailwind CSS (v4)
- **Package Manager**: pnpm (v10)
- **Monorepo Tool**: Turborepo

`pnpm workspace` + `turborepo` を採用してモノレポ構成にしている。
`packages/web` に Next.js アプリケーション、`packages/ui` に共通の UI コンポーネント、`packages/resources` に記事データなどを配置している

## デザインと実装プロセス

デザインは **Figma Make** でプロトタイピングを行い、完成形の各ページをスクリーンショットして **Antigravity** に食わせるという手法を取った。

Antigravity は結構体感が良かった
期待値の 8 割くらいの精度のものがポコポコ出てくる印象
特に画像から実装を起こす能力がかなり高い
微調整は必要だが、ゼロからコーディングする手間が大幅に削減された

