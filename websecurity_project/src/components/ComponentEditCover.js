import React, { Component } from "react";

class ComponentEditCover extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return(
            <div className="componentEditCover">
                <div className="componentEditCover--wrapper">
                    <div className="cover__preview">
                        <img src="" alt="image__preview" />
                    </div>
                    <div className="cover__input">
                        <input type="file" />
                    </div>
                </div>
                {/* ComponentEditCover */}
            </div>
        );
    }
}

export default ComponentEditCover;