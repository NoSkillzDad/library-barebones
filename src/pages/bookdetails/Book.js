import "./Book.scss"

const Book = ({id, title, body}) => {


    return (<>
            <div className={"book-details"}>

                <div className={"details-wrapper"}>
                    <div className={"title"}>
                        {title}
                    </div>
                    <div className={"book-content"}>
                        {body}
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