import React, { useState, useEffect } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import DelegatedAuthList from "../DelegatedAuthList/DelegatedAuthList";
import SignUpHero from "../Images/SignUpHero.png";
import "../Images/imageStyle.css";
import "./style.js";
import "./style.css";

import {
    PaddedContainer,
    EmailSymbol,
    PasswordSymbol,
    ResponsiveHeader4,
    VerticalCenterWrapper,
    SubmitButton as SubmitButton
} from "./style";


const SignUpLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setisAuthenticated] = useState(false);


    // const [state, setState] = useState({
    //     id: "",
    //     error: null,
    //     isAuthenticated: false,
    //     changeState: (name, value) => setState({ ...state, [name]: value })
    // });

    const onSubmit = event => {
        event.preventDefault();

        // handles a user signing up/logging in and posting user data to DB
        const userData = new FormData({
            email: email,
            password: password,
            isAuthenticated: isAuthenticated
        });

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

    // useEffect(() => {
    //  checkAuthentication();
    // }, [state.isAuthenticated])


    return (
        <div>
            <form action="#">
                <div className="flex" id="inputStyleEmail">
                <label>
                    <EmailSymbol />
                </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={e => {
                            setEmail(e.target.value);
                            // console.log(email);
                        }}
                        required
                    />
                </div>
                <div className="flex" id="inputStylePassword">
                    <label>
                        <PasswordSymbol />
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </form>
            {/* Once the User presses submit, checkAuth() should run and then User 
                should be redirect to Newsfeed page */}
            <SubmitButton type="submit">Submit</SubmitButton>
            {/* // onClick={checkAuthentication}> */}
            {/* <Route><Redirect to="/Newsfeed" /></Route>   */}
            {/* <Route><Redirect to="/" /></Route> */}
        </div>
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
                <Row style={{ marginTop: "20px", borderBottom: "1px solid #dee2e6" }} />
                <ResponsiveHeader4>Or with your favorite third party provider:</ResponsiveHeader4>
                <br />
                <DelegatedAuthList />
            </PaddedContainer>
        </Modal>

    );
};

export default SignupLoginModal;

