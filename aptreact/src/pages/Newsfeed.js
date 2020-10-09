import React from "react";
import "../components/Newsfeed/Newsfeed.css"
import 'bootstrap/dist/css/bootstrap.css';
import NewsfeedNav from "../components/Newsfeed/NewsfeedNav";
import Main from "../components/Newsfeed/Main";
import SideNav from "../components/Newsfeed/SideNav";

function Newsfeed() {
    return (
        <div>
            <NewsfeedNav/>
            <div>
                <SideNav/>
            </div>
            <div>
                <Main/>
            </div>
        </div>

        // Take inspiration from TIKTOK
        // Another (right) side component could be added here as well
    )
}

export default Newsfeed;