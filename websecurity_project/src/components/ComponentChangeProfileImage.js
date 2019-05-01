import React, { Component } from 'react'

class ComponentChangeProfileImage extends Component {
  render() {
    return (
      <div className="changeProfileImage">
        <button>
            <svg>
                <use href="./image/sprite.svg#icon-image"></use>
            </svg>
            <p>Change</p>
            <input type="file" style={{display: "none"}} />
        </button>
      </div>
    )
  }
}

export default ComponentChangeProfileImage;