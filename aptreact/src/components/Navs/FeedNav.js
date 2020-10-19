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
                        <a href="/Newsfeed">Home</a>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-4">
                        <LoginButton size="lg" onClick={() => setShow(true)}>
                            Upload Video
                        </LoginButton>
                        <VideoUploadModal show={show} setShow={setShow} />
                        <a href="/">Logout</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default FeedNav;