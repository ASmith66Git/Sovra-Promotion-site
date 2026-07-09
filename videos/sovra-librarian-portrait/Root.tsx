import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { SceneHookPLib } from "./scenes/SceneHookPLib";
import { SceneRevealPLib } from "./scenes/SceneRevealPLib";
import { SceneCapturePLib } from "./scenes/SceneCapturePLib";
import { SceneLibraryPLib } from "./scenes/SceneLibraryPLib";
import { SceneClosePLib } from "./scenes/SceneClosePLib";
import { SCENE_FRAMES, COLORS } from "./shared";

export const PORTRAIT_LIB_DURATION = 900;
export const PORTRAIT_LIB_FPS = 30;

const SCENE_START = {
  hook:    0,
  reveal:  SCENE_FRAMES.hook,
  capture: SCENE_FRAMES.hook + SCENE_FRAMES.reveal,
  library: SCENE_FRAMES.hook + SCENE_FRAMES.reveal + SCENE_FRAMES.capture,
  close:   SCENE_FRAMES.hook + SCENE_FRAMES.reveal + SCENE_FRAMES.capture + SCENE_FRAMES.library,
};

const FADE_OUT_START = PORTRAIT_LIB_DURATION - 45;

export const SovraLibrarianPortrait: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [FADE_OUT_START, PORTRAIT_LIB_DURATION - 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: "'Inter', 'ui-sans-serif', system-ui, sans-serif", containerType: "size" }}>

      {/* Global radial glow */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: `radial-gradient(ellipse 80% 60% at 50% 30%, rgba(99,102,241,0.10) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Scenes */}
      {frame >= SCENE_START.hook    && frame < SCENE_START.reveal  && <SceneHookPLib />}
      {frame >= SCENE_START.reveal  && frame < SCENE_START.capture && <SceneRevealPLib />}
      {frame >= SCENE_START.capture && frame < SCENE_START.library && <SceneCapturePLib />}
      {frame >= SCENE_START.library && frame < SCENE_START.close   && <SceneLibraryPLib />}
      {frame >= SCENE_START.close                                   && <SceneClosePLib />}

      {/* Fade-out vignette */}
      {frame >= FADE_OUT_START && (
        <div style={{ position: "absolute", inset: 0, zIndex: 100, backgroundColor: "#000", opacity: fadeOut, pointerEvents: "none" }} />
      )}
    </AbsoluteFill>
  );
};
