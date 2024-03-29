import {Img, staticFile} from 'remotion'
import { Toast, ToastContainer } from "react-bootstrap";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const NotifModal: React.FC<{ title: string, startPercent: number, secondsShown?: number }> = ({ children, title, startPercent, secondsShown = 5 }) => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();
    const startFrame = (startPercent / 100) * durationInFrames;
    const endFrame = startFrame + (secondsShown * fps);
    const fadeTimeInFrames = fps / 2; // Fade in half a second

    // To avoid running interpolate unnecessarily, we'll check if we have to at all
    if (frame < startFrame || frame > (endFrame + fadeTimeInFrames)) {
        return <></>
    }

    const opacityMax = 100;
    const blurMax = 25;

    const opacity = interpolate(
        frame,
        [
            startFrame,
            (startFrame + fadeTimeInFrames),
            endFrame,
            endFrame + fadeTimeInFrames
        ],
        [0, opacityMax, opacityMax, 0]
    );
    const blur = -blurMax * (opacity / opacityMax) + blurMax;

    return (
        <>
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: "fixed",
                    minHeight: '5%',
                    minWidth: '50%',
                    maxWidth: '50%',
                    maxHeight: '50%',
                    boxShadow: "0px 0px 7px 7px rgba(0,0,0,0.9)",
                    background: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(20px)",
                    padding: "5% / 10%",
                    float: "left",
                    bottom: "37%", // "32%",
                    right: "25%", // "15%",
                    borderRadius: "5px",
                    opacity: `${opacity}%`,
                    filter: `blur(${blur}px)`
                }}
            >
                <ToastContainer
                    className="p-3"
                    position="middle-center"
                    style={{
                        color: "gold",
                        fontFamily: "Poppins",
                        fontSize: "350%",
                        padding: "10px"
                    }}
                >
                    <Toast>
                        <Toast.Header closeButton={false} style={{}}>
                            <strong className="me-auto" style={{ marginLeft: "2%" }}>{title} </strong>
                            <hr
                                style={{
                                    // BorderTop: "3px solid gold",
                                    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.9), 0 1px 5px rgba(0, 0, 0, 0.9)",
                                }}
                            />
                        </Toast.Header>
                        <Toast.Body
                            style={{
                                textAlign: "center",
                                boxSizing: "border-box",
                                maxHeight: "10%",
                                overflow: "hidden",
                                verticalAlign: "middle",
                            }}>
                            {children}
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </>
    );
}

//     Return (
//         <div
//             style={{
//                 position: "fixed",
//                 margin: "auto",
//                 textAlign: "center",
//                 width: "45%",
//                 height: "15%",
//                 boxShadow: "0px 0px 7px 7px rgba(0,0,0,0.9)",
//                 background: "rgba(0,0,0,0.7)",
//                 backdropFilter: "blur(20px)",
//                 verticalAlign: "middle",
//                 borderRadius: "50px",
//                 overflow: "hidden",
//                 padding: "5%",
//                 marginTop: "10%",
//                 marginBottom: "10%",
//             }}
//         >
//             <h1
//                 style={{
//                     height: "50%",
//                     position: "unset",
//                     textAlign: "right",
//                     verticalAlign: "middle",
//                     fontSize: "300%",
//                     fontFamily: "Poppins",
//                     color: "gold",
//                     textShadow: "0px 0px 15px rgba(0,0,0,0.9)",
//                 }}
//             >
//                 {content}
//             </h1>
//         </div>
//     )
// }
