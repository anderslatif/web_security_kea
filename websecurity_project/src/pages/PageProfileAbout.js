/*eslint-disable*/
import React, { Component } from "react";
import ComponentHeader from "../components/ComponentHeader";
import ComponentProfileHeader from "../components/ComponentProfileHeader";
import ComponentAbout from "../components/ComponentAbout";
import ComponentEditProfile from "../components/ComponentEditProfile";
// import ComponentChatElement from "../components/ComponentChatElement";
// import axios from "axios";
import ComponentAddPersonalDatas from "../components/ComponentAddPersonalDatas";
// import { connect } from "react-redux";

class PageProfileAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editProfile: false,
            chatState: true,
            addProfileDatas: false
        }
        this.handleEditProfile = this.handleEditProfile.bind(this);
        this.handleChatState = this.handleChatState.bind(this);
        this.handleChatStateSlide = this.handleChatStateSlide.bind(this);
        this.handleAddProfile = this.handleAddProfile.bind(this);
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

    handleAddProfile = (ev) => {
        this.setState((prevState) => ({addProfileDatas: !prevState.addProfileDatas}))
    }
    componentDidMount() {
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
                    handleAddProfile={this.handleAddProfile}
                    >
                </ComponentAbout>
                {/* {
                    this.state.chatState
                    &&
                    <ComponentChatElement handleChatState={this.handleChatState} handleChatStateSlide={this.handleChatStateSlide} />
                } */}
                {
                    this.state.editProfile
                    &&
                    <ComponentEditProfile
                        handleEditProfile={this.handleEditProfile}
                    >
                    </ComponentEditProfile>
                }
                {
                    this.state.addProfileDatas
                    &&
                    <ComponentAddPersonalDatas handleAddProfile={this.handleAddProfile}>
                    </ComponentAddPersonalDatas>
                }
                {/* PageProfileAbout */}
            </div>
        );
    }
}

export default PageProfileAbout;