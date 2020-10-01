import React from "react";
import "../components/Landing/Landing.css";

function Landing () {
    return (
        <div>
            {/* This is the nav bar for the Landing Page only */}
            <div>
                <a>Home</a>
                <a>Sign Up</a>
                <a>Login</a>
            </div>
            {/* This is where main body with graphics will go */}
            <div>
                <p>Main body temp text</p>
            </div>
        </div>
    )
}

export default Landing;