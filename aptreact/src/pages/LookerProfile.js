import React from "react";
import "../components/LookerProfile/LookerProfile.css";
import Looker from "../components/LookerProfile/Looker";
import Saved from "../components/LookerProfile/Saved";


function LookerProfile() {
    return (
        // This is the main page to show components: LOOKER to show the user their profile and SAVED to show the user's history of hearted listings
        <div>
            <Looker/>
            <Saved/>
        </div>
    )
}

export default LookerProfile;