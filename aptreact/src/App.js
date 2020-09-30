import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./components/Newsfeed/Video";

function App() {
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
    <div className="app">
      <h1>Real Estate Video Site test</h1>
      <div className="app_videos">
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

export default App;
