---
name: Portrait video phone sizing
description: Correct phone size for portrait (1080×1920) Remotion compositions with top/bottom text overlays
---

## Rule
Use `38cqw` (NOT `55cqw`) for phone shell width in portrait 9:16 canvas scenes with top + bottom text overlays.

**Why:**
At `55cqw` the phone is 594px wide → 594 × 19/9 = 1253px tall = 65% of the 1920px canvas height. This leaves only 35% total for top+bottom overlay zones, causing headlines to bleed directly into the phone screen. Bug confirmed in SceneInputsP, SceneOrganiseP, ScenePrivacy60P, SceneTriageP30, SceneOrganiseP30 — all had overlapping text.

At `38cqw` the phone is 410px wide → 410 × 19/9 = 866px tall = 45% of canvas. Centered at 50%, top edge = 527px (27.4%), bottom edge = 1393px (72.6%). This leaves 27% of canvas above and below the phone for text zones.

**How to apply:**
- Any new portrait scene with a centred phone + top/bottom overlay: use `width: "38cqw"`, `borderRadius: "3.5cqw"`, `border: "0.35cqw solid..."`, `boxShadow: "0 2.5cqw 6cqw rgba(0,0,0,0.7)"`.
- Gradient overlays at `60%` opacity stop work correctly with this sizing.
- Phone positioned with `position: absolute, left: 50%, top: 50%, transform: translate(-50%, -50%)`.
- Top overlay padding `7cqh 7cqw 8cqh`, bottom overlay `8cqh 7cqw 7cqh` fit within the 27% zones.
