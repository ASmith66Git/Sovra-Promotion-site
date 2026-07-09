import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { SceneHook60P }    from "./scenes/SceneHook60P";
import { SceneReveal60P }  from "./scenes/SceneReveal60P";
import { SceneInputsP }    from "./scenes/SceneInputsP";
import { SceneOrganiseP }  from "./scenes/SceneOrganiseP";
import { ScenePrivacy60P } from "./scenes/ScenePrivacy60P";
import { SceneClose60P }   from "./scenes/SceneClose60P";
import { COLORS } from "../sovra-ad-30s/shared";

export const PORTRAIT_60_FPS      = 30;
export const PORTRAIT_60_DURATION = 1800; // 60s

// Same scene durations as landscape original
const SF = {
  hook:     210,
  reveal:   180,
  inputs:   330,
  organise: 480,
  privacy:  300,
  close:    300,
} as const;

const OFF = {
  hook:     0,
  reveal:   SF.hook,
  inputs:   SF.hook + SF.reveal,
  organise: SF.hook + SF.reveal + SF.inputs,
  privacy:  SF.hook + SF.reveal + SF.inputs + SF.organise,
  close:    SF.hook + SF.reveal + SF.inputs + SF.organise + SF.privacy,
} as const;

const FADE_OUT_START = PORTRAIT_60_DURATION - 60;

// Scene orb colours — one per scene
const ORB_COLORS = [
  { r: 239, g:  68, b:  68 }, // hook    — red
  { r:  99, g: 102, b: 241 }, // reveal  — indigo
  { r:  59, g: 130, b: 246 }, // inputs  — blue
  { r: 139, g:  92, b: 246 }, // organise — purple
  { r:  16, g: 185, b: 129 }, // privacy — emerald
  { r:  99, g: 102, b: 241 }, // close   — indigo
];

const SCENE_BOUNDARIES = [OFF.reveal, OFF.inputs, OFF.organise, OFF.privacy, OFF.close];

function getOrbColor(frame: number) {
  let idx = 0;
  for (let i = 0; i < SCENE_BOUNDARIES.length; i++) {
    if (frame >= SCENE_BOUNDARIES[i]) idx = i + 1;
  }
  const next = Math.min(idx + 1, ORB_COLORS.length - 1);
  const boundary = SCENE_BOUNDARIES[idx] ?? PORTRAIT_60_DURATION;
  const t = interpolate(frame, [boundary - 45, boundary + 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const c = ORB_COLORS[idx];
  const n = ORB_COLORS[next];
  return {
    r: c.r + (n.r - c.r) * t,
    g: c.g + (n.g - c.g) * t,
    b: c.b + (n.b - c.b) * t,
  };
}

const BackgroundLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const { r, g, b } = getOrbColor(frame);
  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 35%, rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},0.22) 0%, #0F172A 68%)` }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, mixBlendMode: "overlay", backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' }} />
    </>
  );
};

const FadeOut: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [FADE_OUT_START, PORTRAIT_60_DURATION - 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ position: "absolute", inset: 0, backgroundColor: "#000", opacity, zIndex: 100, pointerEvents: "none" }} />;
};

export const SovraPortrait60: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#0F172A", fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', containerType: "size" }}>
    <BackgroundLayer />
    <Sequence from={OFF.hook}     durationInFrames={SF.hook}>     <SceneHook60P />    </Sequence>
    <Sequence from={OFF.reveal}   durationInFrames={SF.reveal}>   <SceneReveal60P />  </Sequence>
    <Sequence from={OFF.inputs}   durationInFrames={SF.inputs}>   <SceneInputsP />    </Sequence>
    <Sequence from={OFF.organise} durationInFrames={SF.organise}> <SceneOrganiseP />  </Sequence>
    <Sequence from={OFF.privacy}  durationInFrames={SF.privacy}>  <ScenePrivacy60P /> </Sequence>
    <Sequence from={OFF.close}    durationInFrames={SF.close}>    <SceneClose60P />   </Sequence>
    <FadeOut />
    <Audio src={staticFile("audio/voiceover-60s-timed.mp3")} volume={0.75} />
    <Audio src={staticFile("audio/lofi-tech-pulse.mp3")}     volume={0.35} />
  </AbsoluteFill>
);
