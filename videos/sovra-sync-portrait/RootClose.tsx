import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { SceneCloseSP } from "./scenes/SceneCloseSP";
import { SP_FRAMES } from "./shared";

const CLOSE_DURATION = SP_FRAMES.close;
const BG = "#0A0F1C";

export const SovraSyncClose: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [CLOSE_DURATION - 20, CLOSE_DURATION - 1], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{
      backgroundColor: BG,
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
      containerType: "size",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 55% at 50% 30%, rgba(99,102,241,0.12) 0%, transparent 70%)",
      }} />
      <Sequence from={0} durationInFrames={CLOSE_DURATION}>
        <SceneCloseSP />
      </Sequence>
      {frame >= CLOSE_DURATION - 20 && (
        <div style={{
          position: "absolute", inset: 0,
          backgroundColor: "#000", opacity: fadeOut, zIndex: 100, pointerEvents: "none",
        }} />
      )}
    </AbsoluteFill>
  );
};

export const CLOSE_SP_FPS      = 30;
export const CLOSE_SP_DURATION = CLOSE_DURATION;
