import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ screenName, description, address1 }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h4>{screenName}</h4>
        <p>{address1}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{description}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
