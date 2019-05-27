import React, { Component } from 'react';
import ComponentPostsElement from './ComponentPostsElement';
import axios from 'axios';
import { fetchPosts } from '../actions/postActions';
import { dispatch } from 'redux';
import { connect } from 'react-redux';

class PageProfilePosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(props) {
        let { personalPosts } = this.props;
        return (
            <div className="componentPosts">
                {/* ComponentPosts */}
                {
                    personalPosts.map((post, index) => {
                        return <ComponentPostsElement 
                            key={index} 
                            post={post}
                        />;
                    })
                }
            </div>
        );
    }
}

export default PageProfilePosts;
