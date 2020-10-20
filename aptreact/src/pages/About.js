import React from "react";
import "../components/NoMatch/NoMatch.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

//Images
import HeaderBackground from "../components/Images/HeaderBackground.png";
import Boroughd from "../components/Images/boroughd.png";
import muchXc1te from "../components/Images/muchXc1te.png";
import github from "../components/Images/githubicon.png";
import linkedin from "../components/Images/linkedinicon.png";

const boroughd = <img src={Boroughd} id="HeaderHero" alt="boroughd" style={{ marginLeft: '20%'}}></img>

function About() {
    return (
        <div>
            <div className="container" id="Hero" style={{ backgroundImage: `url(${HeaderBackground})` }}>
                <div className="row">
                    <div className="col-2">
                        <Link to="/">{boroughd}</Link>
                    </div>
                    <div className="col-10"></div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <img src={muchXc1te} id="muchXc1te" style={{ marginLeft: '15%'}}/>
                    </div>
                    <div className="col-7 my-auto justify-content-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">
                                    <h2>Kiki Hanson</h2>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2">
                                    <a href="https://github.com/microxgleek94"><img src={github} id="icon"/></a>
                                </div>
                                <div className="col-2">
                                    <a href="https://www.linkedin.com/in/keianahanson/"><img src={linkedin} id="icon"/></a>
                                </div>
                                <div className="col-4"></div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-2">
                                    <h2>Susan Cagle</h2>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2">
                                    <a href="https://github.com/BubblyRobot"><img src={github} id="icon"/></a>
                                </div>
                                <div className="col-2">
                                    <a href="https://www.linkedin.com/in/susancagle/"><img src={linkedin} id="icon"/></a>
                                </div>
                                <div className="col-4"></div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-2">
                                    <h2>Dominika Perkowska</h2>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2">
                                    <a href="https://github.com/domdotcom"><img src={github} id="icon"/></a>
                                </div>
                                <div className="col-2">
                                    <a href="https://www.linkedin.com/in/dominika-perkowska"><img src={linkedin} id="icon"/></a>
                                </div>
                                <div className="col-4"></div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-2">
                                    <h2>Mackenzie Clark</h2>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2">
                                    <a href="https://github.com/mackenzieraeclark"><img src={github} id="icon"/></a>
                                </div>
                                <div className="col-2">
                                    <a href="https://www.linkedin.com/in/mackenzieraeclark/"><img src={linkedin} id="icon"/></a>
                                </div>
                                <div className="col-4"></div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-2">
                                    <h2>Rocco Losito</h2>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2">
                                    <a href="https://github.com/roccolosito"><img src={github} id="icon"/></a>
                                </div>
                                <div className="col-2">
                                    <a href="https://www.linkedin.com/in/roccolosito/"><img src={linkedin} id="icon"/></a>
                                </div>
                                <div className="col-4"></div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-2">
                                    <h2>Tyler Libstag</h2>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2">
                                    <a href="https://github.com/tylerlibstag"><img src={github} id="icon"/></a>
                                </div>
                                <div className="col-2">
                                    <a href="https://www.linkedin.com/in/tyler-libstag-461b00124/"><img src={linkedin} id="icon"/></a>
                                </div>
                                <div className="col-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;