import { interpolate as remotionInterpolate, staticFile } from "remotion";

export const FPS = 30;

export const SCENE_FRAMES = {
  hook: 150,
  reveal: 90,
  capture: 270,
  library: 240,
  close: 150,
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

export const ICON_SEEDS = Array.from({ length: 18 }, (_, i) => ({
  initialX: (i * 17 + 3) % 100 - 50,
  initialY: (i * 23 + 7) % 100 - 50,
  animateX: (i * 13 + 11) % 80 - 40,
  animateY: (i * 19 + 5) % 80 - 40,
  size: 2 + ((i * 7) % 30) / 10,
  delay: (i * 7) % 40,
}));

export const SCREENSHOT_PATHS = {
  today: staticFile("screenshots/today.jpg"),
  inboxZero: staticFile("screenshots/inbox-zero.jpg"),
  tasks: staticFile("screenshots/tasks.jpg"),
  askSovra: staticFile("screenshots/ask-sovra.jpg"),
  notes: staticFile("screenshots/notes.jpg"),
  calendar: staticFile("screenshots/calendar.jpg"),
  connected: staticFile("screenshots/connected.jpg"),
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
