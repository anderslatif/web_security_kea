import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionSignOut } from "../actions/userActions";

class ComponentHeader extends Component {
  constructor(props) {
      super(props)
  }
  signOutAction = () => {
      this.props.onSignOut();
  }
  render(props) {
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
                <div className="right__header--signout">
                    <button onClick={this.signOutAction}>SignOut</button>
                </div>
                <div className="right__header--notifications">
                    <svg>
                        <use href="./image/sprite.svg#icon-notifications_none"></use>
                    </svg>
                </div>
                <div className="right__header--profile">
                    <Link to="/profile">
                        <img src={
                            this.props.profileImage ? this.props.profileImage : "http://www.printpixelz.com/images/product/book-square-front-printpixelz.jpg"
                        } alt="profile__image" />
                    </Link>
                        {this.props.profileImage}
                </div>
            </div>
        </div>
        {/* ComponentHeader */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignOut: () => {
            dispatch(actionSignOut())
        }
    }
}

const mapStateToProps = state => {
    return {
        profileImage: state.user.profileImage,
        email: state.user.email,
        country: state.user.country,
        socialNetwork: state.user.socialNetwork
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentHeader);