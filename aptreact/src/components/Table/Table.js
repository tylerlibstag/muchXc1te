import NewsfeedNav from "../components/Newsfeed/NewsfeedNav";
import Main from "../components/Newsfeed/Main";
import SideNav from "../components/Newsfeed/SideNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Table() {
    return (
        <div className="table">
            <NewsfeedNav />
            <Container fluid>
                <Row>
                    <Col xs={1}><SideNav /></Col>
                    <Col xs={10}> <Main /></Col>
                    <Col xs={1}><SideNav /></Col>

                </Row>
            </Container>
        </div>
    );
}

export default Table;