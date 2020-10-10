import React from "react";
import "../components/ListerProfile/ListerProfile.css";
import 'bootstrap/dist/css/bootstrap.css';
import FeedNav from "../components/Navs/FeedNav";
import Lister from "../components/ListerProfile/Lister";
import Upload from "../components/ListerProfile/Upload";
import Manage from "../components/ListerProfile/Manage";
import SideNav from "../components/Navs/SideNav";
import Button from "react-bootstrap/Button";

function ListerProfile() {

    function ButtonLink() {
        function handleClick(e) {
            e.preventDefault();
            console.log("The link was clicked");
        }

    }
    return (


        // This is the main page to show components: LISTER to show the user their profile, UPLOAD for user to make posts, and MANAGE to update or delete an existing post
        <div>
            <FeedNav />
            <div>
                <SideNav />
            </div>
            <div>
                <Lister />
                <Button a href="/Upload" onclick={ButtonLink}>
                    Upload a video via route.
                </Button>
                <Manage />
            </div>
        </div>
    )
}

export default ListerProfile;