![lint](https://github.com/shotanue/shotanue.dev/actions/workflows/lint.yml/badge.svg)

# [shotanue.dev](https://shotanue.dev)

## Tech Stack

- monorepo
  - turborepo
- linter/formatter
  - biome
- web application
  - Next.js
  - TypeScript
  - tailwindcss
- packages
  - api client
    - axios
    - orval

## setup

```sh
pnpm i
```

## How to develop

write `.env` file.

```txt
ESA_TOKEN=xxxxxxxx
ESA_TEAM_NAME=xxxxxxxx
ESA_CATEGORY=xxxxxxxx
HATENA_USERNAME=xxxxxxxx
QIITA_USERNAME=xxxxxxxx
```

```bash
pnpm dev
```
