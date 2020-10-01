import React from "react";
import Main from "../components/Newsfeed/Main";
import SideNav from "../components/Newsfeed/SideNav";

function Newsfeed() {
    return (
        <div>
            {/* The side bar navigation that will have buttons to LANDING, SEARCH, and PROFILE */}
            <SideNav/>
            {/* The main video scroll feature */}
            <Main/>
        </div>
    )
}

export default Newsfeed;