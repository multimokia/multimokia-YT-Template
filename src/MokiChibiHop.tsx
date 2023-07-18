import { Img, useCurrentFrame, useVideoConfig } from "remotion";
import { useAudioData, getWaveformPortion, visualizeAudio } from "@remotion/media-utils";
import mokismile from "./img/mokichan_smile.png";

// const CLICK_TRACK = require(`../public/${process.env.REMOTION_CLICK_TRACK}.mp3`);
const CLICK_TRACK_AMPLITUDE_THRESHOLD = 0.0003;
export const MokiChibiHop: React.FC<{jumpHeight:number}> = ({jumpHeight}) => {
    // if (!CLICK_TRACK) {
    //     return null;
    // }

    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    // const audioData = useAudioData(CLICK_TRACK);

    // if (!audioData) {
    //   return null;
    // }

    // let _amplitude = getWaveformPortion({
    //     audioData,
    //     startTimeInSeconds: frame/fps,
    //     numberOfSamples: 4,
    //     durationInSeconds: 0.6666,
    // });

    // let _amplitudechecker = visualizeAudio({
    //     fps,
    //     frame,
    //     audioData,
    //     numberOfSamples: 4,
    //     smoothing: true
    // });

    // const tot = 0;
    // let avgamplitude = 0;
    // _amplitude.forEach(a => {tot += a.amplitude});
    // _amplitudechecker.forEach(a => {avgamplitude += a});

    // const isNonZeroAmplitude = false; // avgamplitude >= CLICK_TRACK_AMPLITUDE_THRESHOLD
    const amplitude = 0.0 // isNonZeroAmplitude ? (tot / _amplitude.length) : 0.0;
    const baseHeight = 20 // isNonZeroAmplitude ? (jumpHeight / 2) : 20;

    return (
        <div>
            <Img
                src={mokismile}
                style={{
                    width: "14%",
                    position: "absolute",
                    bottom: `${-baseHeight + amplitude * jumpHeight}px`,
                    right: "-50px",
                }}
            />
        </div>
    )
}
