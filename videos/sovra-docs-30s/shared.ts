import { interpolate as remotionInterpolate, staticFile } from "remotion";

export const FPS = 30;

export const SCENE_FRAMES = {
  hook: 180,
  save: 180,
  doc: 270,
  annotate: 180,
  share: 150,
  close: 60,
} as const;

export const TOTAL_FRAMES = Object.values(SCENE_FRAMES).reduce((a, b) => a + b, 0);

export const COLORS = {
  bg: "#0F172A",
  primary: "#6366F1",
  secondary: "#8B5CF6",
  accent: "#10B981",
  highlight: "#3B82F6",
  danger: "#EF4444",
  orange: "#F97316",
};

export const SCREENSHOT_PATHS = {
  emailAttachment: staticFile("screenshots/email-attachment.png"),
  attachmentPreview: staticFile("screenshots/attachment-preview.png"),
  docDetail: staticFile("screenshots/doc-detail.png"),
  signDoc: staticFile("screenshots/sign-doc.png"),
  shareSheet: staticFile("screenshots/share-sheet.png"),
};

export const SOVRA_LOGO = staticFile("sovra-logo.svg");

export function clampedInterpolate(
  frame: number,
  inputRange: number[],
  outputRange: number[],
  easing?: (t: number) => number
) {
  return remotionInterpolate(frame, inputRange, outputRange, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });
}

export function delayedInterpolate(
  frame: number,
  delaySeconds: number,
  durationSeconds: number,
  from: number,
  to: number,
  easing?: (t: number) => number
) {
  const startFrame = Math.round(delaySeconds * FPS);
  const endFrame = startFrame + Math.round(durationSeconds * FPS);
  return clampedInterpolate(frame, [startFrame, endFrame], [from, to], easing);
}
