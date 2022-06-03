import { useCurrentFrame, useVideoConfig, staticFile } from "remotion";
import { useAudioData, getWaveformPortion, visualizeAudio } from "@remotion/media-utils";
import mokismile from "./img/mokichan_smile.png";

const CLICK_TRACK = require(`../public/${process.env.REMOTION_CLICK_TRACK}.mp3`);
const CLICK_TRACK_AMPLITUDE_THRESHOLD = 0.02;
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

    let _amplitude = getWaveformPortion({
        audioData,
        startTimeInSeconds: frame/fps,
        numberOfSamples: 8,
        durationInSeconds: 1.35,
    });

    let _amplitudechecker = visualizeAudio({
        fps,
        frame,
        audioData,
        numberOfSamples: 4,
        smoothing: true
    });
    console.log(_amplitude);

    let tot = 0;
    let avgamplitude = 0;
    _amplitude.forEach(a => {tot += a.amplitude});
    _amplitudechecker.forEach(a => {avgamplitude += a});

    const isNonZeroAmplitude = true//avgamplitude >= CLICK_TRACK_AMPLITUDE_THRESHOLD
    const amplitude = isNonZeroAmplitude ? (tot / _amplitude.length) : 0.0;
    const baseHeight = isNonZeroAmplitude ? (jumpHeight / 2) : 20;

    console.log(amplitude);
    return (
        <div>
            <img
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
