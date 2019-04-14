import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ComponentEditCover from './ComponentEditCover';

class ComponentProfileHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editCoverState: false
    }
    this.toggleCoverState = this.toggleCoverState.bind(this);
  }
  toggleCoverState = () => {
    this.setState((prevState) => ({editCoverState: !prevState.editCoverState}))
  };
  render() {
    let { handleChatState } = this.props;
    return (
      <div className="componentProfileHeader">
        {
          this.state.editCoverState
          &&
          <ComponentEditCover></ComponentEditCover>
        }
        <div className="componentProfileHeader--cover">
            <img src="./image/cover__image3.jpg" alt="cover__image" />
            <button onClick={this.toggleCoverState}>
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
