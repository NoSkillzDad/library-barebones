import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import "./Searchbar.scss"

const SearchBar = () => {

    const navigate = useNavigate();

    // const [bookId, setBookId] = useState();
    const inputRef = useRef();


    // const handleChange = (e) => {
    //     setBookId(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value; //added 2nd time


        if (value < 0 || value > 50) {
            alert("Enter a valid Book id (0-50)");
            return;
        }
        navigate(`/books/${value}`);

        // if (bookId < 1 || bookId > 100) {
        //     alert("Enter a valid Book id (1-100)");
        //     return;
        // }
        // navigate(`/books/${bookId}`);
    }

    return (<>
            <form className={"search-container"} onSubmit={handleSubmit}>
                {/*<input id={"search-bar"} type={"number"} placeholder={"Enter book id..."} value={bookId} onChange={handleChange}/>*/}
                <input id={"search-bar"} type={"number"} placeholder={"Enter book id..."} ref={inputRef}/>
                <button type="submit">Find Book</button>
            </form>

        </>
    );
};

export default SearchBar;