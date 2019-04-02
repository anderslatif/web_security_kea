import React, { Component } from 'react'

class ComponentAbout extends Component {
  render(props) {
    let { handleEditProfile } = this.props;
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
              <button className="addFullNameContent">
                <svg className="addFullName">
                  <use href="./image/sprite.svg#icon-plus-circle"></use>
                </svg>
                <p>Add Fullname</p>
              </button>
            </div>
            <div className="about__addressSubsection">
              <button className="addAddressContent">
                <svg className="addAddress">
                  <use href="./image/sprite.svg#icon-plus-circle"></use>
                </svg>
                <p>Add Address</p>
              </button>
            </div>
            <div className="about__emailAddressSubsection">
              <button className="addEmailAddressContent">
                <svg className="addEmailAddress">
                  <use href="./image/sprite.svg#icon-plus-circle"></use>
                </svg>
                <p>Add Email address</p>
              </button>
            </div>
            <div className="about__socialNetworkSubsection">
              <button className="addSocialNetworkContent">
                <svg className="addSocialNetwork">
                  <use href="./image/sprite.svg#icon-plus-circle"></use>
                </svg>
                <p>Add Social network</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ComponentAbout;