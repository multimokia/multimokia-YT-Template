import { Composition, staticFile } from 'remotion';
import {MyComposition} from './Composition';
import { useAudioData } from "@remotion/media-utils";

const AUDIO_TRACK = require(`../public/${process.env.REMOTION_AUDIO_TRACK}.mp3`);
const SECONDS_END_OFFSET = parseInt(process.env.REMOTION_END_OFFSET || "") || 0;
export const RemotionVideo: React.FC = () => {
    if (!AUDIO_TRACK) {
        return null;
    }

    const fps = 30;
    const audioData = useAudioData(AUDIO_TRACK);

    if (!audioData) {
        return null;
    }

    return (
        <>
            <Composition
                id="Empty"
                component={MyComposition}
                durationInFrames={Math.ceil(audioData.durationInSeconds) * fps + (SECONDS_END_OFFSET * fps)}
                fps={fps}
                width={2560}
                height={1440}
            />
        </>
    );
};
