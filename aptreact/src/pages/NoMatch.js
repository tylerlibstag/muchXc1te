import React from "react";
import "../components/NoMatch/NoMatch.css";
import 'bootstrap/dist/css/bootstrap.css';
import UserAuthNav from "../components/Navs/UserAuthNav";
import NoMatchHouse from "../components/Images/no match house .png"

function NoMatch() {
    return (
        // This will be a fun lil graphic telling the user theres nothing here
        <div>
            <UserAuthNav/>
            <img id="NoMatch" src={NoMatchHouse} />
        </div>
    )
}

export default NoMatch;