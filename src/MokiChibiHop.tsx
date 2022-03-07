import { Audio, useCurrentFrame, useVideoConfig } from "remotion";
import { useAudioData, getWaveformPortion } from "@remotion/media-utils";
import clicktrack from "./click.mp3";

import mokismile from "./img/mokichan_smile.png";

export const MokiChibiHop: React.FC<{jumpHeight:number}> = ({children, jumpHeight}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const audioData = useAudioData(clicktrack);

    if (!audioData) {
      return null;
    }

    const amplitude: {index:number, amplitude:number} = getWaveformPortion({
      audioData,
      startTimeInSeconds: frame/fps,
      numberOfSamples: 4,
      durationInSeconds: 1,
    })[0];

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
