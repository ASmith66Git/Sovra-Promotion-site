import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { SceneHookEmail }   from "./scenes/SceneHookEmail";
import { SceneNoiseEmail }  from "./scenes/SceneNoiseEmail";
import { SceneTriageEmail } from "./scenes/SceneTriageEmail";
import { SceneCloseEmail }  from "./scenes/SceneCloseEmail";

export const EMAIL_30_FPS      = 30;
export const EMAIL_30_DURATION = 900; // 30s

const SF = {
  hook:   180, // 0:00–0:06
  noise:  210, // 0:06–0:13
  triage: 330, // 0:13–0:24
  close:  180, // 0:24–0:30
} as const;

const OFF = {
  hook:   0,
  noise:  SF.hook,
  triage: SF.hook + SF.noise,
  close:  SF.hook + SF.noise + SF.triage,
} as const;

const FADE_START = EMAIL_30_DURATION - 45;

const BG_COLOR = "#0F172A";

const PortraitBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = frame / EMAIL_30_DURATION;
  const r = Math.round(interpolate(progress, [0, 0.2, 0.43, 0.8, 1], [239, 239, 99, 99, 99],   { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const g = Math.round(interpolate(progress, [0, 0.2, 0.43, 0.8, 1], [68,  68,  102, 102, 102], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const b = Math.round(interpolate(progress, [0, 0.2, 0.43, 0.8, 1], [68,  68,  241, 241, 241], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 40%, rgba(${r},${g},${b},0.20) 0%, ${BG_COLOR} 70%)` }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, mixBlendMode: "overlay", backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' }} />
    </>
  );
};

const FadeOut: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [FADE_START, EMAIL_30_DURATION - 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ position: "absolute", inset: 0, backgroundColor: "#000", opacity, zIndex: 100, pointerEvents: "none" }} />;
};

export const SovraEmail30: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BG_COLOR, fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', containerType: "size" }}>
    <PortraitBackground />
    <Sequence from={OFF.hook}   durationInFrames={SF.hook}>   <SceneHookEmail />   </Sequence>
    <Sequence from={OFF.noise}  durationInFrames={SF.noise}>  <SceneNoiseEmail />  </Sequence>
    <Sequence from={OFF.triage} durationInFrames={SF.triage}> <SceneTriageEmail /> </Sequence>
    <Sequence from={OFF.close}  durationInFrames={SF.close}>  <SceneCloseEmail />  </Sequence>
    <FadeOut />
    <Audio src={staticFile("audio/voiceover-email-30s-timed.mp3")} volume={0.75} />
    <Audio src={staticFile("audio/lofi-tech-pulse.mp3")}           volume={0.35} />
  </AbsoluteFill>
);
