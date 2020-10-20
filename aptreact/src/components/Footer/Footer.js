import React from 'react';
import "./Footer.css"
import "bootstrap/dist/css/bootstrap.css";

function Footer () {

    const year = new Date().getFullYear();

    return <footer>
      <div className="row">
        <div className="col-10"></div>
        <div className="col-2">
          <a>About Us</a>
          <br/>
          <a>Repository</a>
        </div>
      </div>
      <div className="row justify-content-center">
        <p>Copyright © {year}</p>
        <p>Made with ❤️ by Team muchXc1te</p>
      </div>
      </footer>
}

export default Footer;