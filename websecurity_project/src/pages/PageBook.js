import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import samplePDF from '../dreamcatcher.pdf';
import ComponentHeader from "../components/ComponentHeader";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class PageBook extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
      pageNumber: 1,
    });
  };

  changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
  }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  render() {
    const { numPages, pageNumber } = this.state;

    return (
      <div className="page__book">
      <ComponentHeader></ComponentHeader>
      <div className="page__book--content">
        <div className="page__book--content--cover">
        
        </div>
        <div className="page__book--content--document">
        <Document file={samplePDF} onLoadSuccess={this.onDocumentLoadSuccess} >
          <Page pageNumber={pageNumber} />
        </Document>
        {/* <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button type="button" disabled={pageNumber <= 1} onClick={this.previousPage} >
            Previous
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={this.nextPage} >
            Next
          </button>
        </div> */}
        </div>
      </div>
      </div>
    );
  }
}


export default PageBook;