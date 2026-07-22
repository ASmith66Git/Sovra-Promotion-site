import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { SceneHookSP }          from "./scenes/SceneHookSP";
import { SceneDevicesSP }       from "./scenes/SceneDevicesSP";
import { SceneZeroKnowledgeSP } from "./scenes/SceneZeroKnowledgeSP";
import { SceneSettingsSP }      from "./scenes/SceneSettingsSP";
import { SceneCloseSP }         from "./scenes/SceneCloseSP";
import { SP_FRAMES, SP_DURATION } from "./shared";

export const PORTRAIT_SP_FPS      = 30;
export const PORTRAIT_SP_DURATION = SP_DURATION; // 940 frames = 31.32s

const OFF = {
  hook:     0,
  devices:  SP_FRAMES.hook,
  zero:     SP_FRAMES.hook + SP_FRAMES.devices,
  settings: SP_FRAMES.hook + SP_FRAMES.devices + SP_FRAMES.zero,
  close:    SP_FRAMES.hook + SP_FRAMES.devices + SP_FRAMES.zero + SP_FRAMES.settings,
} as const;

const FADE_START = SP_DURATION - 35;
const BG = "#0A0F1C";

export const SovraSyncPortrait: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [FADE_START, SP_DURATION - 1], [0, 1], {
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
      <Sequence from={OFF.hook}     durationInFrames={SP_FRAMES.hook}>     <SceneHookSP />          </Sequence>
      <Sequence from={OFF.devices}  durationInFrames={SP_FRAMES.devices}>  <SceneDevicesSP />       </Sequence>
      <Sequence from={OFF.zero}     durationInFrames={SP_FRAMES.zero}>     <SceneZeroKnowledgeSP /> </Sequence>
      <Sequence from={OFF.settings} durationInFrames={SP_FRAMES.settings}> <SceneSettingsSP />      </Sequence>
      <Sequence from={OFF.close}    durationInFrames={SP_FRAMES.close}>    <SceneCloseSP />         </Sequence>
      {frame >= FADE_START && (
        <div style={{
          position: "absolute", inset: 0,
          backgroundColor: "#000", opacity: fadeOut, zIndex: 100, pointerEvents: "none",
        }} />
      )}
    </AbsoluteFill>
  );
};
