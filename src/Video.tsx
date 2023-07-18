import { Composition } from 'remotion';
import {MyComposition} from './Composition';
import { useAudioData } from "@remotion/media-utils";

const AUDIO_TRACK = require(`../public/${process.env.REMOTION_AUDIO_TRACK}.mp3`);
export const RemotionVideo: React.FC = () => {
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
                durationInFrames={Math.ceil(audioData.durationInSeconds) * fps}
                fps={fps}
                width={2560}
                height={1440}
            />
        </>
    );
};
