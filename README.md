# PostQueue 🎬

> **Free 30-Day Content Creator Planner**  
> A 100% client-side, zero-server content planning tool built with **Astro**, **React Islands**, and **Tailwind CSS**.  
> **Live Site:** [https://postqueue.github.io](https://postqueue.github.io)  
> **Support the Developer:** [buymeacoffee.com/kisharadilz](https://buymeacoffee.com/kisharadilz)

---

## ⚡ Highlights & Core Philosophy

**PostQueue** is an ultra-fast, distraction-free planning engine designed specifically for short-form video creators publishing on **TikTok**, **Instagram Reels**, and **YouTube Shorts**.

- **100% Clean Canvas by Default**: Starts with 30 blank, unpolluted content slots (`Day 01` to `Day 30`), ready for immediate personal data entry.
- **100% Client-Side & Private**: All video hooks, raw file titles, captions, and hashtags are stored strictly in your browser's `LocalStorage` (`postqueue_slots_v2`). Zero external databases, zero user tracking, and no servers.
- **3-Stage Production Pipeline**: Seamlessly transition posts through `💡 Idea` ➔ `🎬 Filmed` ➔ `✅ Posted` with celebratory milestone feedback.
- **1-Click "Copy Package"**: Format and copy your hook, caption, and hashtags directly to your clipboard for instantaneous posting on mobile or desktop.
- **Live Social Counters**: Real-time 2,200-character countdown for social captions and automatic hashtag detection.
- **Multiple Pipeline Views**: Switch effortlessly between a 30-Slot Grid Pipeline, Kanban Board, and Compact List View.
- **Backup & Portability**: Export and import your entire 30-day queue as a `.json` backup file or `.csv` spreadsheet.
- **Optional Starter Templates**: 1-click button to load 30 viral video hooks for instant inspiration whenever you need ideas.
- **Multi-Device Responsive Navigation**: Minimalist, icon-only navigation bar on mobile and tablet devices for responsive, clutter-free workflow.
- **Full Internationalization (i18n)**: Static localized subpaths for 6 languages:
  - English (`/`)
  - Español (`/es/`)
  - Português (`/pt/`)
  - Deutsch (`/de/`)
  - Français (`/fr/`)
  - 日本語 (`/ja/`)

---

## 🎨 Color System

Designed with a high-contrast palette:

| Hex Code | Color Name | Role |
| :--- | :--- | :--- |
| **`#010736`** | **Deep Midnight Blue** | Dark mode root background, high-contrast typography, modal backdrops |
| **`#0D1C42`** | **Rich Navy Blue** | Card surfaces, sticky navigation bar in dark mode |
| **`#22396F`** | **Royal Slate Blue** | Primary action buttons, card borders, active view pills |
| **`#FCF1D0`** | **Warm Cream / Vanilla** | High-contrast accent highlights, dark mode primary text, badges |

---

## 🛠️ Tech Stack & Architecture

- **SSG Framework**: [Astro 5+](https://astro.build) for static page generation and sub-second load times.
- **UI Islands**: [React 19](https://react.dev) for interactive CRUD operations, modals, clipboard interactions, and reordering.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with custom color tokens and zero-FOUC theme initialization.
- **Storage**: Browser `window.localStorage` (`postqueue_slots_v2`).
- **Analytics**: Google Tag (`gtag.js` `G-Z7DN305S39`) integrated into `<head>`.
- **Technical SEO (100/100 Grade A++)**:
  - Full suite of **5 JSON-LD Structured Schemas**: `WebSite`, `WebApplication`, `SoftwareApplication`, `BreadcrumbList`, and `FAQPage`.
  - Canonical URLs and bidirectional `hreflang` alternate links for all 6 locales + `x-default`.
  - Open Graph and Twitter Card tags with dedicated vector preview card (`og-image.svg`).
  - Auto-generated multilingual XML sitemap (`/sitemap.xml`) and `robots.txt`.
  - PWA Web App Manifest (`/manifest.json`).

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `>=22.12.0` (LTS Node 22 recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/postqueue/postqueue.github.io.git
cd postqueue.github.io

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will run locally at `http://localhost:4321`.

### Production Build

```bash
# Build static site generation output
npm run build

# Preview static distribution locally
npm run preview
```

---

## 📁 Project Structure

```text
postqueue.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment (Node 22)
├── public/
│   ├── favicon.svg             # Brand vector icon
│   ├── og-image.svg            # 1200x630 Social preview card
│   ├── manifest.json           # Web App Manifest
│   └── robots.txt              # Search engine directives
├── src/
│   ├── components/
│   │   ├── ContentPlanner.tsx  # React Island (CRUD, LocalStorage, Pipeline)
│   │   ├── Footer.astro        # Semantic footer & language directory
│   │   ├── Header.astro        # Sticky responsive navbar (icon-only on mobile)
│   │   ├── SEOContentSection.astro # Semantic on-page pillars & FAQ accordion
│   │   ├── SEOHead.astro       # Meta tags & 5 JSON-LD schemas
│   │   └── ThemeScript.astro   # Zero-FOUC theme initializer
│   ├── data/
│   │   └── starterHooks.ts     # 30-day starter hook formulas (6 languages)
│   ├── i18n/
│   │   └── ui.ts               # Translation dictionary for 6 locales
│   ├── layouts/
│   │   └── BaseLayout.astro    # Master layout shell
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro     # Localized subpaths (/es/, /pt/, /de/, /fr/, /ja/)
│   │   ├── index.astro         # English root (/)
│   │   └── sitemap.xml.ts      # Multilingual XML sitemap endpoint
│   └── styles/
│       └── global.css          # Tailwind CSS v4 custom theme tokens
├── astro.config.mjs            # Astro configuration with React & Tailwind
├── package.json
├── tsconfig.json
└── README.md
```

---

## ☕ Support the Developer

If you find PostQueue useful for your content workflow, consider supporting its maintenance:

👉 [**Buy Me a Coffee (Kishara Dilz)**](https://buymeacoffee.com/kisharadilz)

---

## 📄 License

MIT License. Free to use, adapt, and build upon.
