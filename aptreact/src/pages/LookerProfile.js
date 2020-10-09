import React from "react";
import "../components/LookerProfile/LookerProfile.css";
import Looker from "../components/LookerProfile/Looker";
import Saved from "../components/LookerProfile/Saved";
import SideNav from "../components/Newsfeed/SideNav"


function LookerProfile() {
    return (
        // This is the main page to show components: LOOKER to show the user their profile and SAVED to show the user's history of hearted listings
        <div>
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