import React, { Component } from "react";
import ComponentPostsElement from "./ComponentPostsElement";

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