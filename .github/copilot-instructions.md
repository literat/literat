---
applyTo: '**'
---

# literat.dev - AI Instructions for GitHub Copilot

## Project Overview

This is a personal blog of a developer. The site features blog posts written in
MDX with syntax highlighting, dynamic social image generation, and tag-based
navigation. It is built with **Gatsby** and TypeScript, deployed on Netlify.

## Architecture & Key Patterns

### Content System

- **Blog posts** live in `src/posts/YYYY-MM-DD-title/index.mdx` (or `.md`)
- Post frontmatter requires: `title`, `excerpt`, `date`, `category`, `tags`, and
  optionally `image`
- Posts are automatically slugified and routed to `/blog/YYYY-MM-DD/slug` (see
  `gatsby-node.ts:onCreateNode`)
- Pages without dates in directory names are treated as standalone pages (e.g.,
  About, Contact)
- Use `yarn post` to create new posts interactively via `scripts/createPost.mjs`

### Routing & Page Generation

- `gatsby-node.ts:createPages` generates all blog post pages and tag pages
  dynamically
- Tag pages are auto-generated at `/tags` (all tags) and `/tags/{tagName}`
  (single tag)
- Previous/next navigation is calculated during build time and passed via
  `pageContext`
- Special layout for thumbnail page (`pageContext.layout === 'thumbnail'`) used
  by social image function

### Styling

- Uses **styled-components** with a consistent naming pattern:
  `{Component}Styles`
- Global styles in `src/components/styles/GlobalStyles.tsx` define CSS custom
  properties
- Component styles typically co-located or in `src/components/styles/`
- Fira Code font with custom fallback metrics for performance

### Code Syntax Highlighting

- Uses `gatsby-remark-vscode` with Solarized Dark theme
- Configured in `gatsby-config.ts` with custom inline code marker (`»`)
- Supports vscode-styled-components extension for syntax in template literals

### Path Aliases

- `@/*` resolves to `src/*` (configured in `tsconfig.json` and
  `gatsby-config.ts`)
- Always use absolute imports with `@/` prefix for internal modules

## Development Workflows

### Essential Commands

```bash
yarn dev             # Start dev server (http://localhost:8000)
yarn build           # Production build
yarn clean           # Clear Gatsby cache
yarn test            # Run all checks (lint, format, unit tests, commitlint)
yarn test:unit:watch # Jest in watch mode
yarn post            # Interactive post creation wizard
```

### Testing

- Jest configured with `babel-preset-gatsby` for Gatsby compatibility
- Test setup in `tests/setup-test-env.js` (includes @testing-library/jest-dom)
- Transform ignores: `node_modules` except `gatsby` and `gatsby-script`
- Tests use identity-obj-proxy for CSS modules

### Linting & Formatting

- ESLint extends `wesbos` config with MDX support (see `eslint.config.mjs`)
- Prettier config from `@lmc-eu/prettier-config`
- Markdown linting with remark (config: `@almacareer/remark-config`)
- Text linting with textlint (preset: `@lmc-eu/textlint-rule-preset-lmc`)
- Commitlint enforces conventional commits (ignores Renovate’s
  `chore(deps): Update`)

### Deployment

- Netlify auto-deploys from `main` branch
- Build ignores handled by `scripts/ignoreNetlifyBuilds.js`
- Deploy previews only trigger on changes to `src/` or `functions/`
- Uses Yarn 4 with immutable installs (`YARN_FLAGS = "--immutable"`)

## Serverless Functions

### Social Image Generation (`functions/social-image/index.ts`)

- Uses Puppeteer + Chromium to screenshot `/thumbnail` page with query params
- Caches generated images in memory (`Map`)
- Dev mode uses local Chrome at
  `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- Production uses `@sparticuz/chromium` for Netlify Functions
- Viewport: 1200x630 @ 1.5x device scale (optimized for social sharing)

## Common Conventions

### File Naming

- Components: PascalCase (for example, `HeroImage.tsx`)
- Styles: `{Component}Styles.tsx` or inline styled-components
- Utils: camelCase (for example, `getBaseUrl.ts`)
- Tests: `__tests__/{filename}.test.ts`

### GraphQL Queries

- Use fragments for reusable fields
- File path context passed to MDX components via `__contentFilePath` query param
- Reading time calculated by `gatsby-remark-reading-time` plugin

### MDX Components

- Custom MDX components in `src/components/mdx/`
- Provided via `MDXProvider` in `Layout.tsx`
- Headings use custom `H` component with anchor links

## Critical Dependencies

- **Gatsby** - Static site generator
- **React** - UI library
- **styled-components** - CSS in JS
- **gatsby-plugin-mdx** - MDX support (note: v5 has breaking changes from v3)
- **slugify** - Used for URL generation (lowercase, strict mode, removes colons)
- **Yarn 4+** - Package manager (Berry/Modern)

## Important Notes

- Node version: **22+** (see `.nvmrc`)
- Husky git hooks configured (runs via `postinstall`)
- Renovate configured (`.renovaterc.json`) for dependency updates
- GraphQL Typegen disabled (`graphqlTypegen: false`)
- Trailing slashes enforced on all routes (`trailingSlash: 'always'`)
