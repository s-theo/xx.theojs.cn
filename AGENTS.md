# AGENTS.md - xx.theojs.cn

## 项目概览

这是 `https://xx.theojs.cn` 的 VitePress 站点，内容主题是玄学宝典，覆盖传统五术书籍与相关经典。站点源码以 Markdown 内容为主，VitePress 配置集中在 `.vitepress/`。

## 工作流程

开始修改前必须先在仓库根目录执行 `git pull`，然后阅读本文件。修改完成后至少运行：

```bash
pnpm run format:check
pnpm run build
git diff --check
```

若改动了依赖或 lockfile，先运行：

```bash
pnpm install --frozen-lockfile
```

## 目录结构

- `content/`：VitePress 的 `srcDir`，站点页面都从这里读取。
- `content/index.md`：首页配置，包含 hero、Notice 和首页 actions。
- `content/public/`：公开静态资源，会映射到站点根路径。
- `content/山/`、`content/医/`、`content/命/`、`content/相/`、`content/卜/`：五术主体内容。
- `content/灵宠/`：灵宠专题内容。
- `content/相关经典/`：道经、淮南子、三字经等相关经典。
- `.vitepress/config.mts`：站点主配置，组合 head、nav、sidebar、search、themeConfig、llms 插件等。
- `.vitepress/configs/`：VitePress 配置拆分模块。
- `.vitepress/configs/nav.ts`：顶部导航。
- `.vitepress/configs/sidebar.ts`：各内容分区的侧边栏。
- `.vitepress/data/AsideData.ts`：Lumen Aside 推广卡片数据。
- `.vitepress/data/FooterData.ts`：Lumen Footer 分组链接。
- `.vitepress/theme/index.ts`：扩展默认主题并注册 Lumen 组件。
- `netlify.toml`：Netlify 构建配置，使用 Node 22，构建命令为 `pnpm build`，发布目录为 `.vitepress/dist`。

## VitePress 维护规则

- `config.mts` 已设置 `srcDir: 'content'` 和 `cleanUrls: true`，页面路径以 `content/` 下的 Markdown 文件路径为准。
- 新增栏目时，需要同时更新 `content/`、`.vitepress/configs/nav.ts` 和 `.vitepress/configs/sidebar.ts`。
- `nav.ts` 的内部链接使用 `/` 开头的绝对路径，不要带 `.md` 或 `.html` 后缀。
- `sidebar.ts` 当前按分区使用 `base`；深层嵌套条目优先使用 `/分区/目录/文件名` 绝对路径，避免 `vitepress-plugin-llms` 不能正确解析继承 `base` 后的相对链接。
- 外链推广数据在 `AsideData.ts` 和 `FooterData.ts`，调整 sponsor 链接时保留必要的 `rel: 'sponsored noreferrer'`。
- `summary` 是正确拼写，不要再写成 `sunmmary`。

## 格式化

本仓库已从 Prettier 迁移到 Biome：

- `pnpm run format`：执行 `biome check --write .`
- `pnpm run format:check`：执行 `biome check .`
- `lint-staged`：执行 `biome check --write --no-errors-on-unmatched`

不要重新引入 `prettier`、Prettier 插件、`.prettierrc` 或 `.prettierignore`。Biome 配置位于 `biome.json`，并排除了 `.vitepress/dist`、`.vitepress/cache`、`node_modules` 等生成或依赖目录。

## 注意事项

- `.vitepress/dist` 是构建产物，已在 `.gitignore` 中忽略，不要手动编辑或提交。
- 内容文件数量较多，批量改 Markdown 前先缩小范围并确认目标路径。
- 搜索或检查内容优先用 `rg` / `rg --files`。
