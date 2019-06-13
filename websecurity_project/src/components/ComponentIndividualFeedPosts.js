/*eslint-disable*/
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ComponentIndividualFeedPosts extends Component {
    componentDidMount() {
        console.log(this.props.posts)
    }
    render(props) {
        // let { post, user } = this.props;
        // let book = post.book;
        let { posts } = this.props;
        return(
            <div className="componentIndividualFeedPosts">
                <div className="componentIndividualFeedPosts--wrapper">
                    <div className="feedpost__header">
                        <div className="feedpost__header--user">
                            <div className="imgFeedUsers">
                                {/* <img src={user.user_profile} alt="image__profile" /> */}
                            </div>
                            <div className="datesFeedUsers">
                                <h2>
                                    {/* {
                                        user.user_profile ? user.user_profile : "No username"
                                    } */}
                                </h2>
                                {/* <p>{user.location}</p> */}
                            </div>
                        </div>
                        <div className="feedpost__header--timestamp">
                            <p>
                                {
                                    this.props.posts.postDate ? posts.postDate : "No timestamp"
                                }
                                {/* {this.props.posts.postDate} */}
                            </p>
                        </div>
                    </div>
                    <div className="feedpost__description">
                        <p>
                            {
                                this.props.posts.description ? posts.description : "No description"
                            }
                        </p>
                    </div>
                    <div className="feedpost__content">
                        {/* <img src={book.cover} alt="book__cover" /> */}
                        {/* <img src={book.cover ? book.cover : "https://core.trac.wordpress.org/raw-attachment/ticket/45927/placeholder-image-portrait.png"} alt="book__cover" /> */}
                    </div>
                    <div className="feedpost__datas">
                        <div className="feedpost__datas--information">
                            <h2>
                                {
                                    this.props.posts.title ? posts.title : "No title"
                                }
                            </h2>
                            <p>
                                {
                                    this.props.posts.author ? posts.author : "No author"
                                }
                            </p>
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