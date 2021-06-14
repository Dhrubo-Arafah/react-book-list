import React, { useState } from 'react';
import BOOKS from '../data/list';
import Book from './Book';

const Books = () => {
    let [state, setState] = useState(BOOKS)

    const deleteBookState = index => {
        //const books = state.map(item => item);
        //const books = state.slice();
        const books = [...state];
        books.splice(index, 1)
        setState(books.filter((bookIndex) => bookIndex !== index))
    }

    const changeWithInputState = (event, index) => {
        const book = {
            ...state[index]
        }
        book.bookName = event.target.value;
        const books = [...state]
        books[index] = book;
        setState(books)
    }

    const books = state.map((book, index) => {
        return (
            <Book
                bookName={book.bookName}
                writer={book.writer}
                key={index}
                delete={() => deleteBookState(index)}
                inputName={(event) => changeWithInputState(event, index)}
            />
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
