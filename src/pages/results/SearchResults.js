import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

const SearchResults = () => {

    const {id} =  useParams();

    const navigate = useNavigate();

    const [book, setBook] = useState([]);

    const getBook = async (id) => {
        try {
            const bookDetails = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setBook(bookDetails.data);
        } catch (e) {
            navigate(`/booknotfound/${e.response.status}`);
        }
    }

    useEffect(() => {
        getBook(id);
    }, []);

    return (
        <>


        </>
    );
};

export default SearchResults;