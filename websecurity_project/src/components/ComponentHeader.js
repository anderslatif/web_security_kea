import React, { Component } from 'react'
import { Link } from "react-router-dom";

class ComponentHeader extends Component {
  render() {
    return (
      <div className="component__header">
        <div className="component__header--wrapper">
            <div className="left__header">
                <div className="left__header--logos">
                    <Link to="/profile">BookShelf</Link>
                </div>
                <div className="divider__element"></div>
                <div className="left__header--search">
                    <svg>
                        <use href="./image/sprite.svg#icon-search"></use>
                    </svg>
                </div>
            </div>
            <div className="right__header">
                <div className="right__header--notifications">
                    <svg>
                        <use href="./image/sprite.svg#icon-notifications_none"></use>
                    </svg>
                </div>
                <div className="right__header--profile">
                    <Link to="/profile">
                        <img src="./image/profile__image.jpg" alt="profile__image" />
                    </Link>
                </div>
            </div>
        </div>
        {/* ComponentHeader */}
      </div>
    )
  }
}

export default ComponentHeader;