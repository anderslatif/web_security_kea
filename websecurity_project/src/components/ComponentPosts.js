import React, { Component } from "react";
import ComponentPostsElement from "./ComponentPostsElement";

const postTests = [
    {
        name:"tests"
    }
];

class PageProfilePosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testPosts: postTests
        }
    }
    render() {
        return(
            <div className="componentPosts">
                ComponentPosts

                {
                    this.state.testPosts.map((post) => {
                        return <ComponentPostsElement />
                    })
                }
            </div>
        );
    }
}

export default PageProfilePosts;