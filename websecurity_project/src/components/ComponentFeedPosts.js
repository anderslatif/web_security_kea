import React, { Component } from "react";
import { Link } from "react-router-dom";
import ComponentIndividualFeedPosts from "./ComponentIndividualFeedPosts";
import moment from "moment";
import { connect } from "react-redux";

class ComponentFeedPosts extends Component {
    render(props) {
        return(
            <div className="componentFeedPosts">
                {/* ComponentFeedPosts */}
                {
                    this.props.posts 
                    &&
                    this.props.posts.map((post, index) => {
                        return <ComponentIndividualFeedPosts key={index} post={post}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(ComponentFeedPosts);