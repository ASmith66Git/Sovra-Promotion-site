import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { SceneHookP15 }    from "./scenes/SceneHookP15";
import { SceneConnectP15 } from "./scenes/SceneConnectP15";
import { SceneResultP15 }  from "./scenes/SceneResultP15";
import { SceneCloseP15 }   from "./scenes/SceneCloseP15";

export const PORTRAIT_15_FPS      = 30;
export const PORTRAIT_15_DURATION = 450; // 15s

const SF = {
  hook:    90,  // 0–3s
  connect: 120, // 3–7s
  result:  150, // 7–12s
  close:   90,  // 12–15s
} as const;

const OFF = {
  hook:    0,
  connect: SF.hook,
  result:  SF.hook + SF.connect,
  close:   SF.hook + SF.connect + SF.result,
} as const;

const FADE_START = PORTRAIT_15_DURATION - 30;
const BG_COLOR   = "#0F172A";

const PortraitBackground15: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = frame / PORTRAIT_15_DURATION;
  const r = Math.round(interpolate(progress, [0, 0.2, 0.6, 0.8, 1], [239, 59, 99, 99, 99], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const g = Math.round(interpolate(progress, [0, 0.2, 0.6, 0.8, 1], [68, 130, 102, 102, 102], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const b = Math.round(interpolate(progress, [0, 0.2, 0.6, 0.8, 1], [68, 246, 241, 241, 241], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 40%, rgba(${r},${g},${b},0.22) 0%, ${BG_COLOR} 70%)` }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, mixBlendMode: "overlay", backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' }} />
    </>
  );
};

const FadeOut15: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [FADE_START, PORTRAIT_15_DURATION - 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ position: "absolute", inset: 0, backgroundColor: "#000", opacity, zIndex: 100, pointerEvents: "none" }} />;
};

export const SovraPortrait15: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BG_COLOR, fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', containerType: "size" }}>
    <PortraitBackground15 />
    <Sequence from={OFF.hook}    durationInFrames={SF.hook}>    <SceneHookP15 />    </Sequence>
    <Sequence from={OFF.connect} durationInFrames={SF.connect}> <SceneConnectP15 /> </Sequence>
    <Sequence from={OFF.result}  durationInFrames={SF.result}>  <SceneResultP15 />  </Sequence>
    <Sequence from={OFF.close}   durationInFrames={SF.close}>   <SceneCloseP15 />   </Sequence>
    <FadeOut15 />
    <Audio src={staticFile("audio/voiceover-15s-portrait.mp3")} volume={0.8} />
    <Audio src={staticFile("audio/lofi-tech-pulse.mp3")}        volume={0.3} />
  </AbsoluteFill>
);
