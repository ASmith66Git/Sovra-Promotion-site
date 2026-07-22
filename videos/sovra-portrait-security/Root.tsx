import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { SceneHookSec }   from "./scenes/SceneHookSec";
import { SceneKeySec }    from "./scenes/SceneKeySec";
import { SceneLayersSec } from "./scenes/SceneLayersSec";
import { SceneDataSec }   from "./scenes/SceneDataSec";
import { SceneCloseSec }  from "./scenes/SceneCloseSec";
import { SEC_FRAMES, SEC_DURATION } from "./shared";

export const PORTRAIT_SEC_FPS      = 30;
export const PORTRAIT_SEC_DURATION = SEC_DURATION;

const OFF = {
  hook:   0,
  key:    SEC_FRAMES.hook,
  layers: SEC_FRAMES.hook + SEC_FRAMES.key,
  data:   SEC_FRAMES.hook + SEC_FRAMES.key + SEC_FRAMES.layers,
  close:  SEC_FRAMES.hook + SEC_FRAMES.key + SEC_FRAMES.layers + SEC_FRAMES.data,
} as const;

const FADE_START = SEC_DURATION - 40;
const BG = "#0A0F1C";

export const SovraPortraitSecurity: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [FADE_START, SEC_DURATION - 1], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BG, fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', containerType: "size" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(52,211,153,0.10) 0%, transparent 70%)" }} />
      <Sequence from={OFF.hook}   durationInFrames={SEC_FRAMES.hook}>   <SceneHookSec />   </Sequence>
      <Sequence from={OFF.key}    durationInFrames={SEC_FRAMES.key}>    <SceneKeySec />    </Sequence>
      <Sequence from={OFF.layers} durationInFrames={SEC_FRAMES.layers}> <SceneLayersSec /> </Sequence>
      <Sequence from={OFF.data}   durationInFrames={SEC_FRAMES.data}>   <SceneDataSec />   </Sequence>
      <Sequence from={OFF.close}  durationInFrames={SEC_FRAMES.close}>  <SceneCloseSec />  </Sequence>
      {frame >= FADE_START && (
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#000", opacity: fadeOut, zIndex: 100, pointerEvents: "none" }} />
      )}
    </AbsoluteFill>
  );
};
