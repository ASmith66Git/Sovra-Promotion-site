import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { SceneHookDP }     from "./scenes/SceneHookDP";
import { SceneSaveDP }     from "./scenes/SceneSaveDP";
import { SceneIntelDP }    from "./scenes/SceneIntelDP";
import { SceneAnnotateDP } from "./scenes/SceneAnnotateDP";
import { SceneShareDP }    from "./scenes/SceneShareDP";
import { SceneCloseDP }    from "./scenes/SceneCloseDP";
import { DP_FRAMES, DP_DURATION } from "./shared";

export const PORTRAIT_DP_FPS      = 30;
export const PORTRAIT_DP_DURATION = DP_DURATION;

const OFF = {
  hook:     0,
  save:     DP_FRAMES.hook,
  intel:    DP_FRAMES.hook + DP_FRAMES.save,
  annotate: DP_FRAMES.hook + DP_FRAMES.save + DP_FRAMES.intel,
  share:    DP_FRAMES.hook + DP_FRAMES.save + DP_FRAMES.intel + DP_FRAMES.annotate,
  close:    DP_FRAMES.hook + DP_FRAMES.save + DP_FRAMES.intel + DP_FRAMES.annotate + DP_FRAMES.share,
} as const;

const FADE_START = DP_DURATION - 40;
const BG = "#0A0F1C";

export const SovraDocsPortrait: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [FADE_START, DP_DURATION - 1], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BG, fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', containerType: "size" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 55% at 50% 30%, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />
      <Sequence from={OFF.hook}     durationInFrames={DP_FRAMES.hook}>     <SceneHookDP />     </Sequence>
      <Sequence from={OFF.save}     durationInFrames={DP_FRAMES.save}>     <SceneSaveDP />     </Sequence>
      <Sequence from={OFF.intel}    durationInFrames={DP_FRAMES.intel}>    <SceneIntelDP />    </Sequence>
      <Sequence from={OFF.annotate} durationInFrames={DP_FRAMES.annotate}> <SceneAnnotateDP /> </Sequence>
      <Sequence from={OFF.share}    durationInFrames={DP_FRAMES.share}>    <SceneShareDP />    </Sequence>
      <Sequence from={OFF.close}    durationInFrames={DP_FRAMES.close}>    <SceneCloseDP />    </Sequence>
      {frame >= FADE_START && (
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#000", opacity: fadeOut, zIndex: 100, pointerEvents: "none" }} />
      )}
    </AbsoluteFill>
  );
};
