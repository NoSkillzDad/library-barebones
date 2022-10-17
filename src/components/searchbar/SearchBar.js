import {useNavigate} from "react-router-dom";
import {useState} from "react";
import "./Searchbar.scss"

const SearchBar = () => {

    const navigate = useNavigate();

    const [bookId, setBookId] = useState();

    const handleChange = (e) => {
        setBookId(e.target.value);
    }

    const handleSubmit = (e) => {
        if (bookId < 1 || bookId > 100) {
            alert("Enter a valid Book id (1-100)");
            return;
        }
        navigate(`/books/${bookId}`);
    }

    return (<>
            <form className={"search-container"} onSubmit={handleSubmit}>
                <input id={"search-bar"} type={"number"} placeholder={"Enter book id..."} value={bookId}
                       onChange={handleChange}/>
                <button type="submit">Find Book</button>
            </form>

        </>
    );
};

export default SearchBar;