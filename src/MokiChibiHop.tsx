import { Audio, useCurrentFrame, useVideoConfig } from "remotion";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import music from "./music.mp3";

import mokismile from "./img/mokichan_smile.png";

export const MokiChibiHop = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const audioData = useAudioData(music);

    if (!audioData) {
      return null;
    }

    return (
        <div>
            <img
                src={mokismile}
                style={{
                    width: "14%",
                    position: "absolute",
                    bottom: "-17px",
                    right: "-50px",
                }}
            />
        </div>
    )
}
