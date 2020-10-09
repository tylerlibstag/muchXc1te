import React from "react";
import "../components/NoMatch/NoMatch.css";
import 'bootstrap/dist/css/bootstrap.css';
import NoMatchNav from "../components/NoMatch/NoMatchNav";

function NoMatch() {
    return (
        // This will be a fun lil graphic telling the user theres nothing here
        <div>
            <NoMatchNav/>
        </div>
    )
}

export default NoMatch;