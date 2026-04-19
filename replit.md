# Sovra Marketing Website

## Overview
A visually impressive marketing website promoting Sovra, a privacy-focused AI second brain app for iOS. Users create their own notes, tasks, projects, and events, and triage Gmail, Apple Mail, and IMAP email into organized notes, tasks, and events. Emphasizes zero inbox, distraction management, data sovereignty, and on-device AI. Available on the App Store (iOS only).

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
2. **Hero** - "Stop organizing. Start living." with Gmail/Apple Mail/IMAP icons; trust indicators (Zero Inbox, On-Device AI, Rich Notes & Documents, Your Data Stays Yours); iOS App Store CTA only
3. **Problem** - "Apps are loud. Your brain is full." — 3 pain point cards covering email overload, scattered documents, and forgotten to-dos
4. **Triage Flow** - Visual: Bombarded (Gmail/Apple Mail/IMAP/Attachments/Docs) → AI Triage → Organized (Notes/Tasks/Events/Docs)
5. **How It Works** - 4-step process: Connect Email, AI Triage, Notes/Tasks/Events Appear, Zero Inbox
6. **Features** - 10 feature cards: Zero Inbox Engine, The Secret Librarian, Capture Everything Effortlessly, Smart Event Detection, Documents, Attachment Capture, Rich Notes, Anti-Distraction Engine, Works Offline, Multi-Device Sync & Backup
7. **Screenshots** - Horizontal scrollable gallery of 7 real app screenshots (Today, Inbox Zero, Tasks, Documents, Notes, Calendar, Ask Sovra) — images served from `/screenshots/` in public dir
8. **Stats** - Key metrics (3 email sources, 0 inbox, 100% on-device, 4.9 rating)
9. **Privacy** - "Your documents. Your notes. Your thoughts. Nobody else's." — 6 privacy points: On-Device AI Processing, Documents Stay On-Device, Encrypted Everything, Zero-Knowledge Architecture, Zero-Knowledge Sync, Subscriptions Not Data Exploitation; SOC 2 Type II badge
10. **Download** - iOS App Store CTA only with trust badges (sync, AES-256, backup, iPhone & iPad)
11. **Footer** - Logo + horizontal nav links including /philosophy

## Screenshots
Real app screenshots stored in `client/public/screenshots/`:
- `today.jpg` - Today dashboard (overdue tasks, recent notes)
- `inbox-zero.jpg` - Inbox Zero state
- `tasks.jpg` - Tasks view with DUE TODAY section
- `documents.jpg` - Documents section
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
- Scenes: Hook → Reveal → Triage → Privacy → Close
- `cd videos && npm run studio` opens Remotion Studio preview
- `cd videos && npm run render` exports `sovra-ad-30s.mp4` to `videos/exports/`
- Assets copied from `client/public/screenshots/` to `videos/public/screenshots/`
- System deps installed: nspr, nss, X11 libs, cups, mesa, pango, cairo, gtk3 (for Chrome headless rendering)
- Remotion packages installed at root: remotion, @remotion/cli, @remotion/renderer, @remotion/tailwind

## Running
- `npm run dev` starts Express + Vite on port 5000
