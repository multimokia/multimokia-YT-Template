import { random, useCurrentFrame, useVideoConfig } from "remotion";
import { AudioVisualizer } from "./AudioVisualizer";
import music from "./music.mp3";

import wingBottomLeft from "./img/wing_bottomleft.png";
import curtains from "./img/curtains.png";

import './main.css';
import { VideoTitleSubtitle } from "./TitleSubtitle";
import { MokiChibiHop } from "./MokiChibiHop";
import { FadeInOut } from "./FadeInOut";
import { useMemo } from "react";

// Function to generate random number
function randomNumber(min:number, max:number) {
  return (Math.random() * (max - min) + min);
}

const amplitude = 3;
const innerCoeffX = 4; //randomNumber(1,10);
const finalCoeffX = 0.2; //randomNumber(-1,1);

const innerCoeffY = 6;//randomNumber(1,10);
const finalCoeffY = -0.5;//randomNumber(-1,1);

const slowRate = 7;

export const MyComposition = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const xOffset = amplitude * Math.sin(innerCoeffX * Math.cosh(finalCoeffX * Math.sin(frame/(fps*slowRate))));
  const yOffset = amplitude * Math.cos(innerCoeffY * Math.sinh(finalCoeffY * Math.cos(frame/(fps*slowRate))));

  return (
    <div
      style={{
        backgroundImage: `url(${curtains})`,
        backgroundAttachment: "fixed",
        backgroundSize: "400%",
        backgroundPositionX: `${95 + xOffset}%`,
        backgroundPositionY: `${40 + yOffset}%`,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <FadeInOut fadeLength={2} />
      <VideoTitleSubtitle
        title="Starbound - Planetarium"
        subtitle="Curtis Schwitzer | Arranged by: Michael D'mello"
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
          boxShadow: "0px 0px 15px 15px rgba(0,0,0,0.9)",
        }}
      >
      </div>
      <div
        style={{
          position: 'absolute',
          top: '-145%', //NOTE: The triangle wing height is 26% of the viewport height
          right: '72%',
          color: 'gold',
          transform: `rotate(105.8deg)`,
          width: "1000px"
        }}
      >
        <AudioVisualizer source={music} color="gold" rotate={"105.8deg"}/>
      </div>

      <MokiChibiHop jumpHeight={50}/>
    </div>
  );
};
