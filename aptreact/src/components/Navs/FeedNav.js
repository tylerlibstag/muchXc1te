import React from "react"
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.css';

function FeedNav() {
    return (
        <div>
            <nav className="Nav">
                <div class="row">
                    <div className="col-2">
                        <a href="/">Home</a>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-4">
                        <a href="/">Logout</a>
                        {/* This needs to include logout auths for both twitter and passport */}=
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default FeedNav;