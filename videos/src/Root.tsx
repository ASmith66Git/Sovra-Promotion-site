import { Composition } from "remotion";
import { SovraAd } from "../sovra-ad-30s/Root";
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
    </>
  );
};
