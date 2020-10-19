import React from "react";
import "../components/Landing/Landing.css";
import 'bootstrap/dist/css/bootstrap.css';
import LandingNav from "../components/Navs/LandingNav"
import HeaderHero from "../components/Images/HeaderHero.png"
import Footer from "../components/Footer/Footer"

function Landing () {
    return (
        <div>
            <LandingNav/>
            <div className="container" id="Hero">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <h2>Opening text here</h2>
                        <h3>and the rest of the tag line here</h3>
                    </div>
                    <div className="col-md-8 text-center my-auto">
                        <img src={HeaderHero} id="HeaderHero" alt="A skater, a dog walker in heels, and two phone users walking out of a large phone."/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing;