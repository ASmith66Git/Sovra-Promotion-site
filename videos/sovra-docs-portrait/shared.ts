import { staticFile } from "remotion";
export { clampedInterpolate, delayedInterpolate, SOVRA_LOGO, SOVRA_LOGO_TRANSPARENT } from "../sovra-ad-30s/shared";

export const DP_FPS      = 30;
export const DP_DURATION = 1140; // 38s — matches natural VO pace

export const DP_FRAMES = {
  hook:     180, // 6s  "An invoice lands"
  save:     210, // 7s  "One tap saves it"
  intel:    270, // 9s  "Sovra reads, names, links"
  annotate: 180, // 6s  "Annotate, sign"
  share:    180, // 6s  "Works from anywhere"
  close:    120, // 4s  Logo + CTA
} as const;

export const DP_SHOTS = {
  emailAttachment:   staticFile("screenshots/email-attachment.png"),
  attachmentPreview: staticFile("screenshots/attachment-preview.png"),
  docDetail:         staticFile("screenshots/doc-detail.png"),
  signDoc:           staticFile("screenshots/sign-doc.png"),
  shareSheet:        staticFile("screenshots/share-sheet.png"),
};
