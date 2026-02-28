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
1. **Navbar** - Fixed glassmorphism navbar with smooth scroll navigation
2. **Hero** - "Stop organizing. Start living." with Gmail/Apple Mail/WhatsApp/Telegram/Bank icons and App Store/Play Store CTAs
3. **Problem** - "Apps are loud. Your brain is full." with pain points including financial fragmentation
4. **Triage Flow** - Visual: Bombarded → AI Triage → Organized
5. **How It Works** - 4-step process: Connect Channels (incl. bank accounts), AI Triage, Organize, Zero Inbox
6. **Features** - 9 feature cards: Zero Inbox Engine, The Secret Librarian, Capture Everything, Smart Event Detection, Your Finances Private & Present, Anti-Distraction Engine, Works Offline, Multi-Device Sync & Backup
7. **Stats** - Key metrics (5+ data sources, 0 inbox, 100% on-device, 4.9 rating)
8. **Privacy** - "Your finances. Your messages. Your thoughts. Nobody else's." with financial data privacy emphasis
9. **Download** - App store cards with badges
10. **Footer** - Logo + horizontal nav links

## Color Palette
- Primary: #6366F1 (indigo)
- Secondary: #8B5CF6 (purple)
- Accent: #10B981 (trust green)
- Background: #0F172A (dark slate)
- Highlight: #3B82F6 (blue)
- Text: #F8FAFC (off-white)

## Running
- `npm run dev` starts Express + Vite on port 5000
