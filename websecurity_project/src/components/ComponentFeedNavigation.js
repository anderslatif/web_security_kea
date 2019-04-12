import React from "react";
import { Link } from "react-router-dom";

const ComponentFeedNavigation = () => {
    return(
        <div className="componentFeedNavigation">
            <div className="componentFeedNavigation--wrapper">
                <div className="feed__navigationWrapper">
                    <Link to="/profile">About</Link>
                </div>
                <div className="feed__navigationWrapper">
                    <Link to="/profile/posts">Posts</Link>
                </div>
            </div>
        </div>
    );
}

export default ComponentFeedNavigation;