import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, screenName, description, apt, likes, messages, shares }) {
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
      <video
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        src={url}
      ></video>

      <VideoFooter screenName={screenName} description={description} apt={apt} />

      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
