import React, { Component } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import samplePDF from '../dreamcatcher.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ComponentIndividualBooks extends Component {
  render(props) {
    let { 
        numPages,
        pageNumber,
        nextPage,
        previousPage,
        onDocumentLoadSuccess
    } = this.props;
    return (
      <div className="componentIndividualBooks">
        <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        {/* <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button type="button" disabled={pageNumber <= 1} onClick={previousPage} >
            Previous
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={nextPage} >
            Next
          </button>
        </div> */}
      </div>
    )
  }
}

export default ComponentIndividualBooks;