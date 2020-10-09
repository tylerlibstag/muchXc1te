import React from "react"
import "./Newsfeed.css";
import 'bootstrap/dist/css/bootstrap.css';

function NewsfeedNav() {
    return (
        <div>
            <nav className="NewsfeedNav">
                <a>Home</a>
                <a>Logout</a>
            </nav>
        </div>
    )
}

export default NewsfeedNav;