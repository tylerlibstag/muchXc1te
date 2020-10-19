import React, { useState, useEffect } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import DelegatedAuthList from "../DelegatedAuthList/DelegatedAuthList";
import SignUpHero from "../Images/SignUpHero.png";
import "../Images/imageStyle.css";

import {
    PaddedContainer,
    EmailSymbol,
    PasswordSymbol,
    ResponsiveHeader4,
    VerticalCenterWrapper,
    SubmitButton as SubmitButton
} from "./style";

// return (
//     <div className="vid">
//         <header className="vid-header">
//             <form action="#">
//                 <div className="flex">
//                     <label htmlFor="screenName">Screen Name</label>
//                     <input
//                         type="text"
//                         id="screenName"
//                         onChange={event => {
//                             const { value } = event.target;
//                             setScreenName(value);
//                         }}
//                     />
//                 </div>
//                 <div className="flex">
//                     <label htmlFor="file">File</label>
//                     <input
//                         type="file"
//                         id="file"
//                         accept=".mp4"
//                         onChange={event => {
//                             const file = event.target.files[0];
//                             setFile(file);
//                         }}
//                     />
//                 </div>
//             </form>
//             <button onClick={send}>Send</button>
//         </header>
//     </div>
// );


const SignUpLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [name, setName] = useState("");

    const userData = {
        email: email,
        password: password,
        // name: name
    };

    const [state, setState] = useState({
        id: "",
        error: null,
        isAuthenticated: false,
        changeState: (name, value) => setState({ ...state, [name]: value })
    });

    const onSubmit = e => {
        e.preventDefault();

        // handles a user signing up/logging in and posting user data to DB
        const userData = {
            email: email,
            password: password,
            // name: name
        };

        // login/sign up a user
        axios
            .post("/api/auth/register_login", userData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });

        // get user data and log them in
        axios
            .get("/api/auth/users", userData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

     // should run after a user presses "Submit"
    //  const checkAuthentication = async () => {
    //     console.log("checkAuth() is running");
    //     await axios
    //         .get("/api/auth/register_login", userData)
    //         .then(async res => {
    //             // setLoading(true);
    //             if (res.data.success === true) {
    //                 console.log("user was authenticated");
    //                 setState({
    //                     ...state,
    //                     id: res.data.user.id,
    //                     isAuthenticated: true,
    //                 });
    //                 // setLoading(false);
    //             }
    //             else {
    //                 console.log(res) 
    //             }
    //             // setLoading(false)
    //         });
    // };

    useEffect(() => {
        // checkAuthentication();
    }, [state.isAuthenticated])

   
    return (
        <Form onSubmit={onSubmit}>
            {/* <Form.Group>
                <Row>
                    <Form.Label column xs="2" sm="1">
                        {/* Name Icon */}
            {/* </Form.Label>
                    <Col xs="10" sm="11"> */}
            {/* <Form.Control
                            type="input"
                            name="name"
                            placeholder="What would you like us to call you?"
                            onChange={e => {
                                setName(e.target.value);
                                // console.log(name);
                            }}
                            required
                        /> */}
            {/* </Col>
                </Row>
            </Form.Group> */}
            <Form.Group controlId="formBasicEmail">
                <Row>
                    <Form.Label column xs="2" sm="1">
                        <EmailSymbol />
                    </Form.Label>
                    <Col xs="10" sm="11">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={e => {
                                setEmail(e.target.value);
                                // console.log(email);
                            }}
                            required
                        />
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
                            name="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Col>
                </Row>
            </Form.Group>
            <VerticalCenterWrapper>
                <SubmitButton type="submit">
                {/* // onClick={checkAuthentication}> */}
                //     {/* Once the User presses submit, checkAuth() should run and then User 
                //     should be redirect to Newsfeed page */}
                //      {/* <Route><Redirect to="/Newsfeed" /></Route>   */}
                //      {/* <Route><Redirect to="/" /></Route> */}
                Submit</SubmitButton>
            </VerticalCenterWrapper>
        </Form>
    )

};

const SignupLoginModal = props => {
    return (
        <Modal style={{ opacity: 1 }} show={props.show} onHide={() => props.setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Sign up / Login
                                    <div className="container">
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

