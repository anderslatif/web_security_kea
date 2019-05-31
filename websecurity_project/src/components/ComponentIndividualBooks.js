import React, { Component } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import samplePDF from '../dreamcatcher.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ComponentIndividualBooks extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    window.onkeydown = this.props.switchPages;
  }
  render(props) {
    let { 
        numPages,
        pageNumber,
        nextPage,
        previousPage,
        onDocumentLoadSuccess,
        // changePages
    } = this.props;
    return (
      <div className="componentIndividualBooks">
        <button className="changeLeftPages" type="button" disabled={pageNumber <= 1} onClick={previousPage} >
          Previous
        </button>
        <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <button className="changeRightPages" type="button" disabled={pageNumber >= numPages} onClick={nextPage} >
          Next
        </button>
        {/* <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p> */}
        {/* </div> */}
      </div>
    )
  }
}

export default ComponentIndividualBooks;