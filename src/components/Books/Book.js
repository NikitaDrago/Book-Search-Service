import { Card } from "react-bootstrap";
import React from "react";

const Book = ({book}) => {
  const bookInfo = book.volumeInfo;

  return (
    <Card style={{width: '18rem'}} className="shadow-lg p-3 mb-5 bg-body rounded book__card">
      <Card.Img variant="top" className="book__thumbnail" src={
        bookInfo.imageLinks && bookInfo.imageLinks.thumbnail && bookInfo.imageLinks.smallThumbnail
      }/>
      <Card.Body>
        <Card.Text className="text-decoration-underline">{
          bookInfo.categories && bookInfo.categories[0]
        }</Card.Text>
        <Card.Title>{bookInfo.title}</Card.Title>
        <Card.Text>
          {
            bookInfo.authors && bookInfo.authors.reduce((string, item) => `${string}, ${item}`)
          }
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Book;