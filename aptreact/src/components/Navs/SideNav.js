import React from "react";
import {Link} from 'react-router-dom';
import "./SideNav.css";
import Search from "../../pages/Search";
import Newsfeed from "../../pages/Newsfeed";
import LookerProfile from "../../pages/LookerProfile";
import ListerProfile from "../../pages/ListerProfile";

const search = <i className="fas fa-search fa-5x"></i>;
const newsfeed = <i className="fas fa-video fa-5x"></i>;
const profile = <i className="fas fa-user-circle fa-5x"></i>

function SideNav() {
    return (
     
        <div className = 'sideNav'>
        <Link className = "link" to="/Newsfeed">{newsfeed}</Link>
        <br></br>
        <Link to="/Search">{search}</Link>
        <br></br>
        <Link to="/LookerProfile">{profile}</Link>
        

            
        </div>
       
      )
}      
                        


export default SideNav;