import React from "react";
import "../components/Login/Login.css";
import 'bootstrap/dist/css/bootstrap.css';
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import LoginNav from "../components/Login/LoginNav"


function Login() {

    // let state = {
    //     user: {},
    //     error: null,
    //     authenticated: false
    // };

    // useEffect(() => {
    //     fetch("http://localhost:3000/auth/login/success", {
    //         method: "GET",
    //         credentials: "include",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Credentials": true
    //         }
    //     })
    //         .then(response => {
    //             if (response.status === 200) return response.json();
    //             throw new Error("failed to authenticate user");
    //         })
    //         .then(responseJson => {
    //             this.setState({
    //                 authenticated: true,
    //                 user: responseJson.user
    //             });
    //         })
    //         .catch(error => {
    //             this.setState({
    //                 authenticated: false,
    //                 error: "Failed to authenticate user"
    //             });
    //         });
    // })

    // const { authenticated } = this.state;
    return (
        // Allows user to sign in to existing profile
        <div>
            <LoginNav/>
            <div>
                <h3>Login with your username and password.</h3>
                <form>
                    <label>Username </label>
                    <input></input><br /><br />
                    <label>Password </label>
                    <input></input><br /><br />
                    <button>Submit</button>
                </form>
            </div>
            <div>
                <br /><br />
                <h3>Or Login using Twitter</h3>
                <button>Login with Twitter</button>
            </div>
        </div>

        // button: onClick={handleLogin}

        
        // To be coded:
        // FORM for user to input their EMAIL and PASSWORD
        // orTWITTER
        // on SUBMIT the user will be ROUTED to the NEWSFEED
    )
}

// const handleLogin = () => {
//     // Authenticate using via passport api in the backend
//     // Open Twitter login page
//     window.open("http://localhost:3000/auth/twitter", "_self");
// };

export default Login;