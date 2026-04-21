import { Composition } from "remotion";
import { SovraAd } from "../sovra-ad-30s/Root";
import { SovraAd60, SOVRA_AD_60_DURATION, SOVRA_AD_60_FPS } from "../sovra-ad-60s/Root";
import "./style.css";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SovraAd"
        component={SovraAd}
        durationInFrames={735}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="SovraAd60"
        component={SovraAd60}
        durationInFrames={SOVRA_AD_60_DURATION}
        fps={SOVRA_AD_60_FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
