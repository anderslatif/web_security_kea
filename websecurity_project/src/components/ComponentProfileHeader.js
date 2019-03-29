import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class ComponentProfileHeader extends Component {
  render() {
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
                <NavLink activeClassName="activeSubRoute" to="/profile/about">About</NavLink>
                <NavLink activeClassName="activeSubRoute" to="/profile/posts">Posts</NavLink>
            </div>
        </div>
        {/* componentProfileHeader */}
      </div>
    )
  }
}

export default ComponentProfileHeader;
