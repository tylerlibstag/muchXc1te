import React, { useState } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import DelegatedAuthList from "../DelegatedAuthList/DelegatedAuthList";
import SignUpHero from "../Images/SignUpHero.png";
import "../Images/imageStyle.css";

import {
    PaddedContainer,
    EmailSymbol,
    PasswordSymbol,
    ResponsiveHeader4,
    MutedSpan,
    VerticalCenterWrapper,
    SubmitButton as SubmitButton
} from "./style";

const SignUpLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = e => {
        e.preventDefault();

        const userData = {
            email,
            password
        };
        axios
            .post("/api/auth/register_login", userData)
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
            <Form.Group controlId="formBasicEmail">
                <Row>
                    <Form.Label column xs="2" sm="1">
                        <EmailSymbol />
                    </Form.Label>
                    <Col xs="10" sm="11">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={e => {
                                setEmail(e.target.value);
                                console.log(email);
                            }}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Row>
                    <Form.Label column xs="2" sm="1">
                        <PasswordSymbol />
                    </Form.Label>
                    <Col xs="10" sm="11">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Row>
                    <Col xs="2" sm="1">
                        <Form.Check type="checkbox" />
                    </Col>
                    <Col xs="10" sm="11">
                        <Form.Label>
                            <MutedSpan>
                                I hereby confirm that the referral app is allowed to send me emails, up until I
                                unsubscribe.
                            </MutedSpan>
                        </Form.Label>
                    </Col>
                </Row>
            </Form.Group>
            <VerticalCenterWrapper>
                <SubmitButton type="submit">Submit</SubmitButton>
            </VerticalCenterWrapper>
        </Form>
    );
};

const SignupLoginModal = props => {
    return (
        <Modal style={{opacity:1}} show={props.show} onHide={() => props.setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Sign up / Login
                    <div className= "container">
                    <img src={SignUpHero} id="SignUpHero" alt="A skater, a dog walker in heels, and two phone users walking out of a large phone." />
                    </div>
                </Modal.Title>
                
            </Modal.Header>
            <PaddedContainer>
                <ResponsiveHeader4>With email:</ResponsiveHeader4>
                <br />
                <SignUpLoginForm />
                <Row style={{ borderBottom: "1px solid #dee2e6" }} />
                <ResponsiveHeader4>Or with your favorite third party provider:</ResponsiveHeader4>
                <br />
                <DelegatedAuthList />
            </PaddedContainer>
        </Modal>
    );
};

export default SignupLoginModal;