import React from "react";
import "../components/LookerProfile/LookerProfile.css";
import 'bootstrap/dist/css/bootstrap.css';
import LookerNav from "../components/LookerProfile/LookerNav";
import Looker from "../components/LookerProfile/Looker";
import Saved from "../components/LookerProfile/Saved";
import SideNav from "../components/Newsfeed/SideNav"


function LookerProfile() {
    return (
        // This is the main page to show components: LOOKER to show the user their profile and SAVED to show the user's history of hearted listings
        <div>
            <LookerNav/>
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