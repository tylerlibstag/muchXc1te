import React from "react";
import "../components/Newsfeed/Newsfeed.css";
import "bootstrap/dist/css/bootstrap.css";
import FeedNav from "../components/Navs/FeedNav";
import Main from "../components/Newsfeed/Main";
import SideNav from "../components/Navs/SideNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer/Footer";

function Newsfeed() {
  return (
  
        <Container
        className="newsfeed"
        fluid
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <FeedNav />
        <Row>
          <Col xs={2}>
            <SideNav />
          </Col>
          <Col xs={8}>
            {" "}
            <Main />
          </Col>
          <Col xs={2}>Here's the Side Nav.....</Col>
        </Row>
        <Row>
            <Footer />
        </Row>
      </Container>
      

      


    // Take inspiration from TIKTOK
    // Another (right) side component could be added here as well
  );
}

export default Newsfeed;
