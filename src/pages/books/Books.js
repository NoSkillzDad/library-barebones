import {useEffect, useReducer, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Book from "../bookdetails/Book";
import "./Books.scss"

const Books = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [books, setBooks] = useState([]);

    const [redirected, isRedirected] = useState(false);


    const getBook = async (id) => {
        try {
            const bookDetails = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setBooks(bookDetails.data);
        } catch (e) {
            navigate(`/booknotfound/${e.response.status}`);
        }
    }
    const getAllBooks = async () => {
        try {
            const bookDetails = await axios.get('https://jsonplaceholder.typicode.com/posts/');
            setBooks(bookDetails.data);
        } catch (e) {
            navigate(`/booknotfound/${e.response.status}`);
        }
    }

    const handleClick = () => {
        isRedirected(true);
    }

    const rederAllBooks = () => {
        return books.map((book) => (
            <Link to={`/books/${book.id}`}>
                <div key={book.id} onClick={handleClick}>
                    {book.id}. {book.title}
                </div>
            </Link>
        ));
    }

    useEffect(() => {
        if (typeof id === 'undefined') {
            getAllBooks();
        } else {
            if (id > 0) getBook(id);
        }
    }, [redirected]);

    return (
        <>
            {id &&
                <>
                    <div className={"all-container"}>
                        <Book
                            id={books.id}
                            title={books.title}
                            body={books.body}/>
                    </div>
                </>
            }
            {!id &&
                <>
                    <div className={"list-container"}>
                        {rederAllBooks()}
                    </div>
                </>
            }


        </>
    );
};

export default Books;