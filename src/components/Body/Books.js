import React, { useState } from 'react';
import BOOKS from '../data/list';
import Book from './Book';
import { CardColumns } from 'reactstrap';

const Books = () => {
    let [state, setState] = useState(BOOKS)

    const books = state.map((book, index) => {
        return (
            <CardColumns>
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    key={index}
                />
            </CardColumns>
        )
    })

    return (
        <div>
            <h1>Book List</h1>
            {books}
            <button onClick={() => setState([])}>
                Remove All
            </button>
            <button onClick={() => setState(BOOKS)}>
                Reset
            </button>
        </div>
    );
}

export default Books
