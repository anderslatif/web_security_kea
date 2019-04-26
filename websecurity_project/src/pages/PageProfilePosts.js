import React, { Component } from "react";
import ComponentHeader from "../components/ComponentHeader";
import ComponentProfileHeader from "../components/ComponentProfileHeader";
import ComponentPosts from "../components/ComponentPosts";
import axios from "axios";

class PageProfilePosts extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // axios.get("https://localhost:8080/posts")
        //             .then(res => console.log("9999 posts: ", res))
        //             .catch((error) => console.log(error));
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