import React, { useState } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import DelegatedAuthList from "../DelegatedAuthList/DelegatedAuthList";
import { Redirect, Link} from "react-router-dom";
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
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onSubmit = e => {
        e.preventDefault();

        const userData = {
            email,
            password,
            isAuthenticated
        };

        axios
            .post("/api/auth/register_login", userData)
            .then(res => {
                console.log(res);
                setIsAuthenticated(true);
                
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });

            return <Redirect to='/Newsfeed' />;
    }


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
                                // console.log(email);
                            }}
                            required
                        />
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
                    </Col>
                </Row>
            </Form.Group>
            <VerticalCenterWrapper>
                <Link to="/Newsfeed"><SubmitButton type="submit"> Submit</SubmitButton></Link>
            </VerticalCenterWrapper>
        </Form>
    );
};

const SignupLoginModal = props => {
    return (
        <Modal style={{ opacity: 1 }} show={props.show} onHide={() => props.setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Sign up / Login</Modal.Title>
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