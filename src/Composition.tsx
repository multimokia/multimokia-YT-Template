/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @remotion/warn-native-media-tag */
import { random, useCurrentFrame, useVideoConfig, staticFile } from "remotion";
import { AudioVisualizer } from "./AudioVisualizer";
import styled from 'styled-components'
import wingBottomLeft from "./img/wing_bottomleft.png";
import curtains from "./img/curtains.png";

import './main.css';
import { VideoTitleSubtitle } from "./TitleSubtitle";
import { MokiChibiHop } from "./MokiChibiHop";
import { FadeInOut } from "./FadeInOut";
import { NotifModal } from "./NotifModal";

import patreonLogo from "./img/patreon.png";

const VIDEO_TITLE = process.env.REMOTION_TITLE || "";
const VIDEO_SUBTITLE = process.env.REMOTION_SUBTITLE || "";
const VIDEO_SUBTEXT = process.env.REMOTION_SUBTEXT || "";

const AUDIO_TRACK = require(`../public/${process.env.REMOTION_AUDIO_TRACK}.mp3`);

// Function to generate random number
function randomNumber(seed: number, min: number, max: number) {
  return (random(seed) * (max - min) + min);
}

const amplitude = 10;
const innerCoeffX = 4; //randomNumber(1,10);
const finalCoeffX = 0.2; //randomNumber(-1,1);

const innerCoeffY = 6;//randomNumber(1,10);
const finalCoeffY = -0.5;//randomNumber(-1,1);

const slowRate = 7;


const BackgroundContainer = styled.div`
width:100%;
height:100%;
background-Size:400%;
background-position: right 10% center;
background-Image:url(${curtains});
`;

export const MyComposition = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const xOffset = amplitude * Math.sin(innerCoeffX * Math.cosh(finalCoeffX * Math.sin(frame / (fps * slowRate))));
    const yOffset = (amplitude / 5) * Math.cos(innerCoeffY * Math.sinh(finalCoeffY * Math.cos(frame / (fps * slowRate))));

    return (
        <>
            <BackgroundContainer
                style={{
                    backgroundPosition: `right ${20 + xOffset}% bottom ${60 + yOffset}%`,
                }}
            />
            <FadeInOut fadeLength={2} />
            <VideoTitleSubtitle
                title={VIDEO_TITLE}
                subtitle={VIDEO_SUBTITLE}
                minWidth="50%"
            />
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
                    boxShadow: "0px 0px 7px 7px rgba(0,0,0,0.9)",
                    backdropFilter: "blur(20px)",
                }}
            />
            <h1
                style={{
                    position: "absolute",
                    bottom: "20%",
                    fontSize: "500%",
                    fontFamily: "Poppins",
                    color: "gold",
                    marginLeft: "5%",
                    textShadow: "0px 0px 15px rgba(0,0,0,0.9)",
                }}
            >{VIDEO_SUBTEXT}
            </h1>
            <div
                style={{
                    position: 'absolute',
                    top: '-145%',
                    right: '72%',
                    color: 'gold',
                    transform: `rotate(105.8deg)`,
                    width: "1000px"
                }}
            >
                <AudioVisualizer source={AUDIO_TRACK} color="gold" rotate="105.8deg" />
            </div>
            <MokiChibiHop jumpHeight={200} />

            {/* <NotifModal title="Like what I do?">
                <div
                    style={{
                        width: "15%",
                        float: "left",
                        marginLeft: "5%",
                        justifyContent: "right",
                        verticalAlign: "middle",
                    }}
                >
                    <img src={patreonLogo} style={{maxWidth: "200px"}}/>
                </div>
                <div
                    style={{
                        width: "80%",
                        height: "100%",
                        float: "right",
                        verticalAlign: "middle",
                        padding: "2%",
                    }}
                >
                    <small style={{float: "right"}}>{"Consider dropping by at patreon.com/multimokia"}</small>
                </div>
            </NotifModal> */}
            <NotifModal title="Enjoying the music?">
                <div
                    style={{
                        width: "30%",
                        float: "left",
                        paddingTop: "3%",
                        marginLeft: "3%",
                        justifyContent: "right",
                        verticalAlign: "middle",
                    }}
                >
                    <div
                        style={{
                            width: "85%",
                            height: "15%",
                            background: "red",
                            borderRadius: "20px",
                            color: "white",
                            padding: "2px / 0px",
                        }}
                    >
                        <strong>{"subscribe"}</strong>
                    </div>
                </div>
                <div
                    style={{
                        width: "67%",
                        height: "100%",
                        float: "right",
                        verticalAlign: "middle",
                        padding: "2%",
                    }}
                >
                    <small style={{float: "right"}}>{"Please consider leaving a like and subscribing."}</small>
                </div>
            </NotifModal>
        </>
    );
};
