# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `bun run dev` - Starts development server with hot reloading using BrowserSync
- **Build**: `bun run build` - Builds the static site to `public/` directory
- **Pull feeds**: `bun run pullFeeds` - Fetches external feed data from FEED_ENDPOINT environment variable
- **Test**: `bun test` - Runs tests using Bun's built-in test runner
- **Lint check**: `bun run check` - Runs Biome linter and formatter checks
- **Lint fix**: `bun run check:fix` - Runs Biome with auto-fixes (--apply-unsafe)
- **CI check**: `bun run ci` - Runs CI-compatible Biome check

## Project Architecture

This is a static site generator (SSG) built with Bun and TypeScript that creates shotanue.dev personal blog/homepage.

### Core Build System (`src/build.ts`)
- **Template Engine**: Uses Mustache for HTML templating with partials system
- **Content Sources**: 
  - Local articles in `articles/` (markdown files processed to JSON in `resources/articles/`)
  - External feeds fetched via `pullFeeds` function stored in `resources/feeds.json`
- **Output**: Generates static HTML files in `public/` following Cloudflare Pages conventions (`/path/index.html`)

### Key Architecture Patterns
- **Path Aliases**: `@` maps to `src/index`, `@/*` maps to `src/*` (configured in tsconfig.json)
- **Content Aggregation**: `aggregateFiles()` function processes directories into dictionaries and lists
- **Route Generation**: Dynamic routes created for each article at `/posts/{id}`
- **Feed Generation**: RSS, Atom, and JSON feeds generated in `public/feed/`

### Template System
- **Main Template**: `templates/template.html` with `%%%%` placeholder for dynamic content
- **Partials**: Reusable components in `partials/` directory (nav, post, posts, top, styles)
- **HTML Minification**: Uses html-minifier for production builds

### Content Types
- **Post Interface**: Defined in `src/types.d.ts` with fields: kind, id, title, link, publishedAt, updatedAt, tags, html
- **External Feeds**: Fetched from FEED_ENDPOINT environment variable and merged with local articles

### Development Workflow
- **Hot Reload**: BrowserSync watches `templates/`, `partials/`, `resources/`, `assets/` directories
- **Asset Handling**: Static assets copied from `assets/` to `public/assets/`
- **Setup**: Uses mise for tool management (see README.md)

## Environment Variables

- `FEED_ENDPOINT`: Required for `pullFeeds` command to fetch external content

## Code Style

- **Linter**: Biome with recommended rules
- **Formatting**: 2-space indentation, 120 character line width
- **TypeScript**: Strict mode enabled with ESNext target