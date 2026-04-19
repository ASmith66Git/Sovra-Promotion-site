import { interpolate as remotionInterpolate, staticFile } from "remotion";

export const FPS = 30;

export const SCENE_FRAMES = {
  hook: 120,
  reveal: 135,
  triage: 165,
  privacy: 150,
  close: 165,
} as const;

export const COLORS = {
  bg: "#0F172A",
  primary: "#6366F1",
  secondary: "#8B5CF6",
  accent: "#10B981",
  highlight: "#3B82F6",
  danger: "#EF4444",
  orange: "#F97316",
};

export const ICON_SEEDS = Array.from({ length: 15 }, (_, i) => ({
  initialX: (i * 17 + 3) % 100 - 50,
  initialY: (i * 23 + 7) % 100 - 50,
  animateX: (i * 13 + 11) % 80 - 40,
  animateY: (i * 19 + 5) % 80 - 40,
  size: 2 + ((i * 7) % 30) / 10,
}));

export const SCREENSHOT_PATHS = {
  tasksTimeline: staticFile("screenshots/tasks-timeline.jpg"),
  today: staticFile("screenshots/today.jpg"),
  inboxZero: staticFile("screenshots/inbox-zero.jpg"),
  tasks: staticFile("screenshots/tasks.jpg"),
  askSovra: staticFile("screenshots/ask-sovra.jpg"),
  notes: staticFile("screenshots/notes.jpg"),
  finance: staticFile("screenshots/finance.jpg"),
  calendar: staticFile("screenshots/calendar.jpg"),
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

