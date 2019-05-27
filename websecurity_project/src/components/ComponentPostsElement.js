import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ComponentPostsElement extends Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        let { post } = this.props;
        return(
            <div className="componentPostsElement">
                <div className="componentPostsElement--wrapper">
                    <div className="componentPostsElement--wrapper--cover">
                        <img src={post.cover} alt="book__cover" />
                    </div>
                    <div className="componentPostsElement--wrapper--information">
                        <h2>{post.title}</h2>
                        <p>{post.author}</p>
                        <span>{post.rating}</span>
                        <NavLink to={`/profile/posts/${post.id}`}>Read</NavLink>
                    </div>
                </div>
                {/* ComponentPostsElement */}
            </div>
        );
    }
}

export default ComponentPostsElement;