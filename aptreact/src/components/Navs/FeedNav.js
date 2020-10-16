import React, { useState } from "react";
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.css';
import VideoUploadModal from "../VideoUploadModal/VideoUploadModal";
import { LoginButton } from "../Landing/style";

function FeedNav() {
    const [show, setShow] = useState(false);


    return (
        <div>
            <nav className="Nav">
                <div className="row">
                    <div className="col-2">
                        <a href="/">Home</a>
                    </div>
                    <div className="col-7"></div>
                    <div className="col-3" >
                        <LoginButton size="lg" onClick={() => setShow(true)}>
                            Upload Video
                        </LoginButton>
                        <VideoUploadModal show={show} setShow={setShow} />
                        <a href="/">Logout</a>
                        {/* This needs to include logout auths for both twitter and passport */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default FeedNav;