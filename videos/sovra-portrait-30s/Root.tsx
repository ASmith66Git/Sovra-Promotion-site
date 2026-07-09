import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { SceneHookP30 }     from "./scenes/SceneHookP30";
import { SceneTriageP30 }   from "./scenes/SceneTriageP30";
import { SceneOrganiseP30 } from "./scenes/SceneOrganiseP30";
import { ScenePrivacyP30 }  from "./scenes/ScenePrivacyP30";
import { SceneCloseP30 }    from "./scenes/SceneCloseP30";

export const PORTRAIT_30_FPS      = 30;
export const PORTRAIT_30_DURATION = 900; // 30s

const SF = {
  hook:     120, // 0–4s
  triage:   240, // 4–12s
  organise: 210, // 12–19s
  privacy:  150, // 19–24s
  close:    180, // 24–30s
} as const;

const OFF = {
  hook:     0,
  triage:   SF.hook,
  organise: SF.hook + SF.triage,
  privacy:  SF.hook + SF.triage + SF.organise,
  close:    SF.hook + SF.triage + SF.organise + SF.privacy,
} as const;

const FADE_START = PORTRAIT_30_DURATION - 45;

const BG_COLOR = "#0F172A";

const PortraitBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Orb colour shifts through scenes
  const progress = frame / PORTRAIT_30_DURATION;
  const r = Math.round(interpolate(progress, [0, 0.13, 0.4, 0.7, 0.93, 1], [239, 59, 139, 16, 99, 99], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const g = Math.round(interpolate(progress, [0, 0.13, 0.4, 0.7, 0.93, 1], [68, 130, 92, 185, 102, 102], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const b = Math.round(interpolate(progress, [0, 0.13, 0.4, 0.7, 0.93, 1], [68, 246, 246, 129, 241, 241], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const alpha = 0.22;

  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 40%, rgba(${r},${g},${b},${alpha}) 0%, ${BG_COLOR} 70%)` }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, mixBlendMode: "overlay", backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' }} />
    </>
  );
};

const FadeOut: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [FADE_START, PORTRAIT_30_DURATION - 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ position: "absolute", inset: 0, backgroundColor: "#000", opacity, zIndex: 100, pointerEvents: "none" }} />;
};

export const SovraPortrait30: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BG_COLOR, fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', containerType: "size" }}>
    <PortraitBackground />
    <Sequence from={OFF.hook}     durationInFrames={SF.hook}>     <SceneHookP30 />     </Sequence>
    <Sequence from={OFF.triage}   durationInFrames={SF.triage}>   <SceneTriageP30 />   </Sequence>
    <Sequence from={OFF.organise} durationInFrames={SF.organise}> <SceneOrganiseP30 /> </Sequence>
    <Sequence from={OFF.privacy}  durationInFrames={SF.privacy}>  <ScenePrivacyP30 />  </Sequence>
    <Sequence from={OFF.close}    durationInFrames={SF.close}>    <SceneCloseP30 />    </Sequence>
    <FadeOut />
    <Audio src={staticFile("audio/voiceover-30s-portrait.mp3")} volume={0.8} />
    <Audio src={staticFile("audio/lofi-tech-pulse.mp3")}        volume={0.3} />
  </AbsoluteFill>
);
