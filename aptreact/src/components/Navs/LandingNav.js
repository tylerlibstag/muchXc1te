import React, { useState } from "react";
import "./Nav.css";
import "../Landing/style";
import 'bootstrap/dist/css/bootstrap.css';
import SignUpLoginModal from "../SignUpLoginModal/SignUpLoginModal";
import { LoginButton } from "../Landing/style";

function LandingNav() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="Nav">
            <div className="row">
                    <div className="col-2">
                        <a href="/">Home</a>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-4">
                    <LoginButton size="lg" onClick={() => setShow(true)}>
                                Login or Sign Up
                        </LoginButton>
                     <SignUpLoginModal show={show} setShow={setShow} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingNav;