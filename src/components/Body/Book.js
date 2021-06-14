import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap'

const Book = props => {
    return (
        <Card>
            <CardBody>
                <CardTitle>Book: {props.bookName}</CardTitle>
                <CardSubtitle>Writer: {props.writer}</CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default Book
