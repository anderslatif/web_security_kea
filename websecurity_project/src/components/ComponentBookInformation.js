import React, { Component } from 'react'

class ComponentBookInformation extends Component {
  render(props) {
    let { toggleBookReviewsPanel } = this.props;
    return (
      <div className="componentBookInformation">
        <div className="componentBookInformation--wrapper">
            <div className="componentBookInformation--wrapper--datas">
                <div>
                    <h2>Book title</h2>
                    <p>Book author</p>
                </div>
            </div>
            <div className="componentBookInformation--wrapper--cover">
                <img src="./image/book__cover2.jpg" alt="book__cover" />
            </div>
        </div>
        <button className="activateReviewsPanel" onClick={toggleBookReviewsPanel}>
            <svg>
                <use href="./image/sprite.svg#icon-comments"></use>
            </svg>
        </button>
      </div>
    )
  }
}

export default ComponentBookInformation;