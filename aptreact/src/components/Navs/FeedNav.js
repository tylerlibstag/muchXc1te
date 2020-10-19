import React, { useState } from "react";
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.css';
import SignUpLoginModal from "../SignUpLoginModal/SignUpLoginModal";
import { LoginButton } from "../Landing/style";
import Boroughd from "../Images/boroughd.png";
import { Link } from 'react-router-dom';

const boroughd = <img src={Boroughd} id="HeaderHero" alt="boroughd"></img>

function FeedNav() {
    const [show, setShow] = useState(false);


    return (
        <div>
            <nav className="Nav">
                <div className="row">
                    <div className="col-2">
                        {/* <img src={Boroughd} href="/" id="HeaderHero" alt="boroughd"></img> */}
                        <Link to="/">{boroughd}</Link>
                    </div>
                    <div className="col-7"></div>
                    <div className="col-3" >
                        <LoginButton size="lg" onClick={() => setShow(true)}>
                            Login
                        </LoginButton>
                        <SignUpLoginModal show={show} setShow={setShow} />
                        <a href="/">Logout</a>
                        {/* This needs to include logout auths for both twitter and passport */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default FeedNav;