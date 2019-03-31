import React, { Component } from "react";
import ComponentHeader from "../components/ComponentHeader";
import ComponentProfileHeader from "../components/ComponentProfileHeader";
import ComponentAbout from "../components/ComponentAbout";
import ComponentEditProfile from "../components/ComponentEditProfile";

class PageProfileAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editProfile: false
        }
        this.handleEditProfile = this.handleEditProfile.bind(this);
    }

    handleEditProfile = () => {
        this.setState((prevState) => ({editProfile: !prevState.editProfile}))
    };

    componentDidUpdate() {
        if(this.state.editProfile) {
            document.querySelector("body").classList.add("pause__scroll"); 
        } else {
            document.querySelector("body").classList.add("scroll"); 
        }
    }
    render() {
        return(
            <div className="pageProfileAbout">
                <ComponentHeader></ComponentHeader>
                <div className="page__profile--content">
                    <ComponentProfileHeader></ComponentProfileHeader>
                </div>
                <ComponentAbout 
                    handleEditProfile={this.handleEditProfile}
                >
                </ComponentAbout>
                {
                    this.state.editProfile
                    &&
                    <ComponentEditProfile
                        handleEditProfile={this.handleEditProfile}
                    >
                    </ComponentEditProfile>
                }
                {/* PageProfileAbout */}
            </div>
        );
    }
}

export default PageProfileAbout;