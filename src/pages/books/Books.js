import {useEffect, useReducer, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Book from "../bookdetails/Book";
import "./Books.scss"

const Books = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [book, setBook] = useState([]);

    // const [redirected, isRedirected] = useState(false);

// Commented out to use my fake API instead
//     const getBook = async (id) => {
//         try {
//             const bookDetails = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//             setBook(bookDetails.data);
//         } catch (e) {
//             navigate(`/booknotfound/${e.response.status}`);
//         }
//     }
//     const getAllBooks = async () => {
//         try {
//             const bookDetails = await axios.get('https://jsonplaceholder.typicode.com/posts/');
//             setBooks(bookDetails.data);
//         } catch (e) {
//             navigate(`/booknotfound/${e.response.status}`);
//         }
//     }
    
    
    const getBook = async (id) => {
        try {
            const bookDetails = await axios.get(`http://localhost:3000/books/${id}`);
            setBook(bookDetails.data);
        } catch (e) {
            navigate(`/booknotfound/${e.response.status}`);
        }
    }
    
    const getAllBooks = async () => {
        try {
            const bookDetails = await axios.get('http://localhost:3000/books');
            setBooks(bookDetails.data);
        } catch (e) {
            navigate(`/booknotfound/${e.response.status}`);
        }
    }

    // const handleClick = () => {
    //     isRedirected(true);
    // }

    const renderTitle = (title) => {
        return (title.length > 18) ? title.substring(0, 15) + "..." : title;
    }

    const renderAllBooks = () => {
        return books.map((book, index) => (
            // <div className={"book-item"}>
                <Link to={`/books/${book.id}`} id={index}>
                    {book.id}. {renderTitle(book.title)}
                </Link>
            // </div>
        ));
    }

    useEffect(() => {
        if (typeof id === 'undefined') {
            getAllBooks();
        } else {
            if (id > 0) getBook(id);
        }
    }, [books, book]);

    return (
        <>
            {id &&
                <>
                    <div className={"all-container"}>
                        <Book
                            id={book.id}
                            title={book.title}
                            excerpt={book.excerpt}
                            authors={book.authors}
                            filename={book.filename}/>
                            {/*body={book.body}/>*/}
                    </div>
                </>
            }
            {!id &&
                <div className={"all-books-container"}>
                    <div className={"list-container"}>
                        {renderAllBooks()}
                    </div>
                </div>
            }


        </>
    );
};

export default Books;