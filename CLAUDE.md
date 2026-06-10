# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A [Slidev](https://sli.dev/) presentation about programming basics for non-IT personnel, covering programming concepts, web architecture, and Claude Code / Vibe Coding. Written in Chinese.

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (opens browser at localhost:3030)
pnpm build            # Build static site to dist/
pnpm export           # Export to PDF (requires playwright-chromium)
```

## Architecture

- **`slides.md`** — The main slide deck. The frontmatter block enables MDC (Markdown with Components), UnoCSS, Shiki highlighting, and dark mode.
- **`components/`** — Vue 3 components that can be used inline in slides via MDC. Components use `<script setup lang="ts">` with Composition API.
- **`pages/imported-slides.md`** — Sub-slides that can be imported into the main deck with `src: ./pages/imported-slides.md`.
- **`snippets/`** — Code snippets that can be referenced in slides. The `// #region snippet` marker controls what gets displayed vs. hidden surrounding code.

## Key Slidev features in use

- **MDC (`mdc: true`)** — Vue components can be embedded directly in markdown slides.
- **UnoCSS (`css: unocss`)** — Utility-first atomic CSS via UnoCSS attributify mode (e.g., `flex="~"`, `border="~ main rounded-md"`).
- **Shiki (`highlighter: shiki`)** — Syntax highlighting for code blocks.
- **Importing slides** — Use `src: ./path/to/file.md` in slides.md to pull in slides from other files.
