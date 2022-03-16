import { useCurrentFrame, useVideoConfig, staticFile } from "remotion";
import { useAudioData, getWaveformPortion } from "@remotion/media-utils";
const CLICK_TRACK = require(`../public/${process.env.REMOTION_CLICK_TRACK}.mp3`);

import mokismile from "./img/mokichan_smile.png";

export const MokiChibiHop: React.FC<{jumpHeight:number}> = ({children, jumpHeight}) => {
    if (!CLICK_TRACK) {
        return null;
    }

    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const audioData = useAudioData(CLICK_TRACK);

    if (!audioData) {
      return null;
    }

    const amplitude: {index:number, amplitude:number} = getWaveformPortion({
      audioData,
      startTimeInSeconds: frame/fps,
      numberOfSamples: 4,
      durationInSeconds: 1.3,
    })[0] || 0;

    return (
        <div>
            <img
                src={mokismile}
                style={{
                    width: "14%",
                    position: "absolute",
                    bottom: `${-17 + amplitude.amplitude * jumpHeight}px`,
                    right: "-50px",
                }}
            />
        </div>
    )
}
