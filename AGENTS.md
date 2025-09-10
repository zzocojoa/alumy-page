# Repository Guidelines

## Project Structure & Module Organization
- App entry: `index.html`, `src/main.jsx`, `src/App.jsx`.
- Components: `src/components/` (PascalCase files, one component per file).
- Hooks: `src/hooks/` (camelCase starting with `use`, e.g., `useScrollFadeIn.js`).
- Styles: Tailwind classes in JSX; globals in `src/index.css` and `src/App.css`.
- Assets: `public/` for static files and `src/assets/` for imported assets.
- Tooling: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `eslint.config.js`.

## Build, Test, and Development Commands
- `npm run dev` — start Vite dev server with HMR.
- `npm run build` — production build into `dist/`.
- `npm run preview` — serve the built `dist/` locally.
- `npm run lint` — run ESLint on the project.
- `npm run deploy` — publish `dist/` to GitHub Pages (uses `gh-pages`).

## Coding Style & Naming Conventions
- Language: React 19 with JSX; functional components only.
- Indentation: 2 spaces; no semicolons preferred if consistent with existing files.
- Components: PascalCase filenames (`Hero.jsx`, `BackToTopButton.jsx`).
- Hooks/utilities: camelCase (`useScrollFadeIn.js`).
- Props/state names: descriptive camelCase; avoid abbreviations.
- Linting: keep code `npm run lint`-clean; fix warnings where feasible.

## Testing Guidelines
- No test framework is configured yet. If adding tests, prefer Vitest + React Testing Library.
- Co-locate tests next to source as `*.test.jsx`.
- Aim for critical-path coverage (rendering, interactions, edge cases) when added.

## Commit & Pull Request Guidelines
- Commits: concise, imperative subject. Prefer Conventional Commits (`feat:`, `fix:`, `chore:`) when possible.
- PRs: include purpose, summary of changes, screenshots for UI tweaks, and linked issues.
- Keep PRs focused; avoid unrelated refactors.

## Deployment
- Site is configured for GitHub Pages via `homepage` in `package.json`.
- Build locally with `npm run build`, verify with `npm run preview`, then `npm run deploy`.

## Agent-Specific Notes
- Keep changes minimal and aligned with existing patterns and file locations.
- Do not introduce new tools or global reformatting without scope approval.
- When adding components, place in `src/components/`; prefer small, focused functions and Tailwind utility classes.

