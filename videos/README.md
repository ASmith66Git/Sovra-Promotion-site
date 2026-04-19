# Sovra Videos

Self-contained Remotion workspace for producing Sovra marketing videos.

## Folder structure

```
videos/
├── assets/              # Shared images, logos, and media
│   ├── screenshots/     # App screenshots used across videos
│   └── sovra-logo.svg
├── exports/             # Rendered MP4 files (git-ignored)
├── sovra-ad-30s/        # 30-second Sovra ad composition
│   ├── Root.tsx         # Main composition with Sequence timeline
│   ├── shared.ts        # Colors, constants, helper functions
│   └── scenes/          # Individual scene components
│       ├── SceneHook.tsx
│       ├── SceneReveal.tsx
│       ├── SceneTriage.tsx
│       ├── ScenePrivacy.tsx
│       └── SceneClose.tsx
├── src/
│   ├── index.ts         # Remotion entry point (registerRoot)
│   ├── Root.tsx          # Composition registry
│   └── style.css         # Tailwind CSS
├── package.json
├── remotion.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Setup

```bash
cd videos
npm install
```

## Commands

### Preview in Remotion Studio

```bash
npm run studio
```

Opens Remotion Studio at `localhost:3000` where you can scrub through the timeline and preview all scenes.

### Render to MP4

```bash
npm run render
```

Exports `sovra-ad-30s.mp4` to `videos/exports/`. The video is 1920x1080 at 30fps, 30 seconds long (900 frames).

### Render a thumbnail

```bash
npm run render:still
```

Exports a single frame as a PNG to `videos/exports/`.

## Scene breakdown

| Scene   | Frames  | Duration | Description                          |
|---------|---------|----------|--------------------------------------|
| Hook    | 0-119   | 4.0s     | "Apps are loud. Your brain is full." |
| Reveal  | 120-254 | 4.5s     | Logo reveal + tagline                |
| Triage  | 255-419 | 5.5s     | AI email triage feature              |
| Privacy | 420-569 | 5.0s     | Zero-knowledge privacy               |
| Close   | 570-734 | 5.5s     | Brand lockup + CTA                   |

## Adding a new video

1. Create a new folder: `videos/my-new-video/`
2. Add scene components under `videos/my-new-video/scenes/`
3. Create a composition component (e.g., `Root.tsx`) with `<Sequence>` blocks
4. Register it in `videos/src/Root.tsx` as a new `<Composition>`
5. Add a render script to `package.json`
