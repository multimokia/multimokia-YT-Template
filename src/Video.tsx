import {Composition} from 'remotion';
import {MyComposition} from './Composition';

import music from "./music.mp3";
import { useAudioData } from "@remotion/media-utils";

export const RemotionVideo: React.FC = () => {
    const fps = 60;
    const audioData = useAudioData(music);

    if (!audioData) {
        return null;
    }

	return (
		<>
			<Composition
				id="Empty"
				component={MyComposition}
				durationInFrames={fps * 30}//{Math.ceil(audioData.durationInSeconds) * fps}
				fps={fps}
				width={2560}
				height={1440}
			/>
		</>
	);
};
