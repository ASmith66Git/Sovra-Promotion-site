import { CSSProperties } from "react";

export const PhoneMockup: React.FC<{
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}> = ({ src, alt, className = "", style }) => (
  <div
    className={`relative rounded-[2cqw] border-[0.3cqw] border-white/10 bg-black/50 overflow-hidden shadow-[0_2cqw_5cqw_rgba(0,0,0,0.5)] ${className}`}
    style={{ aspectRatio: "9/19", ...style }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
    <div className="absolute top-0 inset-x-0 h-[2.5cqw] bg-black/80 flex justify-center items-center rounded-b-[1cqw] w-1/3 mx-auto z-10">
      <div className="w-[3cqw] h-[0.4cqw] rounded-full bg-white/20" />
    </div>
  </div>
);
