import React, { Component } from 'react';
import ComponentHeader from "../components/ComponentHeader";
import ComponentIndividualBooks from '../components/ComponentIndividualBooks';
import ComponentBookInformation from '../components/ComponentBookInformation';
import ComponentReviews from '../components/ComponentReviews';
import PageLoader from '../components/PageLoader';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// const styleBlackHeader = {
//     color:"white",
//     backgroundColor:"black"
// }

class PageBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookReviewsPanel: false,
      loader: true,
      numPages: null,
      pageNumber: 1,
    }
    this.toggleBookReviewsPanel = this.toggleBookReviewsPanel.bind(this)
    this.closeReviewComponent = this.closeReviewComponent.bind(this)
    this.switchPages = this.switchPages.bind(this);
  }
  // state = {
  //   numPages: null,
  //   pageNumber: 1,
  // }

  toggleBookReviewsPanel = () => {
    this.setState((prevState) => ({bookReviewsPanel: !prevState.bookReviewsPanel}))
  }

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
      pageNumber: 22,
    });
  };

  changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
  }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);
  
  changePages = (ev) => {
    const pressedKey = ev.keyCode;
    // console.log(pressedKey)
    if(pressedKey === "37") {
      // console.log("left");
      this.changePage(-1);
    } else if(pressedKey === "39") {
      // console.log("right");
      this.changePage(1);
    }
  }

  switchPages = (ev) => {
    if(ev.keyCode === "37") {
      // console.log("left");
      this.changePage(-1);
    }
  }

  closeReviewComponent = () => {
    document.querySelector(".component__reviews").className = "slideback__reviews";
    setTimeout(() => {
      this.setState({bookReviewsPanel: false})
    }, 1400)
  }
  
  componentDidMount() {
    // window.onkeydown ? 
    // window.onkeydown = this.switchPages();
    setTimeout(() => {
      this.setState({loader: false})
    }, 2200)
  }
  render(props) {
    const { numPages, pageNumber } = this.state;
    const activeBooks = this.props.personalPosts.filter((book) => {
      return book.id === this.props.match.params.bookid
    })
    return (
      <div className="page__book">
      {
        this.state.loader
        &&
        <PageLoader />
      }
        <NavLink to="/profile/posts" className="redirectToPosts">
          <svg>
            <use href="./image/sprite.svg#icon-books"></use>
          </svg>
        </NavLink>
      {/* <ComponentHeader></ComponentHeader> */}
      <div className="page__book--content">
        <div className="page__book--content--cover">
          <ComponentBookInformation 
            toggleBookReviewsPanel={this.toggleBookReviewsPanel}
          />
          {
            this.state.bookReviewsPanel
            &&
            <ComponentReviews 
              closeReviewComponent={this.closeReviewComponent}
              reviews={activeBooks.reviews} 
            />
          }
        </div>
        <div className="page__book--content--document"
          onKeyPress={this.changePages}
        >
          <ComponentIndividualBooks
            numPages={this.state.numPages}
            pageNumber={this.state.pageNumber}
            // pageNumber={pageNumber}
            nextPage={this.nextPage}
            previousPage={this.previousPage}
            // changePages={this.changePages}
            onDocumentLoadSuccess={this.onDocumentLoadSuccess}
            // switchPages={this.switchPages}
          >
          </ComponentIndividualBooks>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    personalPosts: state.personalPosts
  }
}

export default connect(mapStateToProps)(PageBook);