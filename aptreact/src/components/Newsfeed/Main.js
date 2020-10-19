import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import "./Main.css";
import Video from "./Video";

function Main() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("api/videoRoute/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);


  console.log(videos);

  return (
    <div className="main">
      <div className="main_videos">
        {videos.map(
          ({ url, screenName, description, address1, likes, messages, shares }) => (
            <Video
              url={url}
              screenName={screenName}
              description={description}
              address1={address1}
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
