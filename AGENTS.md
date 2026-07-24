# AGENTS.md — xx.theojs.net

> Scope: the repository root and every subdirectory. There are currently no nested `AGENTS.md` files. Add one
> only when a subtree has genuinely different rules, and document only the differences from this file.

## Project and toolchain

This is the Chinese VitePress site at `https://xx.theojs.net`. Its Markdown collection covers the five
traditional arts, spiritual pets, and related classics.

- Use the Node.js release declared in `.nvmrc`.
- Use the pnpm release declared in `package.json#packageManager`; `pnpm-lock.yaml` and `pnpm-workspace.yaml` are
  authoritative for dependency resolution and workspace behavior.
- The main stack is VitePress, Vite, Vue, `@theojs/lumen`, and `vitepress-plugin-llms`. Read exact dependency
  versions from `package.json` and `pnpm-lock.yaml`, and schema or tool versions from the owning config or tool
  metadata.
- Production currently runs on Cloudflare Pages project `xx-theojs-cn`, built from `main` with `pnpm build` and
  `.vitepress/dist`. Verify the live platform state before changing deployment assumptions.
- Biome provides the formatter, recommended linter, and import organizer; do not introduce Prettier.
- There are no dedicated `test`, `typecheck`, or browser-test scripts. `pnpm run check` is the canonical
  code-quality check, and a VitePress build is the main integration check.

## Before making changes

1. Read this file from the repository root. Run `git status --short --branch` and `git status` to inspect the
   branch, upstream, ahead/behind state, index, untracked files, and any Git operation in progress.
2. Preserve existing work. Do not automatically stash, reset, clean, rebase, or overwrite modified target files.
3. When synchronization is needed and `main` is clean, use only `git pull --ff-only`. Stop and report if the
   branch is unclear, the worktree is dirty, or a fast-forward is impossible.
4. Stay within Theo's explicit authorization. Commits, pushes, PR changes, merges, deployments, and branch
   deletion require separate approval.

## Important paths

- `content/` is the VitePress `srcDir`; Markdown paths determine public routes, and `content/index.md` maps to `/`.
- `content/index.md` contains the home-page frontmatter, hero, Notice, actions, and `<Underline />`.
- `content/public/` contains root-served static assets such as the favicon, manifest, and robots file.
- `.vitepress/config.mts` assembles the sitemap, theme, Algolia search, SEO, llms plugin, and Vue compiler options.
- `.vitepress/configs/` contains nav, sidebar, search, head, social-link, and `transformPageData` modules.
- `.vitepress/data/` and `.vitepress/theme/index.ts` contain Lumen Aside/Footer data, layout slots, global
  components, and Umami initialization.
- `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and `biome.json` define scripts, dependencies, pnpm
  behavior, and formatting. Workspace settings deliberately disable peer auto-installation and the release-age
  delay.
- `renovate.json` only extends `github>s-theo/dotfiles`; keep dependency policy in the shared preset.

## Commands

```bash
pnpm install --frozen-lockfile
pnpm run dev
pnpm run build
pnpm run preview
pnpm run check
pnpm run format
```

`format` rewrites files; use `check` for a check-only run. Installation writes `node_modules`; builds write
`.vitepress/dist`; dev/preview start long-running servers. `pnpm run upall` changes dependency files. Do not edit
the lockfile manually; `pnpm-workspace.yaml` controls install and build-script policy.

## Content, routing, and theme rules

- `srcDir: 'content'` and `cleanUrls: true`. Public page URLs omit `.md` and `.html`; `nav.ts` uses root-absolute
  internal paths.
- Update the relevant sidebar when adding, renaming, or moving a page. Change nav only for top-level entry
  changes. Moving a file also changes its public URL, canonical URL, sitemap entry, edit link, search result, and
  llms output.
- Every route entry in `sidebar.ts` uses `base: '/'`. Child items must not define `base`; every page `link` must
  be the root-absolute path of its actual Markdown file.
- Do not rewrite sidebar links by positional zipping: the route object calls `Side_Lc`, `Side_Jd`, and `Side_Pr`
  in a different order from their function definitions. Validate each item's intended page or H1, not only the
  set of paths.
- After nav, sidebar, or route changes, inspect `.vitepress/dist/llms.txt` and `llms-full.txt` in addition to
  running the build. A successful build does not prove that labels point to the intended pages.
- Preserve the home-page YAML, `hero.Notice`, `<Underline />`, the `<Links :items="...">` structure in
  `content/提交书籍与纠错.md`, and existing `<br>` or `::: tip` structures. Do not mass-format, rename, or convert
  content between simplified and traditional Chinese without authorization.
- Keep one H1 per content page except the home page. `transformPageData.ts` derives SEO data from relative paths
  and titles; path or title changes require canonical and metadata checks.
- Do not add or sync scientific-internet, AI, streaming, or airport-review content, links, promotions, or data.
- The theme extends `DefaultTheme` with Lumen slots and global components. Register new Markdown components in
  the theme entry. Do not remove Lumen styles, the `iconify-icon` custom-element option, or the llms plugin
  without rebuilding.
- Theme code participates in SSR; do not access `window` or `document` at module scope. `VITE_UMAMI_ID` and
  `VITE_UMAMI_SRC` are bundled into client code, so never use them for secrets or commit deployment values.
- `.vitepress/dist`, `.vitepress/cache`, and `node_modules` are generated or dependency directories. Do not edit
  or commit them.

## Validation matrix

| Change | Minimum validation |
| --- | --- |
| `AGENTS.md` only | `git diff --check`; `git diff --name-only`; `git status --short`. No build is needed for instruction-only changes. |
| Content, nav/sidebar, SEO, theme, Lumen data, VitePress configuration, or static assets | `pnpm run check`; `pnpm run build`; `git diff --check`. |
| Nav/sidebar changes or page additions, moves, or renames | Run the previous row, then compare every route with `content/`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, and per-page Markdown output; scan all internal targets and anchors. |
| `package.json`, `pnpm-lock.yaml`, or pnpm configuration | Update with the declared pnpm version; run `pnpm install --frozen-lockfile`, `pnpm run check`, `pnpm run build`, and `git diff --check`. |
| Browser-side interaction | Build, then run `pnpm run preview` (or `pnpm run dev` during development) and verify the behavior manually. |

Before handoff, inspect staged, unstaged, and untracked files and confirm that only authorized files changed.
Recheck the staged diff after any pre-commit hook. There are no tracked GitHub Actions workflows; inspect live PR
checks when CI status matters, and do not infer a provider from repository files.
