import React from "react";
import "../components/ListerProfile/ListerProfile.css";
import 'bootstrap/dist/css/bootstrap.css';
import FeedNav from "../components/Navs/FeedNav";
import Lister from "../components/ListerProfile/Lister";
import Upload from "../components/ListerProfile/Upload";
import Manage from "../components/ListerProfile/Manage";
import SideNav from "../components/Navs/SideNav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ListerProfile() {

    function ButtonLink() {
        function handleClick(e) {
            e.preventDefault();
            console.log("The link was clicked");
        }

    }
    return (
        // This is the main page to show components: LISTER to show the user their profile, 
        // UPLOAD for user to make posts, and MANAGE to update or delete an existing post.
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <FeedNav />
                <Row>
                    <Col xs={1}>
                        <SideNav />
                    </Col>
                    <Col xs={10}>
                        <Lister />
                            <Button a href="/Upload" onclick={ButtonLink}>
                                Upload a video via route.
                            </Button>
                        <Manage />
                    </Col>
                    <Col xs={1}>Right Nav Goes Here</Col>
                </Row>
        </Container>
    )
}

export default ListerProfile;