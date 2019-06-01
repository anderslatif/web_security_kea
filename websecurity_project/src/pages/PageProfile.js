/*eslint-disable*/
import React, { Component } from 'react'
import ComponentHeader from '../components/ComponentHeader';
import ComponentProfileHeader from '../components/ComponentProfileHeader';

class PageProfile extends Component {
  render() {
    return (
      <div className="page__profile">
        <ComponentHeader></ComponentHeader>
        <div className="page__profile--content">
            <ComponentProfileHeader></ComponentProfileHeader>
        </div>
        {/* PageProfile */}
      </div>
    )
  }
}

export default PageProfile;