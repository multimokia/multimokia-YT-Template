import { AudioVisualizer } from "./AudioVisualizer";
import music from "./music.mp3";

import wingBottomLeft from "./img/wing_bottomleft.png";
import curtains from "./img/curtains.png";

import './main.css';
import { VideoTitleSubtitle } from "./TitleSubtitle";
import { MokiChibiHop } from "./MokiChibiHop";
import { FadeInOut } from "./FadeInOut";

export const MyComposition = () => {
	return (
        <div
            style={{
                backgroundImage: `url(${curtains})`,
                backgroundAttachment: "fixed",
                backgroundSize: "400%",
                backgroundPositionX: "95%",
                backgroundPositionY: "40%",
                width: "100%",
                height: "100%",
            }}
        >
            <FadeInOut fadeLength={2}/>
            <VideoTitleSubtitle
                title="This is the title"
                subtitle="Original Composer | Arranged by: Michael D'mello"
                minWidth="50%"/>

            <img
                style={{
                    position: "absolute",
                    bottom: 0,
                    zIndex: 100,
                    width: "50%",
                }}
                src={wingBottomLeft}
            />
            <img
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    zIndex: 100,
                    transform: "rotate(180deg)",
                    width: "50%"
                }}
                src={wingBottomLeft}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "25%",
                    background: "rgba(0,0,0,0.7)",
                    boxShadow: "0px 0px 15px 15px rgba(0,0,0,0.9)",
                }}
            >
            </div>
            <div
                style={{
                    transform: 'rotate(105.8deg)',
                    position: 'fixed',
                    top: '-127.5%',
                    left: '16%',
                    color: 'gold'
                }}
            >
                <AudioVisualizer source={music} color="gold" width="500px"/>
            </div>

            <MokiChibiHop/>
        </div>
    );
};
