# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/`: Route pages (`.astro`) and dynamic routes.
- `src/components/`: Reusable UI (e.g., `components/ui/link-btn.astro`).
- `src/layouts/`: Shared page layouts.
- `src/styles/`: Global and MDX styles.
- `src/lib/`: Utilities, types, config, and `constants/` for site data.
- `src/data/blog/` and `src/data/projects/`: Content in MDX.
- `public/`: Static assets and Open Graph images.

## Build, Test, and Development Commands
- `pnpm dev` (or `npm run dev`): Start local dev server with HMR.
- `pnpm build` (or `npm run build`): Build static site to `dist/`.
- `pnpm preview` (or `npm run preview`): Serve the production build locally.
- Lint/format (no scripts): `pnpm dlx eslint .` and `pnpm dlx prettier --write .`.

## Coding Style & Naming Conventions
- Formatting: Prettier (+ `prettier-plugin-astro`, `prettier-plugin-tailwind`). Run before commit.
- Linting: ESLint with `typescript-eslint` and `eslint-plugin-astro`; `no-console` is enforced as an error.
- Files: Prefer kebab-case for `.astro` components; keep modules concise and co-located.
- Types & TS: PascalCase for types/interfaces; camelCase for variables/functions.
- Imports: Use alias `@/*` (see `tsconfig.json`) instead of deep relative paths.

## Testing Guidelines
- No formal test suite yet. For logic in `src/lib/`, add focused unit tests (Vitest recommended) or include manual verification steps.
- Validate builds and key routes: `/`, `/articles`, `/projects`, and dynamic pages render without console errors.
- Provide screenshots for UI changes (light and dark modes) in PRs.

## Commit & Pull Request Guidelines
- Commits: Follow Conventional Commits (e.g., `feat(articles): add pagination`, `fix(ui): correct dark-mode toggle`).
- PRs: Include a clear summary, linked issues, screenshots of UI changes, and notes on testing. Keep diffs small and focused.

## Security & Configuration Tips
- Site config and integrations live in `astro.config.mjs`; avoid committing secrets.
- Keep images optimized under `public/`; large assets and generated files (e.g., `dist/`) should not be committed.
