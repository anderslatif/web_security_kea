import React, { Component } from "react";
import { Link } from "react-router-dom";

class ComponentIndividualFeedPosts extends Component {
    // constructor(props) {
    //     super(props)
    //     // this.state = {
    //     //     review: "",
    //     //     bookId: "",
    //     //     userId: ""
    //     // }
    //     // this.getReviewDatas = this.getReviewDatas.bind(this);
    //     // this.submitReviewDatas = this.submitReviewDatas.bind(this);
    // }
    componentDidMount() {
        // console.log(this.props.post.book);
    }
    // getReviewDatas = (ev) => {
    //     let reviewValue = ev.target.value;
    //     let bookId = ev.target.getAttribute("bookId");
    //     let userId = ev.target.getAttribute("userId");
    //     this.setState(() => {
    //         return {
    //             review: reviewValue,
    //             bookId,
    //             userId
    //         }
    //     })
    //     // this.setState({review: reviewValue})
    // }
    // submitReviewDatas = (ev) => {
    //     ev.preventDefault();
    //     let { review, bookId, userId } = this.state;
    //     const datas = {
    //         review: review,
    //         bookId: bookId,
    //         userId: userId
    //         // userId: userId
    //         // bookId: bookId,
    //     }
    //     console.log(datas);
    //     ev.target.elements.review.value = "";
    // }
    render(props) {
        // let { post } = this.props;
        
        
        // let book = post.book;
        // let user = post.user;



        // const convertedTimeStamp = book.postDate
        return(
            <div className="componentIndividualFeedPosts">
                <div className="componentIndividualFeedPosts--wrapper">
                    <div className="feedpost__header">
                        <div className="feedpost__header--user">
                            <div className="imgFeedUsers">
                                <img src="{user.user_profile}" alt="image__profile" />
                            </div>
                            <div className="datesFeedUsers">
                                <h2>{"user.username"}</h2>
                                <p>{"user.location"}</p>
                            </div>
                        </div>
                        <div className="feedpost__header--timestamp">
                            <p>{"book.postDate"}</p>
                        </div>
                    </div>
                    <div className="feedpost__description">
                        <p>{"book.postDescription"}</p>
                    </div>
                    <div className="feedpost__content">
                        <img src="{book.cover}" alt="book__cover" />
                    </div>
                    <div className="feedpost__datas">
                        <div className="feedpost__datas--information">
                            <h2>{"book.title"}</h2>
                            <p>{"book.author"}</p>
                        </div>
                    </div>
                    <div className="feedpost__like-comment">
                        <div className="feedpost__likes">
                            <svg>
                                <use href="./image/sprite.svg#icon-favorite"></use>
                            </svg>
                            <p>14</p>
                        </div>
                        <div className="feedpost__comments">
                            <svg>
                                <use href="./image/sprite.svg#icon-message-square"></use>
                            </svg>
                            <p>14</p>
                        </div>
                    </div>
                    <div className="feedpost__reviews">
                        <form onSubmit={this.props.submitReviewDatas}>
                            <input 
                                value={this.props.stateValue.review} 
                                // bookId={book.id}
                                // userId={user.id}
                                onChange={this.props.getReviewDatas} 
                                name="review"
                            />
                        </form>
                    </div>
                    <div className="feedpost__readbooks">
                        <Link to="/profile/posts/books">Read Book</Link>
                    </div>
                </div>
                {/* ComponentIndividualFeedPosts */}
                {/* {user.username} */}
            </div>
        );
    }
}

export default ComponentIndividualFeedPosts;