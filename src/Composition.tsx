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

background-Size: 150%;
background-Image:url(https://i.redd.it/8ht6k24uri231.jpg);
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
                    backgroundPosition: `right ${75 + xOffset}% bottom ${60 + yOffset}%`// `right ${20 + xOffset}% bottom ${60 + yOffset}%`,
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
            <NotifModal title="Enjoying the music?" startPercent={2}>
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

            {/* Briar */}
            <NotifModal title="Travellers:" startPercent={20} secondsShown={5}>
                <div>
                    <div
                        style={{
                            width: "60%",
                            height: "100%",
                            float: "left",
                            marginLeft: "5%",
                            justifyContent: "left",
                            textAlign: "left",
                            verticalAlign: "middle",
                        }}
                    >
                        <h5 style={{"fontSize": "100%"}}>Briar Young</h5>
                    </div>
                    <div
                        style={{
                            width: "35%",
                            height: "100%",
                            float: "right",
                            verticalAlign: "middle",
                            textAlign: "left"
                        }}
                    >
                        <ul>
                            <li>Mandolin</li>
                            <li>Vocals</li>
                        </ul>
                    </div>
                </div>
                <hr style={{width: "100%"}}/>
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <svg
                        xmlns="<http://www.w3.org/2000/svg"
                        width="55"
                        height="55"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        style={{
                            verticalAlign: "-0.225em"
                        }}
                    >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                    <small><b>{" @briar_nyako_mee"}</b></small>
                </div>
            </NotifModal>

            {/* Unbroken */}
            <NotifModal title="Travellers:" startPercent={25} secondsShown={5}>
                <div>
                    <div
                        style={{
                            width: "60%",
                            height: "100%",
                            float: "left",
                            marginLeft: "5%",
                            justifyContent: "left",
                            textAlign: "left",
                            verticalAlign: "middle",
                        }}
                    >
                        <h5 style={{"fontSize": "100%"}}>Booplicate</h5>
                    </div>
                    <div
                        style={{
                            width: "35%",
                            height: "100%",
                            float: "right",
                            verticalAlign: "middle",
                            textAlign: "left",
                            paddingTop: "3%"
                        }}
                    >
                        <ul>
                            <li>Piano</li>
                        </ul>
                    </div>
                </div>
            </NotifModal>

            {/* Lewn */}
            <NotifModal title="Travellers:" startPercent={30} secondsShown={5}>
                <div>
                    <div
                        style={{
                            width: "60%",
                            height: "100%",
                            float: "left",
                            marginLeft: "5%",
                            justifyContent: "center",
                            textAlign: "left",
                            verticalAlign: "middle",
                        }}
                    >
                        <h5 style={{"fontSize": "100%"}}>Lewnatic</h5>
                    </div>
                    <div
                        style={{
                            width: "35%",
                            height: "100%",
                            float: "right",
                            verticalAlign: "middle",
                            textAlign: "left",
                            paddingTop: "3%"
                        }}
                    >
                        <ul>
                            <li>Vocals</li>
                        </ul>
                    </div>
                </div>
                <hr style={{width: "100%"}}/>
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <div
                        style={{
                            float: "left",
                            width: "45%",
                        }}
                    >
                        <svg
                            xmlns="<http://www.w3.org/2000/svg>"
                            width="55"
                            height="55"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            style={{
                                verticalAlign: "-0.225em"
                            }}
                        >
                            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                        </svg>
                        <small><b>{" lewn_atic"}</b></small>
                    </div>
                    <div
                        style={{
                            float: "right",
                            width: "45%",
                            verticalAlign: "middle",
                        }}
                    >
                        <svg
                            xmlns="<http://www.w3.org/2000/svg>"
                            viewBox="0 0 16 16"
                            width="55"
                            height="55"
                            fill="currentColor"
                            style={{
                                verticalAlign: "-0.225em"
                            }}
                        >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                        <small><b>{" @lewn_atic"}</b></small>
                    </div>
                </div>
            </NotifModal>

            {/* Awpie */}
            <NotifModal title="Travellers:" startPercent={35} secondsShown={5}>
                <div>
                    <div
                        style={{
                            width: "60%",
                            height: "100%",
                            float: "left",
                            marginLeft: "5%",
                            justifyContent: "left",
                            textAlign: "left",
                            verticalAlign: "middle",
                        }}
                    >
                        <h5 style={{"fontSize": "100%"}}>Awpie Redacted</h5>
                    </div>
                    <div
                        style={{
                            width: "35%",
                            height: "100%",
                            float: "right",
                            verticalAlign: "middle",
                            textAlign: "left",
                            paddingTop: "3%"
                        }}
                    >
                        <ul>
                            <li>Theremin</li>
                        </ul>
                    </div>
                </div>
                <hr style={{width: "100%"}}/>
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <div
                        style={{
                            float: "left",
                            width: "45%"
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 260 260"
                            width="55"
                            height="55"
                            fill="currentColor"
                            style={{
                                verticalAlign: "-0.225em"
                            }}
                        >
                            <path d="M210.857,197.545c-1.616-0.872-3.584-0.787-5.119,0.223c-11.62,7.638-23.4,11.511-35.016,11.511
                            c-6.242,0-11.605-1.394-16.416-4.275c-3.27-1.936-6.308-5.321-7.397-8.263c-1.057-2.797-1.045-10.327-1.029-20.748l0.005-63.543
                            h52.795c2.762,0,5-2.239,5-5V62.802c0-2.761-2.238-5-5-5h-52.795V5c0-2.761-2.238-5-5-5h-35.566c-2.528,0-4.658,1.887-4.964,4.397
                            c-1.486,12.229-4.258,22.383-8.247,30.196c-3.89,7.7-9.153,14.401-15.651,19.925c-5.206,4.44-14.118,8.736-26.49,12.769
                            c-2.058,0.671-3.45,2.589-3.45,4.754v35.41c0,2.761,2.238,5,5,5h28.953v82.666c0,12.181,1.292,21.347,3.952,28.026
                            c2.71,6.785,7.521,13.174,14.303,18.993c6.671,5.716,14.79,10.187,24.158,13.298c9.082,2.962,16.315,4.567,28.511,4.567
                            c10.31,0,20.137-1.069,29.213-3.179c8.921-2.082,19.017-5.761,30.008-10.934c1.753-0.825,2.871-2.587,2.871-4.524v-39.417
                            C213.484,200.108,212.476,198.418,210.857,197.545z"/>
                        </svg>
                        <small><b>{" actingwithportals"}</b></small>
                    </div>
                    <div
                        style={{
                            float: "right",
                            width: "45%",
                            verticalAlign: "middle",
                        }}
                    >
                        <svg
                            xmlns="<http://www.w3.org/2000/svg>"
                            viewBox="0 0 16 16"
                            width="55"
                            height="55"
                            fill="currentColor"
                            style={{
                                verticalAlign: "-0.225em"
                            }}
                        >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                        <small><b>{" @cecil_redacted"}</b></small>
                    </div>
                </div>
            </NotifModal>

            {/* Aceiest Artist */}
            <NotifModal title="Travellers:" startPercent={40} secondsShown={5}>
                <div>
                    <div
                        style={{
                            width: "60%",
                            height: "100%",
                            float: "left",
                            marginLeft: "5%",
                            justifyContent: "left",
                            textAlign: "left",
                            verticalAlign: "middle",
                        }}
                    >
                        <h5 style={{"fontSize": "100%"}}>AceiestArtist</h5>
                    </div>
                    <div
                        style={{
                            width: "35%",
                            height: "100%",
                            float: "right",
                            verticalAlign: "middle",
                            textAlign: "left",
                            paddingTop: "3%"
                        }}
                    >
                        <ul>
                            <li>Cello</li>
                        </ul>
                    </div>
                </div>
                <hr style={{width: "100%"}}/>
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <div
                        style={{
                            float: "left",
                            width: "45%"
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 260 260"
                            width="55"
                            height="55"
                            fill="currentColor"
                            style={{
                                verticalAlign: "-0.225em"
                            }}
                        >
                            <path d="M210.857,197.545c-1.616-0.872-3.584-0.787-5.119,0.223c-11.62,7.638-23.4,11.511-35.016,11.511
                            c-6.242,0-11.605-1.394-16.416-4.275c-3.27-1.936-6.308-5.321-7.397-8.263c-1.057-2.797-1.045-10.327-1.029-20.748l0.005-63.543
                            h52.795c2.762,0,5-2.239,5-5V62.802c0-2.761-2.238-5-5-5h-52.795V5c0-2.761-2.238-5-5-5h-35.566c-2.528,0-4.658,1.887-4.964,4.397
                            c-1.486,12.229-4.258,22.383-8.247,30.196c-3.89,7.7-9.153,14.401-15.651,19.925c-5.206,4.44-14.118,8.736-26.49,12.769
                            c-2.058,0.671-3.45,2.589-3.45,4.754v35.41c0,2.761,2.238,5,5,5h28.953v82.666c0,12.181,1.292,21.347,3.952,28.026
                            c2.71,6.785,7.521,13.174,14.303,18.993c6.671,5.716,14.79,10.187,24.158,13.298c9.082,2.962,16.315,4.567,28.511,4.567
                            c10.31,0,20.137-1.069,29.213-3.179c8.921-2.082,19.017-5.761,30.008-10.934c1.753-0.825,2.871-2.587,2.871-4.524v-39.417
                            C213.484,200.108,212.476,198.418,210.857,197.545z"/>
                        </svg>
                        <small><b>{" AceiestArtist"}</b></small>
                    </div>
                    <div
                        style={{
                            float: "right",
                            width: "45%",
                            verticalAlign: "middle",
                        }}
                    >
                        <svg
                            xmlns="<http://www.w3.org/2000/svg>"
                            viewBox="0 0 16 16"
                            width="55"
                            height="55"
                            fill="currentColor"
                            style={{
                                verticalAlign: "-0.225em"
                            }}
                        >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                        <small><b>{" @AceiestArtist"}</b></small>
                    </div>
                </div>
            </NotifModal>

            {/* Me */}
            <NotifModal title="Travellers:" startPercent={45} secondsShown={5}>
                <div>
                    <div
                        style={{
                            width: "60%",
                            height: "100%",
                            float: "left",
                            marginLeft: "5%",
                            justifyContent: "left",
                            textAlign: "left",
                            verticalAlign: "middle",
                        }}
                    >
                        <h5 style={{"fontSize": "100%"}}>multimokia</h5>
                    </div>
                    <div
                        style={{
                            width: "35%",
                            height: "100%",
                            float: "right",
                            verticalAlign: "middle",
                            textAlign: "left",
                            fontSize: "70%"
                        }}
                    >
                        <ul>
                            <li>Claps/taps</li>
                            <li>Tenor Saxophone</li>
                            <li>Whistling</li>
                        </ul>
                    </div>
                </div>
                <hr style={{width: "100%"}}/>
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <div
                        style={{
                            verticalAlign: "middle",
                        }}
                    >
                        <svg
                            xmlns="<http://www.w3.org/2000/svg>"
                            viewBox="0 0 16 16"
                            width="55"
                            height="55"
                            fill="currentColor"
                            style={{
                                verticalAlign: "-0.225em"
                            }}
                        >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                        <small><b>{" @multimokia"}</b></small>
                    </div>
                </div>
            </NotifModal>
        </>
    );
};
