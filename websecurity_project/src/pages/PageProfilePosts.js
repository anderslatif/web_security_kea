import React, { Component } from "react";
import ComponentHeader from "../components/ComponentHeader";
import ComponentProfileHeader from "../components/ComponentProfileHeader";
import ComponentPosts from "../components/ComponentPosts";
import axios from "axios";
import { connect } from "react-redux";

class PageProfilePosts extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render(props) {
        return(
            <div className="pageProfilePosts">
                <ComponentHeader></ComponentHeader>
                <div className="page__profile--content">
                    <ComponentProfileHeader></ComponentProfileHeader>
                </div>
                <ComponentPosts personalPosts={this.props.personalPosts} />
                {/* PageProfilePosts */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        personalPosts: state.personalPosts
    }
}

export default connect(mapStateToProps)(PageProfilePosts);
