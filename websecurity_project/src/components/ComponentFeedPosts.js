import React, { Component } from "react";
import { Link } from "react-router-dom";
import ComponentIndividualFeedPosts from "./ComponentIndividualFeedPosts";
import moment from "moment";

const feedTestPosts = [
    {
        user: {
            username: "User1",
            user_profile: "./image/profile__image.jpg",
            location: "country1",
            id: 1
        },
        book: {
            title: "title1",
            author: "author1",
            cover: "./image/book__cover1.jpg",
            postDate: moment().format("D MMM YYYY"),
            postDescription: "this is just a simple test for the books description",
            id: 1
        }
    },
    {
        user: {
            username: "User2",
            user_profile: "./image/profile__image.jpg",
            location: "country1",
            id: 2
        },
        book: {
            title: "title2",
            author: "author2",
            cover: "./image/book__cover2.jpg",
            postDate: moment().format("D MMM YYYY"),
            postDescription: "this is just a simple test for the books description",
            id: 2
        }
    }
];

class ComponentFeedPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: feedTestPosts
        }
    }
    componentDidMount() {
        // console.log(this.state.posts[0]);
    }
    render() {
        return(
            <div className="componentFeedPosts">
                {/* ComponentFeedPosts */}
                {
                    this.state.posts.map((post, index) => {
                        return <ComponentIndividualFeedPosts key={index} post={post}/>
                    })
                }
            </div>
        );
    }
}

export default ComponentFeedPosts;