import React from "react";
import "../components/Newsfeed/Newsfeed.css";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../src/index.css";
import { Link } from 'react-router-dom';

// Components
import Main from "../components/Newsfeed/Main";
import SideNav from "../components/Navs/SideNav";
import ProfileNav from "../components/Navs/ProfileNav"
import Footer from "../components/Footer/Footer";

//Images
import HeaderBackground from "../components/Images/HeaderBackground.png";
import Boroughd from "../components/Images/boroughd.png";

// Login Imports
import { LoginButton } from "../components/Landing/style";


const boroughd = <img src={Boroughd} id="HeaderHero" alt="boroughd" style={{ marginLeft: '20%'}}></img>

function Newsfeed() {
    return (

        <Container className="newsfeed" fluid style={{ paddingLeft: 0, paddingRight: 0 }} id="Hero" style={{ backgroundImage: `url(${HeaderBackground})` }}>
            <div className="row">
                <div className="col-2">
                    <Link to="/">{boroughd}</Link>
                </div>
                <div className="col-8"></div>
                <div className="col-2">
                    <LoginButton size="lg"> <a href="/">
                        Logout</a>
                    </LoginButton>
                </div>
            </div>
            <Row id="topSpacer">
                <Col xs={2}><SideNav /></Col>
                <Col xs={7}><Main /></Col>
                <Col className="profileCol" xs={3}><ProfileNav /></Col>
            </Row>
        </Container>
        // Take inspiration from TIKTOK
        // Another (right) side component could be added here as well
    );
}

export default Newsfeed;
