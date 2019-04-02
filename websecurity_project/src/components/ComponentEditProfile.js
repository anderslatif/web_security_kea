import React, { Component } from 'react'

class ComponentEditProfile extends Component {
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
                        <input type="text"/>    
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
                        <input type="text"/>    
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
                        <input type="text"/>    
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
                        <input type="text"/>    
                    </div>
                </div>
            </div>
        </div>
        {/* ComponentEditProfile */}
      </div>
    )
  }
}

export default ComponentEditProfile;