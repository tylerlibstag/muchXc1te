import React from "react";
import "./ListerProfile.css";
import Upload from "./Upload";
import Manage from "./Manage";

function Lister() {
    return (
        // This will show the user the information they input during their signup
        // Navbar
        // A div containing the user's PROFILE PIC, NAME, type of user and USERNAME 
        // (and any other information you see fit - maybe email or option to change password...)
        <div>
            <Upload />
            <Manage />
        </div>
    )
}

export default Lister;