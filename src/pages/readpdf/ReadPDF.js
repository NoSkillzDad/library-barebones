import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';
import {useParams} from "react-router-dom";
import {useState} from "react";
import './ReadPDF.scss';

const ReadPdf = () => {

    const {filename} = useParams();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

// TODO make react-pdf work

    return (
        <div className={"pdf-container"}>
            <div className={"pdf-document"}>
                <Document file={"/library/" + filename} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber}/>
                </Document>
                <div className={"pdf-page-nav-wrapper"}>
                    <div className={"pdf-buttons"}>
                        <p>
                            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                        </p>
                        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                            Previous
                        </button>
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadPdf;