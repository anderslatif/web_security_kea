import React, { Component } from 'react'
import ComponentHeader from "../components/ComponentHeader";
import ComponentCreatePosts from '../components/ComponentCreatePosts';
import ComponentFeedCardProfile from '../components/ComponentFeedCardProfile';
import ComponentFeedNavigation from '../components/ComponentFeedNavigation';
import ComponentFeedPosts from "../components/ComponentFeedPosts";

class PageFeed extends Component {
  render() {
    return (
      <div className="page__feed">
        <ComponentHeader />
        <div className="page__feed--wrapper">
            <ComponentFeedCardProfile />
            <div className="feed__areas">
                <ComponentCreatePosts />
                <ComponentFeedPosts />
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

export default PageFeed;