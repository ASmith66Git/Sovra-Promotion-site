import { Composition } from "remotion";
import { SovraSyncClose, CLOSE_SP_DURATION, CLOSE_SP_FPS } from "../sovra-sync-portrait/RootClose";

export const CloseRoot: React.FC = () => (
  <Composition
    id="SovraSyncClose"
    component={SovraSyncClose}
    durationInFrames={CLOSE_SP_DURATION}
    fps={CLOSE_SP_FPS}
    width={1080}
    height={1920}
  />
);
