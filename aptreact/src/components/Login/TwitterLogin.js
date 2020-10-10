import React, { useEffect } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TwitterLogin(props) {

    return (
        <div>
            <h3>Or Login using Twitter</h3>
            <button onClick={handleLogin}>Login with Twitter</button>
        </div>
    )
}


export default TwitterLogin;