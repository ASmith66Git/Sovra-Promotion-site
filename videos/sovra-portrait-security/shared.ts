import { staticFile } from "remotion";
export { clampedInterpolate, delayedInterpolate, SOVRA_LOGO, SOVRA_LOGO_TRANSPARENT } from "../sovra-ad-30s/shared";

export const SEC_FPS      = 30;
export const SEC_DURATION = 900;

export const SEC_FRAMES = {
  hook:   150,
  key:    240,
  layers: 210,
  data:   180,
  close:  120,
} as const;

export const SEC_SHOTS = {
  settings: staticFile("screenshots/sec-settings.jpg"),
  phrase:   staticFile("screenshots/sec-phrase.jpg"),
  backup:   staticFile("screenshots/sec-backup.jpg"),
  dataUsage: staticFile("screenshots/sec-data-usage.jpg"),
};
