import React from "react";
import "../components/SignUp/SignUp.css";
import 'bootstrap/dist/css/bootstrap.css';
import UserAuthNav from "../components/Navs/UserAuthNav"
import SignUpHero from "../components/Images/SignUpHero.png"

function SignUp() {
    return (
        // Allows user to sign in to existing profile
        <div>
            <UserAuthNav/>
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
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <form>
                            <label>Are you a Looker or a Lister?</label>
                            <input></input><br/>
                            <label>What is your full name?</label>
                            <input></input><br/>
                            <label>What is your email address?</label>
                            <input></input><br/>
                            <label>Create a username for your account.</label>
                            <input></input><br/>
                            <label>Create a password for your account.</label>
                            <input></input><br/>
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <h2>Just looking?</h2>
                        <h3>Sign up with Twitter!</h3>
                        <button onClick={handleLogin}>Sign Up</button>
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

const handleLogin = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open("http://localhost:3000/auth/twitter", "_self");
};

export default SignUp;