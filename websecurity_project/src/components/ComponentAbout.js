/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionFetchProfileDatas } from "../actions/userActions";
import axios from "axios";
/*
About page ComponentAbout - it contains areas to add the 4 types of 
information about the logged in user
*/

class ComponentAbout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: "",
      country: "",
      email:"",
      socialNetwork: "",
      fetchEmail: "",
      fetchSocialNetwork: "",
      fetchCountry: ""
    }
    this.setStateValue = this.setStateValue.bind(this);
  }
  setStateValue = (ev) => {
    let valueType = ev.target.name;
    let valueContent = ev.target.value;
    this.setState({[valueType]: valueContent});
  }
  componentDidMount() {
    const userId = JSON.parse(localStorage.getItem('userId'))
    this.props.onFetchProfile(userId);
  }
  componentDidUpdate() {
    const userId = JSON.parse(localStorage.getItem('userId'))
    this.props.onFetchProfile(userId);
  }
  render(props) {
    let { handleEditProfile } = this.props;
    let {
      fullName,
      country,
      // address,
      email,
      socialNetwork
    } = this.props;
    return (
      <div className="component__about">
        <div className="component__about--wrapper">
          <div className="about__titleDivision">
            <h2>About</h2>
            <button onClick={handleEditProfile}>
            <svg>
              <use href="./image/sprite.svg#icon-edit"></use>
            </svg>
            </button>
          </div>
          <div className="about__contentDivision">
              <div className="about__fullNameSubsection">
                {
                  fullName
                  ?
                  fullName
                  :
                <button className="addFullNameContent" onClick={this.props.handleAddProfile}>
                  <svg className="addFullName">
                    <use href="./image/sprite.svg#icon-plus-circle"></use>
                  </svg>
                  <p>Add Fullname</p>
                </button>
                } 
              </div>
              <div className="about__addressSubsection">
                {
                country
                ?
                country
                :
                <button className="addAddressContent" onClick={this.props.handleAddProfile}>
                  <svg className="addAddress">
                    <use href="./image/sprite.svg#icon-plus-circle"></use>
                  </svg>
                  <p>Add Address</p>
                </button>
                }
              </div>

              <div className="about__emailAddressSubsection">
              {
                email
                ?
                email
                :
                <button className="addEmailAddressContent" onClick={this.props.handleAddProfile}>
                  <svg className="addEmailAddress">
                    <use href="./image/sprite.svg#icon-plus-circle"></use>
                  </svg>
                  <p>Add Email address</p>
                </button>
                }
              </div>

              <div className="about__socialNetworkSubsection">
                {
                  socialNetwork
                  ?
                  socialNetwork
                  :
                <button className="addSocialNetworkContent" onClick={this.props.handleAddProfile}>
                  <svg className="addSocialNetwork">
                    <use href="./image/sprite.svg#icon-plus-circle"></use>
                  </svg>
                  <p>Add Social network</p>
                </button>
                }
              </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // fullName: state.user.fullName,
    country: state.user.country,
    email: state.user.email,
    socialNetwork: state.user.socialNetwork,
    userId: state.user.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: (userId) => {
      dispatch(actionFetchProfileDatas(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentAbout);