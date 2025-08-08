# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Branches

This repository has two different architectures:

### Main Branch (Current Static Site)
- **Development server**: `bun run dev` - Starts development server with hot reloading using BrowserSync
- **Build**: `bun run build` - Builds the static site to `public/` directory
- **Pull feeds**: `bun run pullFeeds` - Fetches external feed data from FEED_ENDPOINT environment variable
- **Test**: `bun test` - Runs tests using Bun's built-in test runner
- **Lint check**: `bun run check` - Runs Biome linter and formatter checks
- **Lint fix**: `bun run check:fix` - Runs Biome with auto-fixes (--apply-unsafe)
- **CI check**: `bun run ci` - Runs CI-compatible Biome check

### Monorepo Branch (Modern Architecture)
- **Setup**: `pnpm i` - Install dependencies using pnpm
- **Development server**: `pnpm dev` - Starts all apps in development mode using Turborepo
- **Build**: `pnpm build` - Builds all packages and apps
- **Lint check**: `pnpm check` - Runs Biome linter across monorepo
- **Lint fix**: `pnpm check:fix` - Runs Biome with auto-fixes across monorepo

## Project Architecture

### Main Branch - Static Site Generator
This is a static site generator (SSG) built with Bun and TypeScript that creates shotanue.dev personal blog/homepage.

#### Core Build System (`src/build.ts`)
- **Template Engine**: Uses Mustache for HTML templating with partials system
- **Content Sources**: 
  - Local articles in `articles/` (markdown files processed to JSON in `resources/articles/`)
  - External feeds fetched via `pullFeeds` function stored in `resources/feeds.json`
- **Output**: Generates static HTML files in `public/` following Cloudflare Pages conventions (`/path/index.html`)

#### Key Architecture Patterns
- **Path Aliases**: `@` maps to `src/index`, `@/*` maps to `src/*` (configured in tsconfig.json)
- **Content Aggregation**: `aggregateFiles()` function processes directories into dictionaries and lists
- **Route Generation**: Dynamic routes created for each article at `/posts/{id}`
- **Feed Generation**: RSS, Atom, and JSON feeds generated in `public/feed/`

#### Template System
- **Main Template**: `templates/template.html` with `%%%%` placeholder for dynamic content
- **Partials**: Reusable components in `partials/` directory (nav, post, posts, top, styles)
- **HTML Minification**: Uses html-minifier for production builds

#### Content Types
- **Post Interface**: Defined in `src/types.d.ts` with fields: kind, id, title, link, publishedAt, updatedAt, tags, html
- **External Feeds**: Fetched from FEED_ENDPOINT environment variable and merged with local articles

#### Development Workflow
- **Hot Reload**: BrowserSync watches `templates/`, `partials/`, `resources/`, `assets/` directories
- **Asset Handling**: Static assets copied from `assets/` to `public/assets/`
- **Setup**: Uses mise for tool management (see README.md)

### Monorepo Branch - Modern Architecture
A complete rewrite using modern tooling and monorepo architecture with Turborepo, Next.js, and component-driven development.

#### Monorepo Structure
- **Package Manager**: pnpm with workspace configuration
- **Build System**: Turborepo for task orchestration and caching
- **Workspaces**: `apps/*` and `packages/*` (defined in pnpm-workspace.yaml)

#### Applications (`apps/`)
- **web**: Next.js application for the main website
  - Framework: Next.js 14 with React 18
  - Dependencies: `@repo/resources`, `@repo/ui` (workspace packages)
  - Development: Auto-opens browser at http://localhost:3000
- **ui-catalog**: Storybook for component development
  - Tool: Storybook 8 with Vite
  - Purpose: Component documentation and testing
  - Dependencies: `@repo/ui` components
  - Port: 6006

#### Packages (`packages/`)
- **@repo/fetcher**: API client package
  - Purpose: Fetches data from external sources (Esa, Hatena, Qiita)
  - Tools: Orval for API client generation, tsup for bundling
  - Dependencies: axios, feed, xml2js, zod
- **@repo/resources**: Content aggregation and processing
  - Purpose: Processes and builds content from external APIs
  - Runtime: Bun for build scripts
  - Dependencies: `@repo/fetcher`, axios, zod
- **@repo/ui**: Shared UI components
  - Purpose: Reusable React components with Tailwind CSS
  - Framework: React with TypeScript
  - Styling: Tailwind CSS with Heroicons
  - Components: ALPS-based semantic components for articles, tags, etc.

#### ALPS Integration
- **Schema Definition**: `alps.json` defines semantic descriptors based on schema.org
- **Component Architecture**: UI components map to ALPS descriptors (Article, Tag, Category, etc.)
- **Semantic Web**: Components follow schema.org vocabulary for better SEO and data structure

#### Environment Variables (Monorepo)
Required for content fetching:
- `ESA_TOKEN`: Esa API authentication token
- `ESA_TEAM_NAME`: Esa team identifier
- `ESA_CATEGORY`: Esa category filter
- `HATENA_USERNAME`: Hatena blog username
- `QIITA_USERNAME`: Qiita username

#### Development Workflow (Monorepo)
- **Parallel Development**: Turborepo runs multiple apps simultaneously
- **Component Development**: Storybook for isolated component work
- **Hot Reload**: Next.js development server with fast refresh
- **Build Dependencies**: Turborepo manages package build order automatically

## Environment Variables

### Main Branch
- `FEED_ENDPOINT`: Required for `pullFeeds` command to fetch external content

### Monorepo Branch
- `ESA_TOKEN`: Esa API authentication token
- `ESA_TEAM_NAME`: Esa team identifier  
- `ESA_CATEGORY`: Esa category filter
- `HATENA_USERNAME`: Hatena blog username
- `QIITA_USERNAME`: Qiita username

## Code Style

- **Linter**: Biome with recommended rules (both branches)
- **Formatting**: 2-space indentation, 120 character line width
- **TypeScript**: Strict mode enabled with ESNext target
- **Monorepo**: Additional Tailwind CSS and component conventions