/*eslint-disable*/
import React, { Component } from 'react'

class ComponentChangeProfileImage extends Component {
  render(props) {
    let { getProfileFileImage } = this.props;
    return (
      <div className="changeProfileImage">
        <button onClick={(ev) => this.profileImageFiles.click()}>
            <svg>
                <use href="./image/sprite.svg#icon-image"></use>
            </svg>
            <p>Change</p>
            <input
              ref={(ref) => this.profileImageFiles = ref}
              type="file"
              id="profileImageFiles"
              style={{display: "none"}} 
              name="profile"
              onChange={getProfileFileImage}
            />
        </button>
      </div>
    )
  }
}

export default ComponentChangeProfileImage;