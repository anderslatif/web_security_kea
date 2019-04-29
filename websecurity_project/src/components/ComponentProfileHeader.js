import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ComponentEditCover from './ComponentEditCover';

class ComponentProfileHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editFileCover: "",
      acceptCoverState: false
    }
    this.getEditCover = this.getEditCover.bind(this);
    this.toggleAcceptCover = this.toggleAcceptCover.bind(this);
    this.openFileInput = this.openFileInput.bind(this);
    this.acceptEditCover = this.acceptEditCover.bind(this);
  }
  getEditCover = (ev) => {
    const file = ev.target.files[0];
    const inputName = ev.target.name;

    if(file) {
        const filereader = new FileReader();
        filereader.onload = (e) => {
            this.setState({editFileCover: e.target.result})
        }
        filereader.readAsText(file);
    }
    // this.setState((prevState) => ({editCoverState: !prevState.editCoverState}))
  };
  toggleAcceptCover = () => {
    // this.setState((prevState) => ({acceptCoverState: !prevState.acceptCoverState}));
    // this.editCoverInput.click()
    this.setState({acceptCoverState: true})
  }

  openFileInput = (e) => {
    this.editCoverInput.click();
    // toggleAcceptCover();
  }

  acceptEditCover() {
    this.openFileInput();
    // if(this.state.editFileCover) {
      this.toggleAcceptCover();
    // }
  }
  render() {
    let { handleChatState } = this.props;
    return (
      <div className="componentProfileHeader">
        {/* {
          this.state.editCoverState
          &&
          <ComponentEditCover></ComponentEditCover>
        } */}
        <div className="componentProfileHeader--cover">
            <img src="./image/cover__image3.jpg" alt="cover__image" />
            {
              this.state.acceptCoverState 
              &&
              <button 
                onClick={this.toggleAcceptCover} 
                className="acceptEditCover"
              >
              Accept Cover
              </button>
            }
            <button onClick={this.acceptEditCover} className="selectEditCover">
                <svg>
                    <use href="./image/sprite.svg#icon-edit"></use>
                </svg>
                <span>Edit Cover</span>
                <input 
                  type="file" 
                  id="editCoverInput" 
                  ref={(ref) => this.editCoverInput = ref} 
                  // value={this.state.editFileCover}
                  onChange={this.getEditCover}
                  style={{display: "none"}}
                />
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
