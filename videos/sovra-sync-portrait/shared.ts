import { interpolate, interpolateColors } from "remotion";

export { clampedInterpolate, delayedInterpolate, SOVRA_LOGO, SOVRA_LOGO_TRANSPARENT } from "../sovra-ad-30s/shared";

export const SP_FPS      = 30;
export const SP_DURATION = 940; // 31.32s — matches natural VO pace

export const SP_FRAMES = {
  hook:     180, // 6s   "Sovra lives on your device"
  devices:  180, // 6s   "But what about your iPad too?"
  zero:     300, // 10s  "Zero-knowledge — encrypted before it moves"
  settings: 150, // 5s   Settings screen — Cloud Sync
  close:    130, // 4.3s "Two devices. One brain. Zero compromise."
} as const;

export const BG = "#0A0F1C";
export const INDIGO = "#6366F1";
export const PURPLE = "#8B5CF6";
export const GREEN  = "#10B981";
export const MUTED  = "rgba(248,250,252,0.55)";
