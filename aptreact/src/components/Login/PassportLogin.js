import React from "react";
import "./Login.css";

function PassportLogin() {
    return (
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
    )
};

export default PassportLogin;