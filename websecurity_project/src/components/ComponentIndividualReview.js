import React, { Component } from 'react'

class ComponentIndividualReview extends Component {
  render() {
    let { review } = this.props;
    return (
      <div className="componentIndividualReview">
        <div className="componentIndividualReview--image">
            <img src={review.userImage} alt="user__image" />
        </div>
        <div className="componentIndividualReview--content">
            <div className="reviewIndividual__username">
                <h2>{review.userName}</h2>
            </div>
            <div className="reviewIndividual__reviewDates">
                <svg>
                    <use href="./image/sprite.svg#icon-calendar"></use>
                </svg>
                <p>{review.reviewDates}</p>
            </div>
            <div className="reviewIndividual__reviewContent">
                <p>{review.userReview}</p>
            </div>
        </div>
            {/* ComponentIndividualReview */}
      </div>
    )
  }
}

export default ComponentIndividualReview;