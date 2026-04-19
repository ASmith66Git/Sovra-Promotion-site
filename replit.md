# Sovra Marketing Website

## Overview
A visually impressive marketing website promoting Sovra, a privacy-focused AI second brain app. Users create their own notes, tasks, projects, and events, plus triage Gmail, Apple Mail, WhatsApp, and Telegram messages into organized notes, tasks, and events. Also brings in financial data (bank accounts) for personal/business wellbeing. Emphasizes zero inbox, distraction management, data sovereignty, on-device AI, and financial privacy. Available on App Store and Google Play.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Express (minimal, serves frontend only)
- **Routing**: wouter
- **Design**: Dark theme (#0F172A), glassmorphism effects, gradient accents
- **Fonts**: Inter via Google Fonts

## Project Structure
- `client/src/pages/landing.tsx` - Main landing page with all sections
- `client/src/pages/philosophy.tsx` - Our Philosophy page (developer rant on tech, data, AI, privacy)
- `client/src/App.tsx` - App router (routes: / and /philosophy)
- `client/src/index.css` - Theme tokens (unchanged from template)
- `server/routes.ts` - API routes (none needed for static marketing site)

## Key Sections
1. **Navbar** - Fixed glassmorphism navbar with smooth scroll navigation + link to /philosophy
2. **Hero** - "Stop organizing. Start living." with Gmail/Apple Mail/WhatsApp/Telegram/Bank Account icons; trust indicators (Zero Inbox, On-Device AI, Finances at a Glance, Your Data Stays Yours); App Store/Play Store CTAs
3. **Problem** - "Apps are loud. Your brain is full." — 3 pain point cards covering message overload, financial fragmentation (finances in one app, tasks in another, notes elsewhere), and forgotten to-dos
4. **Triage Flow** - Visual: Bombarded (Gmail/Apple Mail/WhatsApp/Telegram/Bank) → AI Triage → Organized (Notes/Tasks/Events)
5. **How It Works** - 4-step process: Connect Channels (incl. bank accounts), AI Triage, Notes/Tasks/Events Appear, Zero Inbox
6. **Features** - 8 feature cards: Zero Inbox Engine, The Secret Librarian, Capture Everything Effortlessly, Smart Event Detection, Your Finances Private & Present, Anti-Distraction Engine, Works Offline, Multi-Device Sync & Backup
7. **Screenshots** - Horizontal scrollable gallery of 7 real app screenshots (Today, Inbox Zero, Tasks, Finance, Notes, Calendar, Ask Sovra) — images served from `/screenshots/` in public dir
8. **Stats** - Key metrics (5+ data sources, 0 inbox, 100% on-device, 4.9 rating)
9. **Privacy** - "Your finances. Your messages. Your thoughts. Nobody else's." — 6 privacy points incl. Financial Data Stays On-Device, Encrypted Everything, Zero-Knowledge Architecture, Zero-Knowledge Sync, Subscriptions Not Data Exploitation; SOC 2 Type II badge (verify before launch)
10. **Download** - App store cards (iOS + Android) with trust badges (sync, AES-256, backup, platforms)
11. **Footer** - Logo + horizontal nav links including /philosophy

## Screenshots
Real app screenshots stored in `client/public/screenshots/`:
- `today.jpg` - Today dashboard (overdue tasks, finance summary, recent notes)
- `inbox-zero.jpg` - Inbox Zero state with email/WhatsApp/Telegram tabs
- `tasks.jpg` - Tasks view with DUE TODAY section
- `finance.jpg` - Finance analytics (balances, transactions, spending by category)
- `notes.jpg` - Notes list view with AI-generated notes
- `calendar.jpg` - Calendar agenda view with tasks
- `ask-sovra.jpg` - Ask Sovra AI chat interface

## Color Palette
- Primary: #6366F1 (indigo)
- Secondary: #8B5CF6 (purple)
- Accent: #10B981 (trust green)
- Background: #0F172A (dark slate)
- Highlight: #3B82F6 (blue)
- Text: #F8FAFC (off-white)

## Video Production (Remotion)
- `videos/` directory contains a self-contained Remotion workspace for video rendering
- `videos/sovra-ad-30s/` contains the 30-second Sovra ad composition (6 scenes, 900 frames at 30fps, 1920x1080)
- Scenes: Hook → Reveal → Triage → Privacy → Finance → Close
- `cd videos && npm run studio` opens Remotion Studio preview
- `cd videos && npm run render` exports `sovra-ad-30s.mp4` to `videos/exports/`
- Assets copied from `client/public/screenshots/` to `videos/public/screenshots/`
- System deps installed: nspr, nss, X11 libs, cups, mesa, pango, cairo, gtk3 (for Chrome headless rendering)
- Remotion packages installed at root: remotion, @remotion/cli, @remotion/renderer, @remotion/tailwind

## Running
- `npm run dev` starts Express + Vite on port 5000
