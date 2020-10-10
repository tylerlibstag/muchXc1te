import React from "react";
import "../components/LookerProfile/LookerProfile.css";
import FeedNav from "../components/Navs/FeedNav";
import SideNav from "../components/Navs/SideNav"
import Saved from "../components/LookerProfile/Saved";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from "react-bootstrap";


function LookerProfile() {
    return (
        // This is the main page to show components: LOOKER to show the user their profile and SAVED to show the user's history of hearted listings
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <FeedNav />
                <Row>
                    <Col xs={2}>
                        <SideNav />
                    </Col>
                    <Col xs={8}>
                        <Saved />
                    </Col>
                    <Col xs={2}>Right Nav Goes Here</Col>
                </Row>
        </Container>
    )
}

export default LookerProfile;