// you can also use [state, setState] = React.useState({joke: "",});
import React, { useState } from "react";
import axios from "../../utils/axios";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SaveIcon from '@material-ui/icons/Save';
//import { ThemeContextConsumer } from "../../utils/UserContextProvider";
import MyContext from '../../utils/Context'
// import axios from 'axios'



function VideoSidebar({ url, likes, shares, messages, save, screenName }) {

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState({
    results: []
  });




  var handleClick = (url) => {

    console.log('this is the url for the vid u wanna save!!!', screenName)
    // axios.post(`http://localhost:9000/api/addSaved/v1/vid/`, { url: url })
    axios.post(`api/addSaved/v1/vid/`, { url: url })
  }
  //,{screenName: screenName}



  return (


    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
            <FavoriteBorderIcon
              fontSize="large"
              onClick={(e) => setLiked(true)}
            />
          )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="videoSidebar_button">
        <SaveIcon onClick={() => { handleClick(url) }} fontSize="large" />
        <p>{save}</p>
      </div>

      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>

      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>






  )




}

export default VideoSidebar;
