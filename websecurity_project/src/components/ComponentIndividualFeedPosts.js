/*eslint-disable*/
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ComponentIndividualFeedPosts extends Component {
    componentDidMount() {
    }
    render(props) {
        let { post, user } = this.props;
        let book = post.book;
        return(
            <div className="componentIndividualFeedPosts">
                <div className="componentIndividualFeedPosts--wrapper">
                    <div className="feedpost__header">
                        <div className="feedpost__header--user">
                            <div className="imgFeedUsers">
                                <img src={user.user_profile} alt="image__profile" />
                            </div>
                            <div className="datesFeedUsers">
                                <h2>
                                    {
                                        user.user_profile ? user.user_profile : "No username"
                                    }
                                    {/* {post.user.username} */}
                                </h2>
                                <p>{user.location}</p>
                            </div>
                        </div>
                        <div className="feedpost__header--timestamp">
                            <p>
                                {
                                    book.postDate ? book.postDate : "No timestamp"
                                }
                                {book.postDate}
                            </p>
                        </div>
                    </div>
                    <div className="feedpost__description">
                        <p>
                            {
                                book.postDescription ? book.postDescription : "No description"
                            }
                            {book.postDescription}
                        </p>
                    </div>
                    <div className="feedpost__content">
                        {/* <img src={book.cover} alt="book__cover" /> */}
                        <img src={book.cover ? book.cover : "https://core.trac.wordpress.org/raw-attachment/ticket/45927/placeholder-image-portrait.png"} alt="book__cover" />
                    </div>
                    <div className="feedpost__datas">
                        <div className="feedpost__datas--information">
                            <h2>
                                {
                                    book.title ? book.title : "No title"
                                }
                                {/* {book.title} */}
                            </h2>
                            <p>
                                {
                                    book.author ? book.author : "No author"
                                }
                                {/* {book.author} */}
                            </p>
                        </div>
                    </div>
                    {/* <div className="feedpost__like-comment">
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
                    </div> */}
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