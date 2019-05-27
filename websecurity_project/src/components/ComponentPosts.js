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

<<<<<<< HEAD
=======
    componentDidMount() {
        // console.log(axios)
        // store.dispatch(fetchPosts);
        axios.get('https://pedros.tech:8080/posts/all')
                    .then(res => console.log('9999 posts: ', res))
                    .catch((error) => console.log('fetch error: ', error));
        // localhost/8080:post
        // axios.get('/posts')
        // .then(function (response) {
        //     // handle success
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })
        // .then(function () {
        //     // always executed
        // });
    }

>>>>>>> 078e0cafe45c48a7fe6a3b6fab82451ed7075306
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
