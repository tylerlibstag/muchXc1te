import React, { useState } from "react";
import "../components/Landing/Landing.css";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/Footer/Footer"
import { Link } from 'react-router-dom';

// Images
import HeaderHero from "../components/Images/HeaderHero.png"
import HeaderBackground from "../components/Images/HeaderBackground.png"
import Boroughd from "../components/Images/boroughd.png";

// Login Imports
import SignUpLoginModal from "../components/SignUpLoginModal/SignUpLoginModal";
import { LoginButton } from "../components/Landing/style";


const boroughd = <img src={Boroughd} id="HeaderHero" alt="boroughd"></img>

function Landing () {

    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="container" id="Hero" style={{ backgroundImage: `url(${HeaderBackground})`}}>
                <div className="row">
                    <div className="col-2">
                        <Link to="/">{boroughd}</Link>
                    </div>
                    <div className="col-8"></div>
                    <div className="col-2">
                        <LoginButton size="lg" onClick={() => setShow(true)}>
                                    Login
                            </LoginButton>
                        <SignUpLoginModal show={show} setShow={setShow} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 my-auto" id="HeaderText">
                        <h2>Opening text here</h2>
                        <h3>and the rest of the tag line here</h3>
                    </div>
                    <div className="col-md-7 text-center my-auto">
                        <img src={HeaderHero} id="HeaderHero" alt="A skater, a dog walker in heels, and two phone users walking out of a large phone."/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing;