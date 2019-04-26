import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <div className="pageNotFound">
            <div className="pageNotFound--title">
                <h2>404</h2>
                <p>page not found</p>
            </div>
            <div className="pageNotFound--subtitle">
                <p>It's a desert</p>
                <p>Nothing to see here</p>
            </div>
            <div className="pageNotFound--redirect">
                <NavLink to="/login">Redirect</NavLink>
            </div>
      </div>
    )
  }
}

export default PageNotFound;