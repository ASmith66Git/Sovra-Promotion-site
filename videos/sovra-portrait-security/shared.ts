import { staticFile } from "remotion";
export { clampedInterpolate, delayedInterpolate, SOVRA_LOGO, SOVRA_LOGO_TRANSPARENT } from "../sovra-ad-30s/shared";

export const SEC_FPS      = 30;
export const SEC_DURATION = 1200; // 40s — matches natural VO pace

export const SEC_FRAMES = {
  hook:   150,  // 5s
  key:    300,  // 10s
  layers: 270,  // 9s
  data:   240,  // 8s
  close:  240,  // 8s
} as const;

export const SEC_SHOTS = {
  settings: staticFile("screenshots/sec-settings.jpg"),
  phrase:   staticFile("screenshots/sec-phrase.jpg"),
  backup:   staticFile("screenshots/sec-backup.jpg"),
  dataUsage: staticFile("screenshots/sec-data-usage.jpg"),
};
