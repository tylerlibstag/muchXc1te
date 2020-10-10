import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import "./Main.css";
import Video from "./Video";

function Main() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);
  console.log(videos);

  return (
    //BEM naming convention
    <div className="main">
      <div className="main_videos">
        {videos.map(
          ({ url, channel, description, apt, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              apt={apt}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Main;
