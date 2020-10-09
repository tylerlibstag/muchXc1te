import React from "react"
import "./Landing.css";
import 'bootstrap/dist/css/bootstrap.css';

function LandingNav() {
    return (
        <div>
            <nav className="LandingNav">
                <a>Home</a>
                <a>SignUp</a>
                <a>Login</a>
            </nav>
        </div>
    )
}

export default LandingNav;