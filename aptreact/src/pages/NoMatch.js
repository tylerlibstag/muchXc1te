import React from "react";
import "../components/NoMatch/NoMatch.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import "../../src/index.css";
import { Link } from 'react-router-dom';

//Images
import HeaderBackground from "../components/Images/HeaderBackground.png";
import Boroughd from "../components/Images/boroughd.png";
import NoMatchHero from "../components/Images/NoMatchHero.png";


const boroughd = <img src={Boroughd} id="HeaderHero" alt="boroughd" style={{ marginLeft: '20%'}}></img>

function NoMatch() {
    return (
        // This will be a fun lil graphic telling the user theres nothing here
        <Container className="newsfeed" fluid style={{ paddingLeft: 0, paddingRight: 0 }} id="Hero" style={{ backgroundImage: `url(${HeaderBackground})` }}>
            <div className="row">
                <div className="col-2">
                    <Link to="/">{boroughd}</Link>
                </div>
                <div className="col-10"></div>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src={NoMatchHero} id="NoMatchHero" style={{ marginLeft: '10%'}}/>
                </div>
                <div className="col-6 my-auto">
                    <h2 style={{ marginLeft: '10%'}}>Look's like you got a little lost...</h2>
                    <br/>
                    <h3 style={{ marginLeft: '10%'}}>Let's take you back<a id="noMatchLink" href="/">home.</a></h3>
                </div>
            </div>
        </Container>
    )
}

export default NoMatch;