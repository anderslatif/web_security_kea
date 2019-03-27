import React, { Component } from "react";
import ComponentHeader from "../components/ComponentHeader";
import ComponentProfileHeader from "../components/ComponentProfileHeader";

class PageProfileAbout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="pageProfileAbout">
                <ComponentHeader></ComponentHeader>
                <div className="page__profile--content">
                    <ComponentProfileHeader></ComponentProfileHeader>
                </div>
                {/* PageProfileAbout */}
            </div>
        );
    }
}

export default PageProfileAbout;