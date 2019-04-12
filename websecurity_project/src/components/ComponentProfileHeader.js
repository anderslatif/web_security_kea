import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class ComponentProfileHeader extends Component {
  render() {
    let { handleChatState } = this.props;
    return (
      <div className="componentProfileHeader">
        <div className="componentProfileHeader--cover">
            <img src="./image/cover__image3.jpg" alt="cover__image" />
            <button>
                <svg>
                    <use href="./image/sprite.svg#icon-edit"></use>
                </svg>
                <span>Edit Cover</span>
            </button>
        </div>
        <div className="componentProfileHeader--navigation">
            {/* <div></div> */}
            <div className="componentProfileHeader--navigation--profile">
                <img src="./image/profile__image.jpg" alt="profile__image" />
            </div>
            <div className="componentProfileHeader--navigation--links">
                <NavLink activeClassName="activeSubRoute" exact={true} to="/profile/">About</NavLink>
                <NavLink activeClassName="activeSubRoute" exact={true} to="/profile/posts">Posts</NavLink>
                <NavLink activeClassName="activeSubRoute" exact={true} to="/feed">Feed</NavLink>
                <button 
                  className="toggleChatElement"
                  onClick={handleChatState}
                >
                Chats
                </button>
            </div>
        </div>
        {/* componentProfileHeader */}
      </div>
    )
  }
}

export default ComponentProfileHeader;
