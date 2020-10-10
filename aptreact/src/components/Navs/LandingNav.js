import React from "react"
import "../Landing/Landing.css"
import 'bootstrap/dist/css/bootstrap.css';

function LandingNav() {
    return (
        <div>
            <nav className="LandingNav">
            <div class="row">
                    <div className="col-2">
                        <a href="/">Home</a>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-4">
                        <a href="/SignUp">Sign Up</a>
                        <a href="/Login">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default LandingNav;