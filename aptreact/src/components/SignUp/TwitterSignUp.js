import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./SignUp.css";

class TwitterSignUp extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    return (
      <div>
          <h2>Just looking?</h2>
          <h3>Sign up with Twitter!</h3>
          <button onClick={this._handleSignInClick}>Sign Up</button>
      </div>
    );
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open("http://localhost:3000/auth/twitter", "_self");
  };

  _tryAgain = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage component
    window.open("http://localhost:3000/Login", "_self");
  };
}

export default TwitterSignUp;