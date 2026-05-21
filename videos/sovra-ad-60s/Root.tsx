import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { SceneHook60 }    from "./scenes/SceneHook60";
import { SceneReveal60 }  from "./scenes/SceneReveal60";
import { SceneInputs }    from "./scenes/SceneInputs";
import { SceneOrganise }  from "./scenes/SceneOrganise";
import { ScenePrivacy60 } from "./scenes/ScenePrivacy60";
import { SceneClose60 }   from "./scenes/SceneClose60";
import { COLORS } from "../sovra-ad-30s/shared";

export const SOVRA_AD_60_FPS      = 30;
export const SOVRA_AD_60_DURATION = 1800;

// Scene durations — must sum to 1800
const SCENE_FRAMES_60 = {
  hook:     210,  // 0:00–0:07
  reveal:   180,  // 0:07–0:13
  inputs:   330,  // 0:13–0:24
  organise: 480,  // 0:24–0:40
  privacy:  300,  // 0:40–0:50
  close:    300,  // 0:50–1:00
} as const;

// Cumulative offsets
const OFF = {
  hook:     0,
  reveal:   SCENE_FRAMES_60.hook,
  inputs:   SCENE_FRAMES_60.hook + SCENE_FRAMES_60.reveal,
  organise: SCENE_FRAMES_60.hook + SCENE_FRAMES_60.reveal + SCENE_FRAMES_60.inputs,
  privacy:  SCENE_FRAMES_60.hook + SCENE_FRAMES_60.reveal + SCENE_FRAMES_60.inputs + SCENE_FRAMES_60.organise,
  close:    SCENE_FRAMES_60.hook + SCENE_FRAMES_60.reveal + SCENE_FRAMES_60.inputs + SCENE_FRAMES_60.organise + SCENE_FRAMES_60.privacy,
} as const;

const TRANSITION_FRAMES = 45;

// One background config per scene
interface BgConfig { r: number; g: number; b: number; a: number; posX: number; posY: number; size: number }

const BG: BgConfig[] = [
  // Hook     — red/danger (problem mood)
  { r: 239, g:  68, b:  68, a: 0.14, posX: 50, posY: 50, size: 70 },
  // Reveal   — indigo (brand)
  { r:  99, g: 102, b: 241, a: 0.20, posX: 50, posY: 50, size: 70 },
  // Inputs   — blue (connectivity)
  { r:  59, g: 130, b: 246, a: 0.18, posX: 65, posY: 40, size: 75 },
  // Organise — purple (AI magic)
  { r: 139, g:  92, b: 246, a: 0.22, posX: 35, posY: 55, size: 80 },
  // Privacy  — emerald (trust)
  { r:  16, g: 185, b: 129, a: 0.20, posX: 30, posY: 60, size: 80 },
  // Close    — indigo (brand close)
  { r:  99, g: 102, b: 241, a: 0.20, posX: 50, posY: 50, size: 70 },
];

function hexToRgb(hex: string) {
  const v = parseInt(hex.slice(1), 16);
  return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
}

// Orb 1 configs per scene
const ORB1 = [
  { x: 20, y: 30, ...hexToRgb(COLORS.danger),    scale: 1.0 },
  { x: 35, y: 20, ...hexToRgb(COLORS.primary),   scale: 2.0 },
  { x: 70, y: 40, ...hexToRgb(COLORS.highlight), scale: 1.4 },
  { x: 25, y: 55, ...hexToRgb(COLORS.secondary), scale: 1.8 },
  { x: 10, y: 60, ...hexToRgb(COLORS.accent),    scale: 1.4 },
  { x: 35, y: 20, ...hexToRgb(COLORS.primary),   scale: 2.0 },
];

// Orb 2 colors per scene
const ORB2 = [
  hexToRgb(COLORS.orange),
  hexToRgb(COLORS.accent),
  hexToRgb(COLORS.secondary),
  hexToRgb(COLORS.highlight),
  hexToRgb(COLORS.primary),
  hexToRgb(COLORS.accent),
];

const SCENE_OFFSETS_LIST = [OFF.reveal, OFF.inputs, OFF.organise, OFF.privacy, OFF.close];

