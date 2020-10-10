import React from "react";
import "../components/LookerProfile/LookerProfile.css";
import 'bootstrap/dist/css/bootstrap.css';
import FeedNav from "../components/Navs/FeedNav";
import Looker from "../components/LookerProfile/Looker";
import Saved from "../components/LookerProfile/Saved";
import SideNav from "../components/Navs/SideNav"


function LookerProfile() {
    return (
        // This is the main page to show components: LOOKER to show the user their profile and SAVED to show the user's history of hearted listings
        <div>
            <FeedNav/>
            <div>
                <SideNav/>
            </div>
            <div>
                <Looker/>
                <Saved/>
            </div>
        </div>
    )
}

export default LookerProfile;