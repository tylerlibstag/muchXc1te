import React, { useState } from "react";
import "../components/Landing/Landing.css";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/Footer/Footer"
import { Link } from 'react-router-dom';

// Images
import HeaderHero from "../components/Images/HeaderHero.png"
import HeaderBackground from "../components/Images/HeaderBackground.png"
import Boroughd from "../components/Images/boroughd.png";
import AptHero from "../components/Images/AptHero.png";
import banner1 from "../components/Images/banner1.png";
import SignUpHero from "../components/Images/SignUpHero.png";
import userDriver from "../components/Images/userDriver.png";

// Login Imports
import SignUpLoginModal from "../components/SignUpLoginModal/SignUpLoginModal";
import { LoginButton } from "../components/Landing/style";


const boroughd = <img src={Boroughd} id="HeaderHero" alt="boroughd" style={{ marginLeft: '12%'}}></img>

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
                        <h2>A community-driven solution to finding your next home.</h2>
                    </div>
                    <div className="col-md-7 text-center my-auto">
                        <img src={HeaderHero} id="HeaderHero"/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <img src={SignUpHero} id="HeaderHero"/>
                    </div>
                    <div className="col-5 text-center my-auto">
                        <h3>View videos of apartments in the areas you are looking to move to uploaded by lookers just like you.</h3>
                    </div>
                </div>
            </div>

            <div className="container" id="Hero" style={{ backgroundImage: `url(${banner1})`}}>
                <div className="row">
                        
                        <div className="col-md-6 text-center my-auto">
                            <img src={userDriver} id="HeaderHero"/>
                        </div>
                        <div className="col-md-6 my-auto" id="HeaderText2">
                            <p>Experts recommend offsetting the hinderances of apartment hunting during Covid-19 by asking friends for insights, preparing to rent site-unseen, and utilizing virtual tours. Current online real estate & rental platforms haven't caught up fast enough with these needs.</p><br/>
                            <p> Boroughed offers a centralized solution that addresses all three: a user-driven experience to finding your perfect home during unprecedented times.</p>
                        </div>
                </div>
            </div>

            <div className="row" style={{ marginTop: '10%'}}>
                    <div className="col-md-6 my-auto" id="HeaderText">
                        <img src={AptHero} id="AptHero"/>
                    </div>
                    <div className="col-md-6 text-center my-auto">
                        <h2>We'll help you find a space that has everything you need to live the way you want.</h2>
                    </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Landing;