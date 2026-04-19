import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { SceneHook } from "./scenes/SceneHook";
import { SceneReveal } from "./scenes/SceneReveal";
import { SceneTriage } from "./scenes/SceneTriage";
import { ScenePrivacy } from "./scenes/ScenePrivacy";
import { SceneClose } from "./scenes/SceneClose";
import { SCENE_FRAMES, COLORS } from "./shared";

const SCENE_OFFSETS = {
  hook: 0,
  reveal: SCENE_FRAMES.hook,
  triage: SCENE_FRAMES.hook + SCENE_FRAMES.reveal,
  privacy: SCENE_FRAMES.hook + SCENE_FRAMES.reveal + SCENE_FRAMES.triage,
  close: SCENE_FRAMES.hook + SCENE_FRAMES.reveal + SCENE_FRAMES.triage + SCENE_FRAMES.privacy,
};

const BOUNDARIES = [
  SCENE_OFFSETS.reveal,
  SCENE_OFFSETS.triage,
  SCENE_OFFSETS.privacy,
  SCENE_OFFSETS.close,
];

const TRANSITION_FRAMES = 45;

interface BgConfig {
  r: number;
  g: number;
  b: number;
  a: number;
  posX: number;
  posY: number;
  size: number;
}

const BG_CONFIGS: BgConfig[] = [
  { r: 239, g: 68, b: 68, a: 0.13, posX: 50, posY: 50, size: 70 },
  { r: 99, g: 102, b: 241, a: 0.2, posX: 50, posY: 50, size: 70 },
  { r: 139, g: 92, b: 246, a: 0.2, posX: 70, posY: 40, size: 80 },
  { r: 16, g: 185, b: 129, a: 0.2, posX: 30, posY: 60, size: 80 },
  { r: 99, g: 102, b: 241, a: 0.2, posX: 50, posY: 50, size: 70 },
];

interface OrbConfig {
  x: number;
  y: number;
  r: number;
  g: number;
  b: number;
  scale: number;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const val = parseInt(hex.slice(1), 16);
  return { r: (val >> 16) & 255, g: (val >> 8) & 255, b: val & 255 };
}

const ORB1_CONFIGS: OrbConfig[] = [
  { x: 20, y: 30, ...hexToRgb(COLORS.orange), scale: 1 },
  { x: 35, y: 20, ...hexToRgb(COLORS.primary), scale: 2 },
  { x: 70, y: 40, ...hexToRgb(COLORS.secondary), scale: 1 },
  { x: 10, y: 60, ...hexToRgb(COLORS.accent), scale: 1 },
  { x: 35, y: 20, ...hexToRgb(COLORS.primary), scale: 2 },
];

const ORB2_COLORS = [
  hexToRgb(COLORS.danger),
  hexToRgb(COLORS.accent),
  hexToRgb(COLORS.secondary),
  hexToRgb(COLORS.accent),
  hexToRgb(COLORS.accent),
];

function getSceneIndex(frame: number): number {
  if (frame < SCENE_OFFSETS.reveal) return 0;
  if (frame < SCENE_OFFSETS.triage) return 1;
  if (frame < SCENE_OFFSETS.privacy) return 2;
  if (frame < SCENE_OFFSETS.close) return 3;
  return 4;
}

