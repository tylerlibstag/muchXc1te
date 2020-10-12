import React, { useState } from "react";
import { Modal, Form, Col, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import axios from "axios";
import SignUpHero from "../Images/SignUpHero.png";
import "../Images/imageStyle.css";
import Axios from "axios";

import {
    PaddedContainer,
    EmailSymbol,
    PasswordSymbol,
    ResponsiveHeader4,
    MutedSpan,
    VerticalCenterWrapper,
    SubmitButton as SubmitButton
} from "./style";


const VideoUploadForm = () => {
    const [url, setUrl] = useState("");
    const [screenName, setScreenName] = useState("");
    const [description, setDescription] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [sqrfeet, setSqrfeet] = useState("");
    const [view, setView] = useState("no");
    const [nearpark, setNearpark] = useState("no");
    const [neartransportation, setNeartransportation] = useState("no");
    const [neargrocery, setNeargrocery] = useState("no");


    const onSubmit = e => {
        e.preventDefault();

        const videoData = {
            url,
            screenName,
            description,
            address1,
            address2,
            city,
            state,
            zip,
            bedrooms,
            bathrooms,
            sqrfeet,
            view,
            nearpark,
            neartransportation,
            neargrocery,

        };
        axios
            .post("/upload", videoData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicUrl">
                <Row>
                    <Form.Label column xs="2" sm="1">
                        <EmailSymbol />
                    </Form.Label>
                    <Col xs="10" sm="11">
                        <Form.File

                            onChange={e => {
                                setUrl(e.target.value);
                                console.log(url);
                            }}
                            required
                        />

                        <Form.Text className="text-muted">500mb video max</Form.Text>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group controlId="formBasicScreenName">
                <Row>
                    <Form.Label column xs="2" sm="1">
                        <PasswordSymbol />
                    </Form.Label>
                    <Col xs="10" sm="11">
                        <Form.Control
                            type="input"
                            placeholder="screen name"
                            onChange={e => setScreenName(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Row>
            </Form.Group>


            <Form.Group controlId="formBasicDescription">
                <Row>
                    <Col xs="2" sm="1">
                        <EmailSymbol />
                    </Col>
                    <Col xs="10" sm="11">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Square Feet</Form.Label>
                <Form.Control type="text" placeholder="500" />
            </Form.Group>


            <VerticalCenterWrapper>
                <SubmitButton type="submit">Submit</SubmitButton>
            </VerticalCenterWrapper>
        </Form>
    );
};

const VideoUploadModal = props => {
    return (
        <Modal style={{ opacity: 1 }} show={props.show} onHide={() => props.setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Upload a Video
                    <div className="container">
                        <img src={SignUpHero} id="SignUpHero" alt="A skater, a dog walker in heels, and two phone users walking out of a large phone." />
                    </div>
                </Modal.Title>

            </Modal.Header>
            <PaddedContainer>
                <ResponsiveHeader4>Fill out the following</ResponsiveHeader4>
                <br />
                <VideoUploadForm />
                <Row style={{ borderBottom: "1px solid #dee2e6" }} />

                <br />
            </PaddedContainer>
        </Modal>
    );
};

export default VideoUploadModal;