function lerp(frame: number, boundary: number, from: number, to: number) {
  return interpolate(frame, [boundary - TRANSITION_FRAMES, boundary + TRANSITION_FRAMES], [from, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function getSceneIdx(frame: number) {
  if (frame < OFF.reveal)   return 0;
  if (frame < OFF.inputs)   return 1;
  if (frame < OFF.organise) return 2;
  if (frame < OFF.privacy)  return 3;
  if (frame < OFF.close)    return 4;
  return 5;
}

const BackgroundLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const idx = getSceneIdx(frame);

  let bg = { ...BG[idx] };
  let o1 = { ...ORB1[idx] };
  let o2 = { ...ORB2[idx] };

  for (let i = 0; i < SCENE_OFFSETS_LIST.length; i++) {
    const boundary = SCENE_OFFSETS_LIST[i];
    if (frame >= boundary - TRANSITION_FRAMES && frame <= boundary + TRANSITION_FRAMES) {
      const from = i;
      const to   = i + 1;
      bg = {
        r:    lerp(frame, boundary, BG[from].r,    BG[to].r),
        g:    lerp(frame, boundary, BG[from].g,    BG[to].g),
        b:    lerp(frame, boundary, BG[from].b,    BG[to].b),
        a:    lerp(frame, boundary, BG[from].a,    BG[to].a),
        posX: lerp(frame, boundary, BG[from].posX, BG[to].posX),
        posY: lerp(frame, boundary, BG[from].posY, BG[to].posY),
        size: lerp(frame, boundary, BG[from].size, BG[to].size),
      };
      o1 = {
        x:     lerp(frame, boundary, ORB1[from].x,     ORB1[to].x),
        y:     lerp(frame, boundary, ORB1[from].y,     ORB1[to].y),
        r:     lerp(frame, boundary, ORB1[from].r,     ORB1[to].r),
        g:     lerp(frame, boundary, ORB1[from].g,     ORB1[to].g),
        b:     lerp(frame, boundary, ORB1[from].b,     ORB1[to].b),
        scale: lerp(frame, boundary, ORB1[from].scale, ORB1[to].scale),
      };
      o2 = {
        r: lerp(frame, boundary, ORB2[from].r, ORB2[to].r),
        g: lerp(frame, boundary, ORB2[from].g, ORB2[to].g),
        b: lerp(frame, boundary, ORB2[from].b, ORB2[to].b),
      };
      break;
    }
  }

  const gradient = `radial-gradient(circle at ${bg.posX}% ${bg.posY}%, rgba(${Math.round(bg.r)},${Math.round(bg.g)},${Math.round(bg.b)},${bg.a.toFixed(3)}) 0%, ${COLORS.bg} ${bg.size}%)`;

  return (
    <>
      <div className="absolute inset-0 z-0" style={{ background: gradient }} />

      {/* Film grain */}
      <div className="absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' }} />

      {/* Orb 1 */}
      <div className="absolute rounded-full blur-[8cqw] opacity-30 z-10 mix-blend-screen"
        style={{ width: "30cqw", height: "30cqw", left: `${o1.x}cqw`, top: `${o1.y}cqh`, backgroundColor: `rgb(${Math.round(o1.r)},${Math.round(o1.g)},${Math.round(o1.b)})`, transform: `scale(${o1.scale})` }} />

      {/* Orb 2 */}
      <div className="absolute rounded-full blur-[6cqw] opacity-20 z-10 mix-blend-screen"
        style={{ width: "25cqw", height: "25cqw", right: `${o1.x * 0.6}cqw`, bottom: `${o1.y * 0.6}cqh`, backgroundColor: `rgb(${Math.round(o2.r)},${Math.round(o2.g)},${Math.round(o2.b)})` }} />
    </>
  );
};

export const SovraAd60: React.FC = () => (
  <AbsoluteFill style={{
    backgroundColor: COLORS.bg,
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    containerType: "size",
  }}>
    <BackgroundLayer />

    <Sequence from={OFF.hook}     durationInFrames={SCENE_FRAMES_60.hook}>     <SceneHook60 />    </Sequence>
    <Sequence from={OFF.reveal}   durationInFrames={SCENE_FRAMES_60.reveal}>   <SceneReveal60 />  </Sequence>
    <Sequence from={OFF.inputs}   durationInFrames={SCENE_FRAMES_60.inputs}>   <SceneInputs />    </Sequence>
    <Sequence from={OFF.organise} durationInFrames={SCENE_FRAMES_60.organise}> <SceneOrganise />  </Sequence>
    <Sequence from={OFF.privacy}  durationInFrames={SCENE_FRAMES_60.privacy}>  <ScenePrivacy60 /> </Sequence>
    <Sequence from={OFF.close}    durationInFrames={SCENE_FRAMES_60.close}>    <SceneClose60 />   </Sequence>

    {/* Audio — VO at 75%, lo-fi bed at 35%, no fade */}
    <Audio src={staticFile("audio/voiceover-60s-timed.mp3")} volume={0.75} />
    <Audio src={staticFile("audio/lofi-tech-pulse.mp3")}     volume={0.35} />
  </AbsoluteFill>
);
