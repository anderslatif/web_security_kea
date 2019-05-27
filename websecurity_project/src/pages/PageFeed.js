import React, { Component } from 'react'
import ComponentHeader from "../components/ComponentHeader";
import ComponentCreatePosts from '../components/ComponentCreatePosts';
import ComponentFeedCardProfile from '../components/ComponentFeedCardProfile';
import ComponentFeedNavigation from '../components/ComponentFeedNavigation';
import ComponentFeedPosts from "../components/ComponentFeedPosts";
import { connect } from "react-redux";

class PageFeed extends Component {
  render(props) {
    // let { posts, user, personalPosts } = this.props;
    return (
      <div className="page__feed">
        <ComponentHeader />
        <div className="page__feed--wrapper">
            <ComponentFeedCardProfile 
              user={this.props.user} 
              personalPosts={this.props.personalPosts}
              />
            <div className="feed__areas">
                <ComponentCreatePosts />
                <ComponentFeedPosts posts={this.props.posts} />
                {/* <div style={{height:"1000rem"}}></div> */}
            </div>
            <div>
                <ComponentFeedNavigation />
            </div>
        </div>
        {/* PageFeed */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    user: state.user,
    personalPosts: state.personalPosts
  }
}

export default connect(mapStateToProps)(PageFeed);