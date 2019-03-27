import React, { Component } from "react";
import ComponentHeader from "../components/ComponentHeader";
import ComponentProfileHeader from "../components/ComponentProfileHeader";
import ComponentPosts from "../components/ComponentPosts";

class PageProfilePosts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="pageProfilePosts">
                <ComponentHeader></ComponentHeader>
                <div className="page__profile--content">
                    <ComponentProfileHeader></ComponentProfileHeader>
                </div>
                <ComponentPosts />
                {/* PageProfilePosts */}
            </div>
        );
    }
}

export default PageProfilePosts;