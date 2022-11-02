import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import NotFound from "./pages/notfound/NotFound";
import Books from "./pages/books/Books";
import ReadPDF from "./pages/readpdf/ReadPDF";

function App() {
    return (
        <div className="container">
            <header className="header">
                <NavBar />
            </header>

            <div className={"content"}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/books"} element={<Books />} />
                    <Route path={"/books/:id"} element={<Books />} />
                    <Route path={"/books/fullbook/:filename"} element={<ReadPDF />} />
                    <Route path={"/booknotfound"} element={<NotFound />} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </div>

            <div className={"footer"}>
                This is my footer for sample Library App using React
            </div>

        </div>
    );
}

export default App;

//TODO change favicon, logo*.png in /public
