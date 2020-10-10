import React, { useState, useCallback } from "react";
import "./LookerProfile.css";
import { render } from "react-dom";
import Gallery from "react-image-video-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./photos";
import Video from "../Newsfeed/Video";

function Saved() {
  const [currentVideos, setCurrentVideos] = useState([]);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { video, index }) => {
    setCurrentVideos(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentVideos(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery Video={Video} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentVideos}
              views={Video.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default Saved;
