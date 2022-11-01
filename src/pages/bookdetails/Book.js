import "./Book.scss"
import {Link} from "react-router-dom";

// const Book = ({id, title, body}) => {
const Book = ({id, title, excerpt, authors, filename}) => {


    return (<>
            <div className={"book-details"}>

                <div className={"details-wrapper"}>
                    <div className={"title"}>
                        {/*<Link to={`/books/fullbook/${filename}`}>*/}
                        <Link to={`/library/${filename}`} target={"_blank"}>
                            {title}
                        </Link>
                    </div>
                    <div className={"book-content"}>
                        {/*{body}*/}
                        <h3>{authors}</h3>
                        <br/>
                        {excerpt}
                    </div>
                    <div className={"book-id"}>
                        Book id: {id}
                    </div>
                </div>
                {/*{renderBook(id)}*/}
            </div>
        </>
    );
};

export default Book;