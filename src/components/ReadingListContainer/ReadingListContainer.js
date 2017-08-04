import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import SimpleForm from "../SimpleForm";
import TileList from "../TileList";

class ReadingListContainer extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            myBooks: [],
            bookObjects: [{}],
            readBooks: [],
        };

        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onReadToggle = this.onReadToggle.bind(this);
    }

    onAdd() {

    }

    onDelete() {

    }

    onReadToggle() {

    }

    getMyBooks() {
        const bookIds = this.state.myBooks;
        const {bookObjects} = this.state;

        return bookIds.map(id => bookObjects[id]);
    }

    render() {
        const myBooks = this.getMyBooks();

        return (
            <div>
                <SimpleForm onAdd={this.onAdd} />
                <TileList 
                    assets={myBooks}
                    onToggle={this.onReadToggle}
                    onDelete={this.onDelete}
                />
            </div>
        )
    }
}

export default ReadingListContainer;