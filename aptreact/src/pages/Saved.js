import React from "react";
import "../components/Newsfeed/Newsfeed.css";
import "bootstrap/dist/css/bootstrap.css";
import FeedNav from "../components/Navs/FeedNav";
import Main from "../components/Newsfeed/Main";
import SideNav from "../components/Navs/SideNav";
import ProfileNav from "../components/Navs/ProfileNav"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../src/index.css";
import Footer from "../components/Footer/Footer";
import Video from "../components/Newsfeed/Video"


function Saved() {
    return (
        <Container className="newsfeed" fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <FeedNav fluid style={{ paddingLeft: 0, paddingRight: 0 }} />
            <Row>
                <Col xs={2}><SideNav /></Col>
                <Col xs={7}> <div className="main">
                    <div className="main_videos">


                        {/* {
                        userSearch.results.map(({ url }) => (

                            <Video url={url} />
                        ))
                    } */}
                    </div>
                </div>

                </Col>
                <Col className="profileCol" xs={3}><ProfileNav /></Col>
            </Row>
        </Container>

        // Take inspiration from TIKTOK
        // Another (right) side component could be added here as well
    );
}

export default Saved;
