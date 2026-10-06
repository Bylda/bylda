# Design tokens — Figma page 01 Foundations · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · source: `get_variable_defs` on Foundations `3:2`, unioned with the shell `37:51`, Insight Card `4:72`, Block/Structured insight `39:946` and screen C7 `28:1263` (Figma only reports variables bound inside the queried node — the union catches `Brand/Logo` and `border/strong`, which `3:2` doesn't use).

> **Code uses `src/styles/bylda.css` — not this file.** This is the Figma side, for checking. Components bind the **semantic** layer only (`by-*` utilities, CLAUDE.md §3).

**Decision tokens (CLAUDE.md §13.1)** — added on top of Figma's variables; code utilities in `src/styles/bylda.css`:

| Token | Value | Source | Utility |
| --- | --- | --- | --- |
| `border/strong` | `#D3D0CB` (silver/300) | Figma variable, bound on form inputs (e.g. C7 `28:1448`) | `border-by-border-strong` (`by-border-control` is the same value, kept for the kit) |
| `feedback/error` | `#C2413B` (= `signal/regress`, own token) | Decision — form errors only (§13.7) | `text-by-feedback-error`, `border-by-feedback-error` |
| `focus/ring` | `#2A2A2E` (graphite/800) | Focused input border on **A1** `26:80` (A4 has no focused input — only the error state) | `ring-by-focus-ring`, `border-by-focus-ring` (`by-border-focus` is the same value) |

`text/on-dark-muted` = `#9B9892` exists too (bound on Sidebar Item `4:47`, not on the nodes unioned below) — matches §3.

Full frame (swatches, type ramp, spacing, radius, motion notes): `design-ref/_foundations/spec.md` + `frame.png`.

## Primitive colors

| Figma variable | Value |
| --- | --- |
| `primitive/graphite/700` | `#3A3A3F` |
| `primitive/graphite/800` | `#2A2A2E` |
| `primitive/graphite/900` | `#1B1B1E` |
| `primitive/ink` | `#0B0B0C` |
| `primitive/pearl/0` | `#F8F7F5` |
| `primitive/pearl/100` | `#EAE8E4` |
| `primitive/pearl/50` | `#F2F1EE` |
| `primitive/signal/attention` | `#C27A1A` |
| `primitive/signal/attention-bg` | `#F8EEDC` |
| `primitive/signal/improve` | `#2F7D5B` |
| `primitive/signal/improve-bg` | `#E7F2EC` |
| `primitive/signal/info` | `#6A5AD0` |
| `primitive/signal/info-bg` | `#EEEBFA` |
| `primitive/signal/regress` | `#C2413B` |
| `primitive/signal/regress-bg` | `#F8E7E5` |
| `primitive/silver/200` | `#E5E3DF` |
| `primitive/silver/300` | `#D3D0CB` |
| `primitive/silver/500` | `#9B9892` |
| `primitive/silver/600` | `#6E6C68` |
| `primitive/white` | `#FFFFFF` |

## Semantic colors

| Figma variable | Value | = primitive |
| --- | --- | --- |
| `border/engraved` | `#E5E3DF` | `primitive/silver/200` |
| `border/strong` | `#D3D0CB` | `primitive/silver/300` |
| `feedback/error` *(§13 decision)* | `#C2413B` | `primitive/signal/regress` |
| `focus/ring` *(§13 decision)* | `#2A2A2E` | `primitive/graphite/800` |
| `surface/canvas` | `#F8F7F5` | `primitive/pearl/0` |
| `surface/inset` | `#F2F1EE` | `primitive/pearl/50` |
| `surface/rail` | `#0B0B0C` | `primitive/ink` |
| `surface/raised` | `#FFFFFF` | `primitive/white` |
| `surface/sidebar` | `#1B1B1E` | `primitive/graphite/900` |
| `text/on-dark-muted` | `#9B9892` | `primitive/silver/500` |
| `text/on-dark` | `#EAE8E4` | `primitive/pearl/100` |
| `text/primary` | `#0B0B0C` | `primitive/ink` |
| `text/secondary` | `#6E6C68` | `primitive/silver/600` |
| `text/tertiary` | `#9B9892` | `primitive/silver/500` |

## Text styles (16)

Figma reports `letterSpacing` in **percent** of font size (e.g. `6` = +6%).

