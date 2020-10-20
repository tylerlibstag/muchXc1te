import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import HomeIcon from '@material-ui/icons/Home';
import Ticker from "react-ticker";
import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined';

function VideoFooter({ screenName, description, address1 }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h4>{screenName}</h4>
        <p>{address1}</p>
        <div className="videoFooter_ticker">
          <HomeIcon className="videoFooter_icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{description}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <AspectRatioOutlinedIcon fontSize="large" className="expandIcon" />
    </div>
  );
}

export default VideoFooter;
