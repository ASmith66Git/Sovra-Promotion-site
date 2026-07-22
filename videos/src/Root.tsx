import { Composition } from "remotion";
import { SovraAd } from "../sovra-ad-30s/Root";
import { SovraAd60, SOVRA_AD_60_DURATION, SOVRA_AD_60_FPS } from "../sovra-ad-60s/Root";
import { SovraPortrait30, PORTRAIT_30_DURATION, PORTRAIT_30_FPS } from "../sovra-portrait-30s/Root";
import { SovraPortrait15, PORTRAIT_15_DURATION, PORTRAIT_15_FPS } from "../sovra-portrait-15s/Root";
import { SovraPortraitPrivacy, PORTRAIT_PV_DURATION, PORTRAIT_PV_FPS } from "../sovra-portrait-privacy/Root";
import { SovraPortrait60, PORTRAIT_60_DURATION, PORTRAIT_60_FPS } from "../sovra-portrait-60s/Root";
import { SovraEmail30, EMAIL_30_DURATION, EMAIL_30_FPS } from "../sovra-email-30s/Root";
import { SovraLibrarian, LIBRARIAN_DURATION, LIBRARIAN_FPS } from "../sovra-librarian-30s/Root";
import { SovraLibrarianPortrait, PORTRAIT_LIB_DURATION, PORTRAIT_LIB_FPS } from "../sovra-librarian-portrait/Root";
import { SovraPortraitSecurity, PORTRAIT_SEC_DURATION, PORTRAIT_SEC_FPS } from "../sovra-portrait-security/Root";
import { SovraDocsPortrait, PORTRAIT_DP_DURATION, PORTRAIT_DP_FPS } from "../sovra-docs-portrait/Root";
import { SovraDocWorkflow, DOCS_DURATION, DOCS_FPS } from "../sovra-docs-30s/Root";
import { SovraSyncPortrait, PORTRAIT_SP_DURATION, PORTRAIT_SP_FPS } from "../sovra-sync-portrait/Root";
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
      <Composition
        id="SovraPortrait30"
        component={SovraPortrait30}
        durationInFrames={PORTRAIT_30_DURATION}
        fps={PORTRAIT_30_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SovraPortrait15"
        component={SovraPortrait15}
        durationInFrames={PORTRAIT_15_DURATION}
        fps={PORTRAIT_15_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SovraPortraitPrivacy"
        component={SovraPortraitPrivacy}
        durationInFrames={PORTRAIT_PV_DURATION}
        fps={PORTRAIT_PV_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SovraPortrait60"
        component={SovraPortrait60}
        durationInFrames={PORTRAIT_60_DURATION}
        fps={PORTRAIT_60_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SovraEmail30"
        component={SovraEmail30}
        durationInFrames={EMAIL_30_DURATION}
        fps={EMAIL_30_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SovraLibrarian"
        component={SovraLibrarian}
        durationInFrames={LIBRARIAN_DURATION}
        fps={LIBRARIAN_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="SovraLibrarianPortrait"
        component={SovraLibrarianPortrait}
        durationInFrames={PORTRAIT_LIB_DURATION}
        fps={PORTRAIT_LIB_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SovraPortraitSecurity"
        component={SovraPortraitSecurity}
        durationInFrames={PORTRAIT_SEC_DURATION}
        fps={PORTRAIT_SEC_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SovraDocWorkflow"
        component={SovraDocWorkflow}
        durationInFrames={DOCS_DURATION}
        fps={DOCS_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="SovraDocsPortrait"
        component={SovraDocsPortrait}
        durationInFrames={PORTRAIT_DP_DURATION}
        fps={PORTRAIT_DP_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SovraSyncPortrait"
        component={SovraSyncPortrait}
        durationInFrames={PORTRAIT_SP_DURATION}
        fps={PORTRAIT_SP_FPS}
        width={1080}
        height={1920}
      />
    </>
  );
};
