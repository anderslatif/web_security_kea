/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionUpdateProfileDatas } from '../actions/userActions';

class ComponentEditProfile extends Component {
  constructor(props) {
  super(props)
  this.state = {
    fullName: "",
    country: "",
    email:"",
    socialNetwork: ""
  }
  this.setStateValue = this.setStateValue.bind(this);
  }
  setStateValue = (ev) => {
    let valueType = ev.target.name;
    let valueContent = ev.target.value;
    this.setState({[valueType]: valueContent});
  }

  submitCreateProfile = () => {
      const profile = {
          email: this.state.email,
          socialNetwork: this.state.socialNetwork,
          country: this.state.country
      }
      const userId = JSON.parse(localStorage.getItem('userId'))
      this.props.onUpdateProfile(profile, userId);
  }
  componentDidMount() {
      console.log("user______id: ", this.props.userId)
  }
  render(props) {
    let { handleEditProfile } = this.props;
    return (
      <div className="component__editProfile">
        <div className="component__editProfile--wrapper">
            <div className="edit__profileContent">
                <div className="edit__profileContent--header">
                    <h2>Personalize your Profile</h2>
                    <svg onClick={handleEditProfile}>
                        <use href="./image/sprite.svg#icon-cross"></use>
                    </svg>
                </div>
                <div className="edit__profileContent--content">
                    <div className="contentEdit__subheader">
                        <svg>
                            <use href="./image/sprite.svg#icon-user"></use>
                        </svg>
                        <p>Everything you change here will be visible only when accessing the profile. Your friends wonn't be able to see this in the news feed.</p>
                    </div>
                    <div className="contentEdit__fullname">
                        <svg>
                            <use href="./image/sprite.svg#icon-contacts"></use>
                        </svg>
                        <p>Add or Edit full name</p>
                    </div>
                    <div className="editFullNameWrapper">
                        <label>
                            Full Name: 
                        </label>
                        <input type="text" value={this.state.fullName} name="fullName" onChange={this.setStateValue}/>    
                    </div>

                    <div className="contentEdit__address">
                        <svg>
                            <use href="./image/sprite.svg#icon-home"></use>
                        </svg>
                        <p>Add or Edit country address</p>
                    </div>
                    <div className="editAddressWrapper">
                        <label>
                            Country Address: 
                        </label>
                        <input type="text" value={this.state.country} name="country" onChange={this.setStateValue}/>    
                    </div>

                    <div className="contentEdit__emailaddress">
                        <svg>
                            <use href="./image/sprite.svg#icon-mail"></use>
                        </svg>
                        <p>Add or Edit email address</p>
                    </div>
                    <div className="editEmailAddressWrapper">
                        <label>
                            Email Address: 
                        </label>
                        <input type="text" value={this.state.email} name="email" onChange={this.setStateValue}/>    
                    </div>

                    <div className="contentEdit__socialnetwork">
                        <svg>
                            <use href="./image/sprite.svg#icon-instagram"></use>
                        </svg>
                        <p>Add or Edit social media</p>
                    </div>
                    <div className="editSocialMediaWrapper">
                        <label>
                            Social Media: 
                        </label>
                        <input type="text" value={this.state.socialNetwork} name="socialNetwork" onChange={this.setStateValue}/>    
                    </div>
                    <button className="updateProfileSubmit--button" onClick={this.submitCreateProfile}>Update profile</button>
                </div>
            </div>
        </div>
        {/* ComponentEditProfile */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostProfile: (profile) => {
            dispatch(actionCreateProfileDatas(profile))
        },
        onUpdateProfile: (profile, id) => {
            dispatch(actionUpdateProfileDatas(profile, id))
        }
    }
}

const mapStateToProps = state => {
    return {
        userId: state.user.userId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentEditProfile);