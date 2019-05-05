import React, { Component } from 'react'

class ComponentProfileImageApproval extends Component {
  render(props) {
    let { toggleImageApproval } = this.props;
    return (
      <div className="componentProfileImageApproval">
        <button 
            className="componentProfileImageApproval__approve"
            onClick={() => {}}
        >
        Yes
        </button>
        <button 
            className="componentProfileImageApproval__reject"
            onClick={toggleImageApproval}
        >
        No
        </button>
        {/* componentProfileImageApproval */}
      </div>
    )
  }
}

export default ComponentProfileImageApproval;