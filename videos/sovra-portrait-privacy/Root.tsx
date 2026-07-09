import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { SceneHookPV }    from "./scenes/SceneHookPV";
import { SceneProblemPV } from "./scenes/SceneProblemPV";
import { SceneStancePV }  from "./scenes/SceneStancePV";
import { ScenePromisePV } from "./scenes/ScenePromisePV";
import { SceneClosePV }   from "./scenes/SceneClosePV";

export const PORTRAIT_PV_FPS      = 30;
export const PORTRAIT_PV_DURATION = 900; // 30s

const SF = {
  hook:    90,  // 0–3s
  problem: 180, // 3–9s
  stance:  270, // 9–18s
  promise: 180, // 18–24s
  close:   180, // 24–30s
} as const;

const OFF = {
  hook:    0,
  problem: SF.hook,
  stance:  SF.hook + SF.problem,
  promise: SF.hook + SF.problem + SF.stance,
  close:   SF.hook + SF.problem + SF.stance + SF.promise,
} as const;

const FADE_START = PORTRAIT_PV_DURATION - 45;
const BG_COLOR   = "#0A0F1C";

const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = frame / PORTRAIT_PV_DURATION;

  // Red (danger) → orange (problem) → slate → emerald (solution) → indigo (close)
  const r = Math.round(interpolate(progress, [0, 0.1, 0.3, 0.5, 0.8, 1], [180, 200, 100, 16, 40, 60], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const g = Math.round(interpolate(progress, [0, 0.1, 0.3, 0.5, 0.8, 1], [20, 60, 30, 150, 60, 70], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const b = Math.round(interpolate(progress, [0, 0.1, 0.3, 0.5, 0.8, 1], [20, 20, 20, 100, 160, 200], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  return (
    <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 30%, rgba(${r},${g},${b},0.28) 0%, ${BG_COLOR} 68%)` }} />
  );
};

const FadeOut: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [FADE_START, PORTRAIT_PV_DURATION - 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ position: "absolute", inset: 0, backgroundColor: "#000", opacity, zIndex: 100, pointerEvents: "none" }} />;
};

export const SovraPortraitPrivacy: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BG_COLOR, fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', containerType: "size" }}>
    <Background />
    <Sequence from={OFF.hook}    durationInFrames={SF.hook}>    <SceneHookPV />    </Sequence>
    <Sequence from={OFF.problem} durationInFrames={SF.problem}> <SceneProblemPV /> </Sequence>
    <Sequence from={OFF.stance}  durationInFrames={SF.stance}>  <SceneStancePV />  </Sequence>
    <Sequence from={OFF.promise} durationInFrames={SF.promise}> <ScenePromisePV /> </Sequence>
    <Sequence from={OFF.close}   durationInFrames={SF.close}>   <SceneClosePV />   </Sequence>
    <FadeOut />
    <Audio src={staticFile("audio/voiceover-privacy-portrait.mp3")} volume={0.85} />
    <Audio src={staticFile("audio/lofi-tech-pulse.mp3")}            volume={0.18} />
  </AbsoluteFill>
);
