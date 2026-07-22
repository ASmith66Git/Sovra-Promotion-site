export {
  FPS,
  COLORS,
  ICON_SEEDS,
  SCREENSHOT_PATHS,
  SOVRA_LOGO,
  clampedInterpolate,
  delayedInterpolate,
} from "../sovra-librarian-30s/shared";

export const PORTRAIT_LIB_DURATION = 1020;
export const PORTRAIT_LIB_FPS = 30;

export const PORTRAIT_SCENE_FRAMES = {
  hook:    150,
  reveal:  90,
  capture: 330,
  library: 300,
  close:   150,
} as const;
