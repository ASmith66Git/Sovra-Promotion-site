import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { SceneHook } from "./scenes/SceneHook";
import { SceneReveal } from "./scenes/SceneReveal";
import { SceneSave } from "./scenes/SceneSave";
import { SceneDoc } from "./scenes/SceneDoc";
import { SceneAnnotate } from "./scenes/SceneAnnotate";
import { SceneShare } from "./scenes/SceneShare";
import { SceneClose } from "./scenes/SceneClose";
import { SCENE_FRAMES, TOTAL_FRAMES, COLORS } from "./shared";

export const DOCS_DURATION = TOTAL_FRAMES;
export const DOCS_FPS = 30;

const hook    = 0;
const save    = hook    + SCENE_FRAMES.hook;
const doc     = save    + SCENE_FRAMES.save;
const annotate = doc    + SCENE_FRAMES.doc;
const share   = annotate + SCENE_FRAMES.annotate;
const close   = share   + SCENE_FRAMES.share;

const BOUNDARIES = [save, doc, annotate, share, close];

const TRANSITION_FRAMES = 35;

function lerp(frame: number, start: number, a: number, b: number) {
  return interpolate(frame, [start, start + TRANSITION_FRAMES], [a, b], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

const BG_COLORS = [
  { r: 99,  g: 102, b: 241, a: 0.14, posX: 60, posY: 40, size: 70 },
  { r: 16,  g: 185, b: 129, a: 0.16, posX: 40, posY: 55, size: 70 },
  { r: 59,  g: 130, b: 246, a: 0.15, posX: 55, posY: 45, size: 72 },
  { r: 139, g: 92,  b: 246, a: 0.16, posX: 45, posY: 50, size: 70 },
  { r: 59,  g: 130, b: 246, a: 0.14, posX: 50, posY: 40, size: 68 },
  { r: 99,  g: 102, b: 241, a: 0.18, posX: 50, posY: 50, size: 70 },
];

const BackgroundLayer: React.FC = () => {
  const frame = useCurrentFrame();

  let idx = 0;
  for (let i = BOUNDARIES.length - 1; i >= 0; i--) {
    if (frame >= BOUNDARIES[i]) { idx = i + 1; break; }
  }

  let bg = { ...BG_COLORS[idx] };

  for (let i = 0; i < BOUNDARIES.length; i++) {
    const b = BOUNDARIES[i];
    if (frame >= b && frame <= b + TRANSITION_FRAMES) {
      const from = BG_COLORS[i];
      const to   = BG_COLORS[i + 1];
      bg = {
        r: lerp(frame, b, from.r, to.r),
        g: lerp(frame, b, from.g, to.g),
        b: lerp(frame, b, from.b, to.b),
        a: lerp(frame, b, from.a, to.a),
        posX: lerp(frame, b, from.posX, to.posX),
        posY: lerp(frame, b, from.posY, to.posY),
        size: lerp(frame, b, from.size, to.size),
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
    </>
  );
};

export const SovraDocWorkflow: React.FC = () => {
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

      <Sequence from={hook} durationInFrames={SCENE_FRAMES.hook}>
        <SceneHook />
      </Sequence>

      <Sequence from={save} durationInFrames={SCENE_FRAMES.save}>
        <SceneSave />
      </Sequence>

      <Sequence from={doc} durationInFrames={SCENE_FRAMES.doc}>
        <SceneDoc />
      </Sequence>

      <Sequence from={annotate} durationInFrames={SCENE_FRAMES.annotate}>
        <SceneAnnotate />
      </Sequence>

      <Sequence from={share} durationInFrames={SCENE_FRAMES.share}>
        <SceneShare />
      </Sequence>

      <Sequence from={close} durationInFrames={SCENE_FRAMES.close}>
        <SceneClose />
      </Sequence>
    </AbsoluteFill>
  );
};
