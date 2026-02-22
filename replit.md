# Sorva Marketing Website

## Overview
A visually impressive marketing website promoting Sorva, a privacy-focused AI librarian app that triages Gmail, WhatsApp, and Telegram messages into organized notes, tasks, and events. Emphasizes zero inbox, distraction management, and data sovereignty. Available on App Store and Google Play.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Express (minimal, serves frontend only)
- **Routing**: wouter
- **Design**: Dark theme (#0F172A), glassmorphism effects, gradient accents
- **Fonts**: Inter via Google Fonts

## Project Structure
- `client/src/pages/landing.tsx` - Main landing page with all sections
- `client/src/App.tsx` - App router
- `client/src/index.css` - Theme tokens (unchanged from template)
- `server/routes.ts` - API routes (none needed for static marketing site)

## Key Sections
1. **Navbar** - Fixed glassmorphism navbar with smooth scroll navigation
2. **Hero** - "Triage. Organize. Focus." with Gmail/WhatsApp/Telegram icons and App Store/Play Store CTAs
3. **How It Works** - 4-step process: Connect Channels, AI Triage, Organize, Zero Inbox
4. **Features** - 6 feature cards: Zero Inbox Engine, AI Librarian, Smart Task Extraction, Event Detection, Distraction Management, Unified Messaging
5. **Stats** - Key metrics (3 platforms, 0 inbox, 100% triaged, 4.9 rating)
6. **Privacy** - Data sovereignty with SOC 2 certification, Unipile secure API
7. **Download** - App store cards with badges
8. **Footer** - Product, Company, Legal links

## Color Palette
- Primary: #6366F1 (indigo)
- Secondary: #8B5CF6 (purple)
- Accent: #10B981 (trust green)
- Background: #0F172A (dark slate)
- Highlight: #3B82F6 (blue)
- Text: #F8FAFC (off-white)

## Running
- `npm run dev` starts Express + Vite on port 5000
