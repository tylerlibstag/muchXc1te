import React from "react";
import "../components/Search/Search.css";
import 'bootstrap/dist/css/bootstrap.css';
import FeedNav from "../components/Navs/FeedNav";
import SideNav from "../components/Navs/SideNav";

function Search() {
    return (
        <div>
            <FeedNav/>
            <div>
                <SideNav/>
            </div>
        </div>
        //Search Bar capabilities:
        // FORM: with preselected NEIGHBORHOOD BUTTONS

        // Show a RESULT FEED HERE ------> still need to decide what and how of components for search feed
    )
}

export default Search;