import React from "react";
import { Link } from 'react-router-dom';
import "./SideNav.css";
import Search from "../../pages/Search";
import Newsfeed from "../../pages/Newsfeed";
import Profile from "../../pages/Profile";

const search = <i className="fas fa-search fa-3x"></i>;
const newsfeed = <i className="fas fa-video fa-3x"></i>;
const collections = <i className="fas fa-layer-group fa-3x"></i>;

function SideNav() {
  return (

    <div className='sideNav'>
      <div className="vl2">
        <Link className="link" to="/Newsfeed">{newsfeed}</Link>
        <br></br>
        <Link to="/Search">{search}</Link>
        <br></br>
        <Link to="/Saved">{collections}</Link>
      </div>
    </div>

  )
}



export default SideNav;