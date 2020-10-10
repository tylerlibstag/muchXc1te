import React from "react";
import "../components/NoMatch/NoMatch.css";
import 'bootstrap/dist/css/bootstrap.css';
import UserAuthNav from "../components/Navs/UserAuthNav";

function NoMatch() {
    return (
        // This will be a fun lil graphic telling the user theres nothing here
        <div>
            <UserAuthNav/>
        </div>
    )
}

export default NoMatch;