function lerpValue(frame: number, boundary: number, fromVal: number, toVal: number): number {
  return interpolate(frame, [boundary, boundary + TRANSITION_FRAMES], [fromVal, toVal], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

const BackgroundLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneIdx = getSceneIndex(frame);

  let bgR = BG_CONFIGS[sceneIdx].r;
  let bgG = BG_CONFIGS[sceneIdx].g;
  let bgB = BG_CONFIGS[sceneIdx].b;
  let bgA = BG_CONFIGS[sceneIdx].a;
  let bgPosX = BG_CONFIGS[sceneIdx].posX;
  let bgPosY = BG_CONFIGS[sceneIdx].posY;
  let bgSize = BG_CONFIGS[sceneIdx].size;

  let orbX = ORB1_CONFIGS[sceneIdx].x;
  let orbY = ORB1_CONFIGS[sceneIdx].y;
  let orbR = ORB1_CONFIGS[sceneIdx].r;
  let orbG = ORB1_CONFIGS[sceneIdx].g;
  let orbB = ORB1_CONFIGS[sceneIdx].b;
  let orbScale = ORB1_CONFIGS[sceneIdx].scale;

  let orb2R = ORB2_COLORS[sceneIdx].r;
  let orb2G = ORB2_COLORS[sceneIdx].g;
  let orb2B = ORB2_COLORS[sceneIdx].b;

  for (let i = 0; i < BOUNDARIES.length; i++) {
    const boundary = BOUNDARIES[i];
    if (frame >= boundary - TRANSITION_FRAMES && frame <= boundary + TRANSITION_FRAMES) {
      const fromIdx = i;
      const toIdx = i + 1;

      bgR = lerpValue(frame, boundary - TRANSITION_FRAMES, BG_CONFIGS[fromIdx].r, BG_CONFIGS[toIdx].r);
      bgG = lerpValue(frame, boundary - TRANSITION_FRAMES, BG_CONFIGS[fromIdx].g, BG_CONFIGS[toIdx].g);
      bgB = lerpValue(frame, boundary - TRANSITION_FRAMES, BG_CONFIGS[fromIdx].b, BG_CONFIGS[toIdx].b);
      bgA = lerpValue(frame, boundary - TRANSITION_FRAMES, BG_CONFIGS[fromIdx].a, BG_CONFIGS[toIdx].a);
      bgPosX = lerpValue(frame, boundary - TRANSITION_FRAMES, BG_CONFIGS[fromIdx].posX, BG_CONFIGS[toIdx].posX);
      bgPosY = lerpValue(frame, boundary - TRANSITION_FRAMES, BG_CONFIGS[fromIdx].posY, BG_CONFIGS[toIdx].posY);
      bgSize = lerpValue(frame, boundary - TRANSITION_FRAMES, BG_CONFIGS[fromIdx].size, BG_CONFIGS[toIdx].size);

      orbX = lerpValue(frame, boundary - TRANSITION_FRAMES, ORB1_CONFIGS[fromIdx].x, ORB1_CONFIGS[toIdx].x);
      orbY = lerpValue(frame, boundary - TRANSITION_FRAMES, ORB1_CONFIGS[fromIdx].y, ORB1_CONFIGS[toIdx].y);
      orbR = lerpValue(frame, boundary - TRANSITION_FRAMES, ORB1_CONFIGS[fromIdx].r, ORB1_CONFIGS[toIdx].r);
      orbG = lerpValue(frame, boundary - TRANSITION_FRAMES, ORB1_CONFIGS[fromIdx].g, ORB1_CONFIGS[toIdx].g);
      orbB = lerpValue(frame, boundary - TRANSITION_FRAMES, ORB1_CONFIGS[fromIdx].b, ORB1_CONFIGS[toIdx].b);
      orbScale = lerpValue(frame, boundary - TRANSITION_FRAMES, ORB1_CONFIGS[fromIdx].scale, ORB1_CONFIGS[toIdx].scale);

      orb2R = lerpValue(frame, boundary - TRANSITION_FRAMES, ORB2_COLORS[fromIdx].r, ORB2_COLORS[toIdx].r);
      orb2G = lerpValue(frame, boundary - TRANSITION_FRAMES, ORB2_COLORS[fromIdx].g, ORB2_COLORS[toIdx].g);
      orb2B = lerpValue(frame, boundary - TRANSITION_FRAMES, ORB2_COLORS[fromIdx].b, ORB2_COLORS[toIdx].b);
      break;
    }
  }

  const gradient = `radial-gradient(circle at ${bgPosX}% ${bgPosY}%, rgba(${Math.round(bgR)},${Math.round(bgG)},${Math.round(bgB)},${bgA.toFixed(3)}) 0%, ${COLORS.bg} ${bgSize}%)`;

  return (
    <>
      <div className="absolute inset-0 z-0" style={{ background: gradient }} />

      <div
        className="absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <div
        className="absolute rounded-full blur-[8cqw] opacity-30 z-10 mix-blend-screen"
        style={{
          width: "30cqw",
          height: "30cqw",
          left: `${orbX}cqw`,
          top: `${orbY}cqh`,
          backgroundColor: `rgb(${Math.round(orbR)},${Math.round(orbG)},${Math.round(orbB)})`,
          transform: `scale(${orbScale})`,
        }}
      />

      <div
        className="absolute rounded-full blur-[6cqw] opacity-20 z-10 mix-blend-screen"
        style={{
          width: "25cqw",
          height: "25cqw",
          left: `${100 - orbX}cqw`,
          top: `${100 - orbY}cqh`,
          backgroundColor: `rgb(${Math.round(orb2R)},${Math.round(orb2G)},${Math.round(orb2B)})`,
        }}
      />
    </>
  );
};

export const SovraAd: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        containerType: "size",
      }}
    >
      <BackgroundLayer />

      <Sequence from={SCENE_OFFSETS.hook} durationInFrames={SCENE_FRAMES.hook}>
        <SceneHook />
      </Sequence>

      <Sequence from={SCENE_OFFSETS.reveal} durationInFrames={SCENE_FRAMES.reveal}>
        <SceneReveal />
      </Sequence>

      <Sequence from={SCENE_OFFSETS.triage} durationInFrames={SCENE_FRAMES.triage}>
        <SceneTriage />
      </Sequence>

      <Sequence from={SCENE_OFFSETS.privacy} durationInFrames={SCENE_FRAMES.privacy}>
        <ScenePrivacy />
      </Sequence>

      <Sequence from={SCENE_OFFSETS.close} durationInFrames={SCENE_FRAMES.close}>
        <SceneClose />
      </Sequence>
    </AbsoluteFill>
  );
};
