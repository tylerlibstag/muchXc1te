import React from "react";
import "../components/SignUp/SignUp.css";
import 'bootstrap/dist/css/bootstrap.css';
import SignUpNav from "../components/SignUp/SignUpNav"
import SignUpHero from "../components/Images/SignUpHero.png"

function SignUp() {
    return (
        // Allows user to sign in to existing profile
        <div>
            <SignUpNav/>
            <div className="container" id="Hero">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <h2>We'll help you find your perfect home...</h2>
                        <h3>so you can get back to doing what you love.</h3>
                    </div>
                    <div className="col-md-8 text-center my-auto">
                        <img src={SignUpHero} id="SignUpHero" alt="A skater, a dog walker in heels, and two phone users walking out of a large phone."/>
                    </div>
                </div>
            </div>
            
        </div>
        // To be coded:
        // FORM for user to fill out NAME, EMAIL, desired USERNAME, desired PASSWORD, CONFIRM PASSWORD, and PROFILE PIC
        
        // send a call to the users database with all the information they filled out.
        // Button will send profile to db using POST
    )
}

export default SignUp;