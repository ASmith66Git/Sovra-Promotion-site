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
- `client/src/pages/support.tsx` - Support contact form page (/support)
- `client/src/App.tsx` - App router (routes: /, /philosophy, /video, /support)
- `client/src/index.css` - Theme tokens (unchanged from template)
- `server/routes.ts` - API routes (POST /api/support sends email via Resend to Info@nammu-tech.com)

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
11. **Footer** - Logo + horizontal nav links including /philosophy and /support
12. **Support** - Contact form page at /support for App Store support URL requirement

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
- `videos/sovra-ad-30s/` contains the original 30-second Sovra ad composition (5 scenes, 735 frames at 30fps, 1920x1080)
- `videos/sovra-ad-60s/` contains the 60-second Sovra marketing composition (6 scenes, 1800 frames at 30fps, 1920x1080)
  - Scene flow (60s): Hook → Reveal → Privacy → Triage → Capture/Secret-Librarian → Close
  - Reuses Hook/Reveal/Privacy/Triage/Close from the 30s workspace; adds new `scenes/SceneCapture.tsx` for the capture + librarian pillar
  - Embeds audio directly via Remotion `<Audio>`: VO at full volume, ambient music bed at 0.18 (ducked under)
- `cd videos && npm run studio` opens Remotion Studio preview (both `SovraAd` and `SovraAd60` compositions registered)
- `cd videos && npm run render` exports `sovra-ad-30s.mp4`
- `cd videos && npm run render:60` exports `sovra-ad-60s.mp4` (H.264 + AAC) to `videos/exports/`
- Assets in `videos/public/screenshots/` and `videos/public/audio/`
- System deps installed: nspr, nss, X11 libs, cups, mesa, pango, cairo, gtk3 (for Chrome headless rendering)
- Remotion packages installed at root: remotion, @remotion/cli, @remotion/renderer, @remotion/tailwind

## Published Marketing Videos
- `client/public/sovra-ad-60s.mp4` — 60s marketing video served at `/sovra-ad-60s.mp4` and embedded in the landing page VideoSection (replaces the earlier 30s cut)
- `videos/exports/sovra-ad-60s.mp4` — source export, 1920x1080, H.264 + AAC stereo (~11 MB), audio mixed in-composition (UK English VO + ambient bed)
- Voiceover generation scripts in `videos/`:
  - `gen-voiceover.mjs` — original 30s VO (OpenAI gpt-audio, "onyx" voice)
  - `gen-voiceover-60s.mjs` — 60s UK English VO (OpenAI gpt-audio, "fable" voice with British-accent system prompt); writes raw VO to `exports/voiceover-60s.mp3` and the time-stretched (atempo=1.14) version to `public/audio/voiceover-60s-timed.mp3`
- Background music bed: `videos/public/audio/ambient-60s.mp3` is the existing `exports/ambient.mp3` looped to ~62s with fade-in/out (built via `ffmpeg -stream_loop -1 ... afade`)
- OpenAI AI Integrations installed (env vars: AI_INTEGRATIONS_OPENAI_API_KEY, AI_INTEGRATIONS_OPENAI_BASE_URL)

## NEW VIDEO — Production Plan (IN PROGRESS)
Working document lives at `/video-plan` in the app and `client/src/pages/video-plan.tsx` in code.
This is the source of truth for the next video re-render. Update it before touching any Remotion files.

### Section 1 — Voice (IN REVIEW)
- Style target: soft, warm, friendly neutral English male — calm BBC-presenter register
- Guided samples generated for Ash, Echo, Fable (stored at `client/public/voice-samples/*-guided.mp3`)
- Audition page: `/voice-samples`
- **STATUS: Awaiting user voice selection**

### Section 2 — Script (DRAFT)
60-second script broken into 6 timing blocks:
1. 0:00–0:07 Hook: "Your apps are loud. Your inbox never sleeps. And your brain is paying the price."
2. 0:07–0:14 Reveal: "Meet Sovra — your private AI second brain, built for the way modern life actually works."
3. 0:14–0:24 Privacy: "Privacy isn't a feature. It's a stance. Sovra runs entirely on your device…"
4. 0:24–0:36 Triage: "Connect Gmail, Apple Mail, and IMAP, and Sovra triages the lot…"
5. 0:36–0:47 Capture: "Speak it, snap it, type it, sketch it — Sovra captures anything…"
6. 0:47–1:00 Close: "Sovra — your notes, your tasks, your inbox. Completely yours. Stop organising. Start living."
- **STATUS: Draft — awaiting user review and approval**

### Section 3 — Visual Content (PROPOSED)
Scene-by-scene breakdown in `/video-plan`. Real device screenshots (IMG_0077–IMG_0089) available.
6 scenes: Hook (notification storm) → Reveal (logo) → Privacy (device lock) → Triage (email flow) → Capture (4-input grid) → Close (today dashboard + App Store CTA)
- **STATUS: Proposed — awaiting user confirmation before Remotion work begins**

### Decisions Log
- Voice style confirmed: soft, warm, friendly neutral English male
- Duration: 60 seconds, 1920×1080
- Screenshots: 10 real device iPhone screenshots confirmed
- Pending: final voice choice, script approval, Scene 3 visual style

## Running
- `npm run dev` starts Express + Vite on port 5000
