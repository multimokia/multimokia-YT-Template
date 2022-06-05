export const VideoTitleSubtitle: React.FC<{title:string,subtitle:string,minWidth:string}> = ({children, title, subtitle, minWidth}) => {
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
                minWidth: minWidth,
                backdropFilter: "blur(20px)",
                borderRadius: "0 5px 5px 0",
            }}
        >
        <h1 style={{margin: 0, paddingLeft: "5%"}}>{title}</h1>
        <hr
            style={{
                borderTop: "5px solid gold",
                paddingLeft: "5%",
                paddingRight: "5%",
                marginLeft: "5%",
                boxShadow: "0 1px 5px rgba(0, 0, 0, 0.9), 0 1px 5px rgba(0, 0, 0, 0.9);",
            }}
        />
        <h4 style={{margin: 0, paddingLeft: "5%"}} dangerouslySetInnerHTML={{__html:subtitle}}></h4>
        </div>
    );
}