| Style | Family | Style | Size | Weight | Line-height | Tracking % |
| --- | --- | --- | --- | --- | --- | --- |
| `Brand/Logo` | Cinzel | Regular | 20 | 400 | 1.1 | 12.0 |
| `Display/XL` | Newsreader | Medium | 44 | 500 | 1.08 | -2.0 |
| `Display/L` | Newsreader | Medium | 30 | 500 | 1.12 | -1.5 |
| `Display/Label` | Inter | Semi Bold | 11 | 600 | 1.3 | 10.0 |
| `Editorial/H1` | Newsreader | Medium | 34 | 500 | 1.12 | -1.5 |
| `Editorial/H2` | Newsreader | Medium | 24 | 500 | 1.2 | -1.0 |
| `Editorial/Insight` | Newsreader | Medium | 18 | 500 | 1.35 | -0.5 |
| `Editorial/Quote` | Newsreader | Italic | 15 | 400 | 1.45 | 0.0 |
| `UI/Title` | Inter | Semi Bold | 15 | 600 | 1.35 | -0.5 |
| `UI/Body` | Inter | Regular | 14 | 400 | 1.5 | -0.3 |
| `UI/Body Strong` | Inter | Medium | 14 | 500 | 1.5 | -0.3 |
| `UI/Small` | Inter | Regular | 12.5 | 400 | 1.45 | -0.2 |
| `UI/Label` | Inter | Semi Bold | 11 | 600 | 1.3 | 6.0 |
| `Mono/Data` | Geist Mono | Regular | 12 | 400 | 1.4 | 0.0 |
| `Mono/Micro` | Geist Mono | Medium | 10 | 500 | 1.3 | 6.0 |
| `Mono/Metric` | Geist Mono | Light | 28 | 300 | 1.1 | -2.0 |

## Raw `get_variable_defs` (union)

```json
{
  "Brand/Logo": "Font(family: \"Cinzel\", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12)",
  "Display/L": "Font(family: \"Newsreader\", style: Medium, size: 30, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5)",
  "Display/Label": "Font(family: \"Inter\", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 10)",
  "Display/XL": "Font(family: \"Newsreader\", style: Medium, size: 44, weight: 500, lineHeight: 1.0800000429153442, letterSpacing: -2)",
  "Editorial/H1": "Font(family: \"Newsreader\", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5)",
  "Editorial/H2": "Font(family: \"Newsreader\", style: Medium, size: 24, weight: 500, lineHeight: 1.2000000476837158, letterSpacing: -1)",
  "Editorial/Insight": "Font(family: \"Newsreader\", style: Medium, size: 18, weight: 500, lineHeight: 1.350000023841858, letterSpacing: -0.5)",
  "Editorial/Quote": "Font(family: \"Newsreader\", style: Italic, size: 15, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: 0)",
  "Mono/Data": "Font(family: \"Geist Mono\", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0)",
  "Mono/Metric": "Font(family: \"Geist Mono\", style: Light, size: 28, weight: 300, lineHeight: 1.100000023841858, letterSpacing: -2)",
  "Mono/Micro": "Font(family: \"Geist Mono\", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6)",
  "UI/Body": "Font(family: \"Inter\", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896)",
  "UI/Body Strong": "Font(family: \"Inter\", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896)",
  "UI/Label": "Font(family: \"Inter\", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6)",
  "UI/Small": "Font(family: \"Inter\", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224)",
  "UI/Title": "Font(family: \"Inter\", style: Semi Bold, size: 15, weight: 600, lineHeight: 1.350000023841858, letterSpacing: -0.5)",
  "border/engraved": "#e5e3df",
  "border/strong": "#d3d0cb",
  "primitive/graphite/700": "#3a3a3f",
  "primitive/graphite/800": "#2a2a2e",
  "primitive/graphite/900": "#1b1b1e",
  "primitive/ink": "#0b0b0c",
  "primitive/pearl/0": "#f8f7f5",
  "primitive/pearl/100": "#eae8e4",
  "primitive/pearl/50": "#f2f1ee",
  "primitive/signal/attention": "#c27a1a",
  "primitive/signal/attention-bg": "#f8eedc",
  "primitive/signal/improve": "#2f7d5b",
  "primitive/signal/improve-bg": "#e7f2ec",
  "primitive/signal/info": "#6a5ad0",
  "primitive/signal/info-bg": "#eeebfa",
  "primitive/signal/regress": "#c2413b",
  "primitive/signal/regress-bg": "#f8e7e5",
  "primitive/silver/200": "#e5e3df",
  "primitive/silver/300": "#d3d0cb",
  "primitive/silver/500": "#9b9892",
  "primitive/silver/600": "#6e6c68",
  "primitive/white": "#ffffff",
  "surface/canvas": "#f8f7f5",
  "surface/inset": "#f2f1ee",
  "surface/rail": "#0b0b0c",
  "surface/raised": "#ffffff",
  "surface/sidebar": "#1b1b1e",
  "text/on-dark": "#eae8e4",
  "text/primary": "#0b0b0c",
  "text/secondary": "#6e6c68",
  "text/tertiary": "#9b9892"
}
```
