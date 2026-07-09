import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { SceneHook } from "./scenes/SceneHook";
import { SceneReveal } from "./scenes/SceneReveal";
import { SceneCapture } from "./scenes/SceneCapture";
import { SceneLibrary } from "./scenes/SceneLibrary";
import { SceneClose } from "./scenes/SceneClose";
import { SCENE_FRAMES, TOTAL_FRAMES, COLORS } from "./shared";

export const LIBRARIAN_DURATION = TOTAL_FRAMES;
export const LIBRARIAN_FPS = 30;

const SCENE_OFFSETS = {
  hook: 0,
  reveal: SCENE_FRAMES.hook,
  capture: SCENE_FRAMES.hook + SCENE_FRAMES.reveal,
  library: SCENE_FRAMES.hook + SCENE_FRAMES.reveal + SCENE_FRAMES.capture,
  close: SCENE_FRAMES.hook + SCENE_FRAMES.reveal + SCENE_FRAMES.capture + SCENE_FRAMES.library,
};

const TRANSITION_FRAMES = 40;

const BOUNDARIES = [
  SCENE_OFFSETS.reveal,
  SCENE_OFFSETS.capture,
  SCENE_OFFSETS.library,
  SCENE_OFFSETS.close,
];

interface OrbConfig { r: number; g: number; b: number; x: number; y: number; scale: number; }

function hexToRgb(hex: string) {
  const val = parseInt(hex.slice(1), 16);
  return { r: (val >> 16) & 255, g: (val >> 8) & 255, b: val & 255 };
}

const ORB_CONFIGS: OrbConfig[] = [
  { ...hexToRgb(COLORS.danger),    x: 20, y: 30, scale: 1.0 },
  { ...hexToRgb(COLORS.primary),   x: 35, y: 20, scale: 1.5 },
  { ...hexToRgb(COLORS.secondary), x: 70, y: 40, scale: 1.0 },
  { ...hexToRgb(COLORS.accent),    x: 15, y: 60, scale: 1.2 },
  { ...hexToRgb(COLORS.primary),   x: 60, y: 25, scale: 1.0 },
];

function lerp(frame: number, boundary: number, a: number, b: number) {
  return interpolate(frame, [boundary, boundary + TRANSITION_FRAMES], [a, b], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function getSceneIdx(frame: number) {
  if (frame < BOUNDARIES[0]) return 0;
  if (frame < BOUNDARIES[1]) return 1;
  if (frame < BOUNDARIES[2]) return 2;
  if (frame < BOUNDARIES[3]) return 3;
  return 4;
}

const BG_COLORS = [
  { r: 239, g: 68,  b: 68,  a: 0.12, posX: 50, posY: 50, size: 70 },
  { r: 99,  g: 102, b: 241, a: 0.18, posX: 50, posY: 50, size: 70 },
  { r: 139, g: 92,  b: 246, a: 0.18, posX: 65, posY: 40, size: 75 },
  { r: 16,  g: 185, b: 129, a: 0.16, posX: 35, posY: 55, size: 75 },
  { r: 99,  g: 102, b: 241, a: 0.18, posX: 50, posY: 50, size: 70 },
];

const BackgroundLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const idx = getSceneIdx(frame);

  let bg = { ...BG_COLORS[idx] };
  let orb = { ...ORB_CONFIGS[idx] };

  for (let i = 0; i < BOUNDARIES.length; i++) {
    const b = BOUNDARIES[i];
    if (frame >= b - TRANSITION_FRAMES && frame <= b + TRANSITION_FRAMES) {
      const from = BG_COLORS[i];
      const to   = BG_COLORS[i + 1];
      const fromOrb = ORB_CONFIGS[i];
      const toOrb   = ORB_CONFIGS[i + 1];
      const start = b - TRANSITION_FRAMES;
      bg = {
        r: lerp(frame, start, from.r, to.r),
        g: lerp(frame, start, from.g, to.g),
        b: lerp(frame, start, from.b, to.b),
        a: lerp(frame, start, from.a, to.a),
        posX: lerp(frame, start, from.posX, to.posX),
        posY: lerp(frame, start, from.posY, to.posY),
        size: lerp(frame, start, from.size, to.size),
      };
      orb = {
        r: lerp(frame, start, fromOrb.r, toOrb.r),
        g: lerp(frame, start, fromOrb.g, toOrb.g),
        b: lerp(frame, start, fromOrb.b, toOrb.b),
        x: lerp(frame, start, fromOrb.x, toOrb.x),
        y: lerp(frame, start, fromOrb.y, toOrb.y),
        scale: lerp(frame, start, fromOrb.scale, toOrb.scale),
      };
      break;
    }
  }

  const gradient = `radial-gradient(circle at ${bg.posX}% ${bg.posY}%, rgba(${Math.round(bg.r)},${Math.round(bg.g)},${Math.round(bg.b)},${bg.a.toFixed(3)}) 0%, ${COLORS.bg} ${bg.size}%)`;

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
        className="absolute rounded-full blur-[8cqw] opacity-25 z-10 mix-blend-screen"
        style={{
          width: "30cqw",
          height: "30cqw",
          left: `${orb.x}cqw`,
          top: `${orb.y}cqh`,
          backgroundColor: `rgb(${Math.round(orb.r)},${Math.round(orb.g)},${Math.round(orb.b)})`,
          transform: `scale(${orb.scale})`,
        }}
      />
    </>
  );
};

export const SovraLibrarian: React.FC = () => {
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

      <Sequence from={SCENE_OFFSETS.capture} durationInFrames={SCENE_FRAMES.capture}>
        <SceneCapture />
      </Sequence>

      <Sequence from={SCENE_OFFSETS.library} durationInFrames={SCENE_FRAMES.library}>
        <SceneLibrary />
      </Sequence>

      <Sequence from={SCENE_OFFSETS.close} durationInFrames={SCENE_FRAMES.close}>
        <SceneClose />
      </Sequence>
    </AbsoluteFill>
  );
};
