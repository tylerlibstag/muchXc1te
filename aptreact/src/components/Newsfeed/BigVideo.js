import React, { useRef, useState } from "react";
import "./BigVideo.css";

function BigVideo({ url }) {
    const [playing, setPlaying] = useState(false);

    const videoRef = useRef(null);
    const handleVideoPress = () => {
        // if video is playing
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        // stop it...
        // otherwise if its not playing
        // play it...
    };

    return (
        <div className="video">
            {/* <div className="top">This is stuff on the top</div> */}
            <video
                onClick={handleVideoPress}
                className="video_player"
                loop
                ref={videoRef}
                src={url}
            ></video>

            {/* <div className="bottom">This is stuff on the bottom</div> */}
        </div>
    );
}

export default BigVideo;
