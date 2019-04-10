import React, { Component } from "react";
import ComponentHeader from "../components/ComponentHeader";
import ComponentProfileHeader from "../components/ComponentProfileHeader";
import ComponentAbout from "../components/ComponentAbout";
import ComponentEditProfile from "../components/ComponentEditProfile";
import ComponentChatElement from "../components/ComponentChatElement";

class PageProfileAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editProfile: false,
            chatState: false
        }
        this.handleEditProfile = this.handleEditProfile.bind(this);
        this.handleChatState = this.handleChatState.bind(this);
        this.handleChatStateSlide = this.handleChatStateSlide.bind(this);
    }

    handleEditProfile = () => {
        this.setState((prevState) => ({editProfile: !prevState.editProfile}))
    };

    handleChatState = () => {
        this.setState((prevState) => ({chatState: !prevState.chatState}));
    }

    handleChatStateSlide = () => {
        document.querySelector(".componentChatElement").className = "slideChatLists";
        setTimeout(this.handleChatState, 1400);
    }
    componentDidUpdate() {
        // if(this.state.editProfile) {
        //     document.querySelector("body").classList.add("pause__scroll"); 
        // }
        
        // if(this.state.editProfile === false) {
        //     document.querySelector("body").classList.add("scroll"); 
        // }
    }
    render() {
        return(
            <div className="pageProfileAbout">
                <ComponentHeader></ComponentHeader>
                <div className="page__profile--content">
                    <ComponentProfileHeader handleChatState={this.handleChatState}></ComponentProfileHeader>
                </div>
                <ComponentAbout 
                    handleEditProfile={this.handleEditProfile}
                    >
                </ComponentAbout>
                {
                    this.state.chatState
                    &&
                    <ComponentChatElement handleChatState={this.handleChatState} handleChatStateSlide={this.handleChatStateSlide} />
                }
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