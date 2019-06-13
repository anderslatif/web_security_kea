/*eslint-disable*/
import React, { Component } from 'react'
/*
Individual Book page ComponentBookinformation - it contains some data
about the accessed book - it appears only onMouseOver
*/

class ComponentBookInformation extends Component {
  render(props) {
    let { toggleBookReviewsPanel } = this.props;
    return (
      <div className="componentBookInformation">
        <div className="componentBookInformation--wrapper">
            <div className="componentBookInformation--wrapper--datas">
                <div className="book__infos">
                    <h2>Book title</h2>
                    <p className="book__infos--author">Book author</p>
                    <p className="book__infos--description">This is a test description for the test books</p>
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