import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./ProfileNav.css";
import 'bootstrap/dist/css/bootstrap.css';
import VideoUploadModal from "../VideoUploadModal/VideoUploadModal";
import Saved from "../Saved/Saved";
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
                            <Link to={VideoUploadModal}>
                                <Button style={{backgroundColor:"#2B89AD", margin: "2.5%", borderColor: "unset"}}>
                                    <p>Upload</p>
                                </Button>
                            </Link>
                            <br></br>
                            <br></br>
                            <Link to={Saved}>
                                <Button style={{backgroundColor:"#2B89AD", margin: "2.5%", borderColor: "unset"}}>
                                    <p>Saved</p>
                                </Button>
                            </Link>
                        </div>
            
      </div>
    )
}

export default ProfileNav;




