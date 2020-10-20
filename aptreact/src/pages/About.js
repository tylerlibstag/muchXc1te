import React from "react";
import "../components/NoMatch/NoMatch.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';

//Images
import HeaderBackground from "../components/Images/HeaderBackground.png";
import Boroughd from "../components/Images/boroughd.png";
import muchXc1te from "../components/Images/muchXc1te.png";


const boroughd = <img src={Boroughd} id="HeaderHero" alt="boroughd" style={{ marginLeft: '20%'}}></img>

function About() {
    return (
        // This will be a fun lil graphic telling the user theres nothing here
        <Container className="newsfeed" fluid style={{ paddingLeft: 0, paddingRight: 0 }} id="Hero" style={{ backgroundImage: `url(${HeaderBackground})` }}>
            <div className="row">
                <div className="col-2">
                    <Link to="/">{boroughd}</Link>
                </div>
                <div className="col-10"></div>
            </div>
            <div className="row" id="topSpacer">
                <div className="col-5">
                    <img src={muchXc1te} id="muchXc1te" style={{ marginLeft: '15%'}}/>
                </div>
                <div className="col-7"></div>
            </div>
        </Container>
    )
}

export default About;