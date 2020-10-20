import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { LoginButton } from "../Landing/style";
import "./ProfileNav.css";
import 'bootstrap/dist/css/bootstrap.css';
import VideoUploadModal from "../VideoUploadModal/VideoUploadModal";
import user from "../Images/usernomatch.png"


function ProfileNav() {
    const [show, setShow] = useState(false);



    return (
        <div className="profileNav">
            <div className="vl"></div>
            <div className="words">
                <img className="noMatchUser" src={user} alt="No Match User Pic"></img>
                <h6>Buzz Aldrin</h6>
                <br></br>
                <p>user: rocketman212</p>
                <p>email: buzz@ToDaMoon.com</p>
            </div>
            <br></br>
            <br></br>
            <div className="profileNavButtons">
                <LoginButton size="lg" onClick={() => setShow(true)}>
                    Upload
                </LoginButton>
                <VideoUploadModal show={show} setShow={setShow} />
                <br></br>
                <br></br>

            </div>

        </div>
    )
}

export default ProfileNav;




