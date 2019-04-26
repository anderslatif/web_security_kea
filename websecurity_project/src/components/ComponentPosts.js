import React, { Component } from "react";
import ComponentPostsElement from "./ComponentPostsElement";
import axios from "axios";

const postTests = [
    {
        name:"tests",
        title: "book title1",
        author: "book author1",
        rating: "5 stars",
        cover: "./image/book__cover1.jpg"
    },
    {
        name:"tests",
        title: "book title2",
        author: "book author2",
        rating: "5 stars",
        cover: "./image/book__cover2.jpg"
    },
    {
        name:"tests",
        title: "book title1",
        author: "book author1",
        rating: "5 stars",
        cover: "./image/book__cover1.jpg"
    },
    {
        name:"tests",
        title: "book title2",
        author: "book author2",
        rating: "5 stars",
        cover: "./image/book__cover2.jpg"
    },
    {
        name:"tests",
        title: "book title1",
        author: "book author1",
        rating: "5 stars",
        cover: "./image/book__cover1.jpg"
    }
];


class PageProfilePosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testPosts: postTests
        }
    }
    componentDidMount() {
        // localhost/8080:post
        axios.get('/posts')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
    render() {
        return(
            <div className="componentPosts">
                {/* ComponentPosts */}

                {
                    this.state.testPosts.map((post, index) => {
                        return <ComponentPostsElement key={index} post={post}/>
                    })
                }
            </div>
        );
    }
}

export default PageProfilePosts;