import React from 'react';
import "./Footer.css"
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

function Footer () {

    return (
      <div className="container" id="footer">
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2">
            <Link to="/About">About Us</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-9"></div>
            <div className="col-3">
              <a href="https://github.com/tylerlibstag/muchXc1te">Find our project on GitHub</a>
            </div>
        </div>
        <br/>
        <div className="row justify-content-center">
          <p>Made with ❤️ by Team muchXc1te</p>
        </div>
      </div>
    )
  }

export default Footer;