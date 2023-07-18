export const VideoTitleSubtitle: React.FC<{title:string,subtitle:string,minWidth:string}> = ({title, subtitle, minWidth}) => {
    return (
        <div
            style={{
                position: "absolute",
                top: "10%",
                background: "rgba(0,0,0,0.6)",
                boxShadow: "0px 0px 7px 7px rgba(0,0,0,0.8)",
                fontFamily: "Poppins",
                color: "gold",
                fontSize: "200%",
                textAlign: "left",
                paddingRight: "3%",
                paddingTop: "0.5%",
                paddingBottom: "0.5%",
                minWidth,
                backdropFilter: "blur(20px)",
                borderRadius: "0 5px 5px 0",
            }}
        >
        <h1
            dangerouslySetInnerHTML={{__html:title}}
            style={{margin: 0, paddingLeft: "5%"}}
        />
        <hr
            style={{
                borderTop: "5px solid gold",
                paddingLeft: "5%",
                paddingRight: "5%",
                marginLeft: "5%",
                boxShadow: "0 1px 5px rgba(0, 0, 0, 0.9), 0 1px 5px rgba(0, 0, 0, 0.9);",
            }}
        />
        <h4
            dangerouslySetInnerHTML={{__html:subtitle}}
            style={{margin: 0, paddingLeft: "5%"}}
        />
        </div>
    );
}
