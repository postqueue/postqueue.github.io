# PostQueue 🎬

> **Free 30-Day Content Creator Planner**  
> A 100% client-side, zero-server content planning tool built with **Astro**, **React Islands**, and **Tailwind CSS**.  
> Live Site: [https://postqueue.github.io](https://postqueue.github.io)  
> Support the Developer: [buymeacoffee.com/kisharadilz](https://buymeacoffee.com/kisharadilz)

---

## ⚡ Overview

**PostQueue** is an ultra-fast, distraction-free planning engine designed specifically for short-form video creators publishing on **TikTok**, **Instagram Reels**, and **YouTube Shorts**.

- **100% Client-Side & Private**: All video hooks, raw file titles, captions, and hashtags are stored strictly in your browser's `LocalStorage`. Zero databases, zero user tracking, and no external servers.
- **3-Stage Production Pipeline**: Seamlessly transition posts through `💡 Idea` ➔ `🎬 Filmed` ➔ `✅ Posted` with celebratory milestone feedback.
- **1-Click "Copy Package"**: Format and copy your hook, caption, and hashtags directly to your clipboard for instantaneous posting on mobile or desktop.
- **Live Counters**: Live 2,200-character countdown for social captions and real-time keyword/hashtag detection.
- **Multiple Pipeline Views**: Switch between a 30-Slot Grid Pipeline, Kanban Board, and Compact List View.
- **Backup & Portability**: Export and import your entire 30-day queue as a `.json` backup file or `.csv` spreadsheet.
- **Starter Template Engine**: Load 30 high-converting viral video hooks tailored to each language.
- **Full Internationalization (i18n)**: Native localized subpaths for 6 languages:
  - English (`/`)
  - Español (`/es/`)
  - Português (`/pt/`)
  - Deutsch (`/de/`)
  - Français (`/fr/`)
  - 日本語 (`/ja/`)

---

## 🛠️ Tech Stack & Architecture

- **SSG Framework**: [Astro 5+](https://astro.build) for static page generation and sub-second load times.
- **UI Islands**: [React 19](https://react.dev) for interactive CRUD operations, modals, clipboard interactions, and reordering.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with custom light/dark tokens and zero-FOUC theme initialization.
- **Storage**: Browser `window.localStorage` (`postqueue_slots_v1`).
- **Technical SEO**:
  - `og:site_name` set to `PostQueue`.
  - Dynamically injected JSON-LD structured schemas: `WebSite`, `WebApplication`, and `SoftwareApplication` (`ProductivityApplication`).
  - Strict canonical URLs, multilingual `hreflang` tags, and auto-generated `sitemap.xml`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+` or `v20+`
- npm, pnpm, or yarn

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

The application will run at `http://localhost:4321`.

### Production Build

```bash
# Build static site generation output
npm run build

# Preview static distribution locally
npm run preview
```

---

## ☕ Support the Developer

If you find PostQueue useful for your content workflow, consider supporting its maintenance:

👉 [**Buy Me a Coffee (Kishara Dilz)**](https://buymeacoffee.com/kisharadilz)

---

## 📄 License

MIT License. Free to use, adapt, and build upon.
