import {useEffect, useState} from "react";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import "./NavBar.scss"

const NavBar = () => {

    const [title, setTitle] = useState("Library Bare-bones IS");

    let location = useLocation();

    const navigate = useNavigate();

    const getPage = (path) => {
        switch (path) {
            case "/":
                return "Home";
            case "/book":
                return "Book Details";
            case "/404":
                return "Page Not Found";
            default:
                return "Somewhere among the shelves";
        }
    }

    useEffect(() => {
        setTitle(getPage(location.pathname))
    }, [location]);

    return (
        <div className={"nav-wrapper"}>
            <div className={"nav__logo-wrapper"}>
                logo
            </div>
            <div className={"nav__title-wrapper"}>
                {title}
            </div>
            <div className={"nav__navbar"}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"} id={"navbar_home"}>
                                <span className={"material-icons-outlined navbar_icon"}>home</span>
                                <span className={"navbar_text"}>HOME</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/books"} id={"navbar_books"}>
                                <span className="material-symbols-outlined navbar_icon">auto_stories</span>
                                <span className={"navbar_text"}>BOOKS</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;