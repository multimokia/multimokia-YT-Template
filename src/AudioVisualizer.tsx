import { Audio, useCurrentFrame, useVideoConfig } from "remotion";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import music from "./music.mp3";

export const AudioVisualizer: React.FC<{color?:string, source:string, rotate:string}> = (
  {children, color="white", source, rotate}
) => {
    const frame = useCurrentFrame();
    const { fps, width } = useVideoConfig();
    const audioData = useAudioData(music);

    if (!audioData) {
        return null;
    }

    const visualization = visualizeAudio({
        fps,
        frame,
        audioData,
        numberOfSamples: 256,
        smoothing: true,
    });

    // Render a bar chart for each frequency, the higher the amplitude,
    // the longer the bar
    return (
        <div
            style={{
              //transform: `rotate(${rotate})`,
              //width: width
            }}
        >
        <Audio src={source} />
        {visualization.map((v, i) => {
            return (
            <div
                style={{
                    width: 5000 * v,
                    height: 15,
                    backgroundColor: color,
                    borderRadius: '10px',
                    margin: '3px',
                }}
            />
            );
        })}
        </div>
    );
};
