import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ComponentFeedCardProfile extends Component {
  render(props) {
    let { id, name, image, country } = this.props.user;
    let postsNumber = this.props.user.books.length;
    return (
      <div className="componentFeedCardProfile">
        <div className="componentFeedCardProfile--wrapper">
            <div className="user__datas">
                <div className="user__datas--image">
                    <img src={image} alt="profile__image" />
                </div>
                <p className="user__datas--username">{name}</p>
                <p className="user__datas--country">{country}</p>
            </div>
            <div className="profile__datas">
                <h2>{postsNumber} posts</h2>
            </div>
            <div className="view__profile">
                <Link to="/profile">View Profile</Link>
            </div>
        </div>
        {/* ComponentFeedCardProfile */}
      </div>
    )
  }
}

export default ComponentFeedCardProfile;