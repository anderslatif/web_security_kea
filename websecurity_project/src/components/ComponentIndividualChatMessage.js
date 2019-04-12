import React, { Component } from "react";

class ComponentIndividualChatMessage extends Component {
    render(props) {
        let { message } = this.props;
        return(
            <div className="componentIndividualChatMessage">
                <p>{message}</p>
                {/* ComponentIndividualChatMessage */}
            </div>
        );
    }
}

export default ComponentIndividualChatMessage;