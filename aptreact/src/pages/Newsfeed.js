import React from "react";
import "../components/Newsfeed/Newsfeed.css"
import 'bootstrap/dist/css/bootstrap.css';
import FeedNav from "../components/Navs/FeedNav";
import Main from "../components/Newsfeed/Main";
import SideNav from "../components/Navs/SideNav";

function Newsfeed() {
    return (
        <div>
            <FeedNav/>
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