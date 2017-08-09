import React, { Component } from "react";
import styles from "./styles.css";
import SimpleForm from "../SimpleForm";
import TileList from "../TileList";
import searchForBook from "../../services/bookSearch";
import { title, imgSrc, meta, body } from "../../MockData";

const initialState = {
    myBooks: ["0760348596"],
    books: {
        "0760348596": {
            isbn: "0760348596",
            title,
            meta,
            body,
            imgSrc
        }
    },
    read: ["0760348596"],
    rating: {
        "0760348596": 4
    }
};

class ReadingListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookList: initialState
        };

        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onReadToggle = this.onReadToggle.bind(this);
        this.onRate = this.onRate.bind(this);
    }

    onAdd(searchTerm) {
        const {bookList} = this.state;
        const {myBooks, books, rating} = bookList;

        let self = this;

        searchForBook(searchTerm)
            .then(response => {
                const updatedState = {
                    ...self.state,
                    bookList: {
                        ...bookList,
                        myBooks: [
                            ...myBooks.concat(response.isbn)
                        ],
                        books: {
                            ...books,
                            [response.isbn]: response
                        },
                        rating: {
                            ...rating,
                            [response.isbn]: 0
                        }
                    }
                }

                this.setState(updatedState);
            });
    }

    onDelete(bookId) {
        console.log("onDelete: ", bookId);

        const { bookList } = this.state;
        const { myBooks } = bookList;
        const filteredBooks = myBooks.filter(isbn => isbn !== bookId);
        const updatedState = { ...this.state, bookList: { ...bookList, myBooks: filteredBooks } };

        this.setState(updatedState);
    }

    onReadToggle(bookId) {
        const { bookList } = this.state;
        const { read } = bookList;
        const isRead = read.includes(bookId);

        if (isRead) {
            const filtered = read.filter(id => id !== bookId);
            const newBookList = { ...bookList, read: filtered };

            this.setState({
                ...this.state,
                bookList: newBookList
            });
        } else {
            this.setState({
                ...this.state,
                bookList: {
                    ...bookList,
                    read: read.concat(bookId)
                }
            });
        }
    }

    onRate(bookId, newRating) {
        const { bookList } = this.state;
        const {rating} = bookList;
        const updatedRating = {...rating, [bookId]: newRating };

        this.setState({
            ...this.state, 
            bookList: {
                ...bookList, 
                rating: updatedRating
            }
        });
    }

    getMyBooks() {
        const {bookList} = this.state;
        const {myBooks, books, read, rating} = bookList;

        const myBookList = myBooks.map(id => books[id]);

        const data = myBookList.map(book => ({ 
            ...book, 
            isRead: read.includes(book.isbn),
            rating: rating[book.isbn]
        }));

        return data;
    }

    render() {
        const myBooks = this.getMyBooks();

        return (
            <div className={styles.readingListContainer}>
                <SimpleForm onAdd={this.onAdd} />
                <TileList
                    assets={myBooks}
                    onToggle={this.onReadToggle}
                    onDelete={this.onDelete}
                    onRate={this.onRate}
                />
            </div>
        );
    }
}

export default ReadingListContainer;
