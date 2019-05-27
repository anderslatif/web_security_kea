import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreateProfileDatas } from "../actions/userActions";

class ComponentAddPersonalDatas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            country: "",
            emailAddress: "",
            socialNetwork: ""
        }
    }
    getInputValue = (ev) => {
        let value = ev.target.value;
        let name = ev.target.name;
        this.setState({[name]:value})
    }
    sendDataRequest = () => {
        let datas = {
            country: this.state.country,
            email: this.state.emailAddress,
            socialNetwork: this.state.socialNetwork
        }
        this.props.onCreateProfile(datas)
    }
    render(props) {
        return(
            <div className="componentAddPersonalDatas">
                <div className="componentAddPersonalDatas--wrapper">
                    <div className="addDatasHeader">
                        <svg>
                            <use href="./image/sprite.svg#icon-user"></use>
                        </svg>
                        <p>Create your own profile by filling the input</p>
                    </div>
                    <div className="addDatasContent">
                        <div className="addDatasContent--inputGroup">
                            <label htmlFor="fullName">Full Name</label>
                            <input 
                                type="text" 
                                value={this.state.fullName} 
                                name="fullName" 
                                id="fullName"
                                onChange={this.getInputValue} 
                            />
                        </div>
                        <div className="addDatasContent--inputGroup">
                            <label htmlFor="country">Country</label>
                            <input 
                                type="text" 
                                value={this.state.country} 
                                name="country" 
                                id="country"
                                onChange={this.getInputValue} 
                            />
                        </div>
                        <div className="addDatasContent--inputGroup">
                            <label htmlFor="">Email Address</label>
                            <input 
                                type="text" 
                                value={this.state.emailAddress} 
                                name="emailAddress" 
                                id="emailAddress"
                                onChange={this.getInputValue} 
                            />
                        </div>
                        <div className="addDatasContent--inputGroup">
                            <label htmlFor="socialNetwork">Social Network</label>
                            <input 
                                type="text" 
                                value={this.state.socialNetwork} 
                                name="socialNetwork" 
                                id="socialNetwork"
                                onChange={this.getInputValue} 
                            />
                        </div>
                        <button className="submitAddProfile" onClick={this.sendDataRequest}>Submit Profile</button>
                    </div>
                    <button onClick={this.props.handleAddProfile} className="addDatasClose">
                        <svg>
                            <use href="./image/sprite.svg#icon-cross"></use>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateProfile: profile => {
            dispatch(actionCreateProfileDatas(profile))
        }
    }
}

export default connect(null, mapDispatchToProps)(ComponentAddPersonalDatas);