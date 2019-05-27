import React, { Component } from 'react';
import moment from "moment";
import ComponentIndividualReview from './ComponentIndividualReview';

const testReviewsLists = [
  // {
  //   userName: "Jim Hopkins",
  //   userImage: "https://via.placeholder.com/150C/O https://placeholder.com/",
  //   userReview: "Great book!",
  //   reviewDates: moment().format("D. MM. YYYY"),
  //   reviewId: 1
  // },
  // {
  //   userName: "Cosmin Burlacu",
  //   userImage: "./image/profile__image.jpg",
  //   userReview: "I totally recommend this book",
  //   reviewDates: moment().format("D. MM. YYYY"),
  //   reviewId: 2
  // },
  // {
  //   userName: "user__review1",
  //   userImage: "https://via.placeholder.com/150C/O https://placeholder.com/",
  //   userReview: "Great book to read in a moody day.",
  //   reviewDates: moment().format("D. MM. YYYY"),
  //   reviewId: 1
  // },
  // {
  //   userName: "user__review2",
  //   userImage: "./image/profile__image.jpg",
  //   userReview: "this is just a review",
  //   reviewDates: moment().format("D. MM. YYYY"),
  //   reviewId: 2
  // },
  // {
  //   userName: "user__review2",
  //   userImage: "./image/profile__image.jpg",
  //   userReview: "this is just a review",
  //   reviewDates: moment().format("D. MM. YYYY"),
  //   reviewId: 2
  // }
];

class ComponentReviews extends Component {
  render(props) {
    let { closeReviewComponent } = this.props;
    let { reviews } = this.props;
    return (
      <div className="component__reviews">
        <button className="close__reviews" onClick={closeReviewComponent}>
          <svg>
            <use href="./image/sprite.svg#icon-cross"></use>
          </svg>
        </button>
        <div className="component__reviews--wrapper">
          <div className="reviews__title">
            <h2>Reviews</h2>
            <p>{testReviewsLists.length} persons added a comment for this book</p>
          </div>
          <div className="reviews__content">
            {
              reviews.map((review) => {
                return <ComponentIndividualReview key={review.reviewId} review={review} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ComponentReviews;