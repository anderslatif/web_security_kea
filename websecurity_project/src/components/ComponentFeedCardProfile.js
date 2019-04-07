import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ComponentFeedCardProfile extends Component {
  render() {
    return (
      <div className="componentFeedCardProfile">
        <div className="componentFeedCardProfile--wrapper">
            <div className="user__datas">
                <div className="user__datas--image">
                    <img src="./image/profile__image.jpg" alt="profile__image" />
                </div>
                <p className="user__datas--username">User Name</p>
                <p className="user__datas--country">Country</p>
            </div>
            <div className="profile__datas">
                <h2>445 posts</h2>
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