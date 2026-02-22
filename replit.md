# Sorva Marketing Website

## Overview
A visually impressive marketing website promoting Sorva, a privacy-focused AI data sovereignty app. The site emphasizes privacy features and encourages downloads from App Store and Google Play.

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
2. **Hero** - Bold headline with gradient text, App Store/Play Store CTAs
3. **Features** - 6 feature cards with icons showcasing privacy & AI capabilities
4. **Stats** - Key metrics (encryption, data collection, processing, rating)
5. **Privacy** - Detailed privacy commitments with SOC 2 certification
6. **Download** - App store cards with badges
7. **Footer** - Product, Company, Legal links

## Color Palette
- Primary: #6366F1 (indigo)
- Secondary: #8B5CF6 (purple)
- Accent: #10B981 (trust green)
- Background: #0F172A (dark slate)
- Highlight: #3B82F6 (blue)
- Text: #F8FAFC (off-white)

## Running
- `npm run dev` starts Express + Vite on port 5000
