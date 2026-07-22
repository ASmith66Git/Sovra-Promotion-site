import { registerRoot } from "remotion";
import { Composition } from "remotion";
import { SovraSyncPortrait, PORTRAIT_SP_DURATION, PORTRAIT_SP_FPS } from "../sovra-sync-portrait/Root";

const SyncRoot: React.FC = () => (
  <Composition
    id="SovraSyncPortrait"
    component={SovraSyncPortrait}
    durationInFrames={PORTRAIT_SP_DURATION}
    fps={PORTRAIT_SP_FPS}
    width={1080}
    height={1920}
  />
);

registerRoot(SyncRoot);
