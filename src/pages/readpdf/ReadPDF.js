import {Document, Page} from 'react-pdf';
import {useParams} from "react-router-dom";
import {useState} from "react";

const ReadPdf = () => {

    const {filename} = useParams();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    function onDocumentLoadSuccess({ numPages }) {
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

//pdf = filename

    return (
        <>
            <Document file={"/library/" + filename} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <div>
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

        </>
    );
};

export default ReadPdf;