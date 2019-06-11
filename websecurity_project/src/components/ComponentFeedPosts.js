/*eslint-disable*/
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import ComponentIndividualFeedPosts from "./ComponentIndividualFeedPosts";
// import moment from "moment";
import { connect } from "react-redux";
import { actionCreateReview } from "../actions/postActions";

class ComponentFeedPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            review: "",
            bookId: "",
            userId: ""
        }
        this.getReviewDatas = this.getReviewDatas.bind(this);
        this.submitReviewDatas = this.submitReviewDatas.bind(this);
    }
    getReviewDatas = (ev) => {
        let reviewValue = ev.target.value;
        let bookId = ev.target.getAttribute("bookId");
        let userId = ev.target.getAttribute("userId");
        this.setState(() => {
            return {
                review: reviewValue,
                bookId,
                userId
            }
        })
        // this.setState({review: reviewValue})
    }
    submitReviewDatas = (ev) => {
        ev.preventDefault();
        let { review, bookId, userId } = this.state;
        const datas = {
            review: review,
            bookId: bookId,
            userId: userId
            // userId: userId
            // bookId: bookId,
        }
        // console.log(datas);
        this.props.onCreateReview(datas);
        ev.target.elements.review.value = "";
    }
    render(props) {
        let { posts } = this.props;
        console.log(posts)
        return(
            <div className="componentFeedPosts">
                {/* ComponentFeedPosts */}
                {
                    posts 
                    ?
                    posts.map((posts, index) => {
                        return <ComponentIndividualFeedPosts 
                                    key={index} 
                                    // post={post}
                                    user={this.props.user}
                                    getReviewDatas={this.getReviewDatas}
                                    submitReviewDatas={this.submitReviewDatas}
                                    stateValue={this.state}
                                    posts={posts}
                                />
                    })
                    :
                    "No posts"
                }
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         posts: state.posts,
//         user: state.user
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateReview: review => {
            dispatch(actionCreateReview(review))
        }
    }
}

export default connect(null, mapDispatchToProps)(ComponentFeedPosts);