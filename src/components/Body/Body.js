import React from 'react'
import Books from './Books'
import AddBook from './AddBook'
import {Route} from 'react-router-dom'
const Body = () => {
    return (
        <div>
            <Route path="/books" component={ Books }/>
            <Route path="/add-book" componen={AddBook}/>
        </div>
    )
}

export default Body
