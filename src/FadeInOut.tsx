import { useCurrentFrame, useVideoConfig } from "remotion";

export const FadeInOut: React.FC<{fadeLength:number}> = ({children, fadeLength}) => {
    const { fps, durationInFrames } = useVideoConfig();
    const frame = useCurrentFrame();
    const fadeDurationInFrames = fadeLength * fps;

    let opacity = 0;
    if (frame < fadeDurationInFrames) {
        opacity = 100 - ((frame / fadeDurationInFrames) * 100);
        console.log(opacity);
    }
    else if (frame > durationInFrames - fadeDurationInFrames) {
        opacity = 100 - (((durationInFrames - frame) / fadeDurationInFrames) * 100);
    }

    return (
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                opacity: `${opacity}%`,
                zIndex: 1000,
            }}
        >
        </div>
    );
}
