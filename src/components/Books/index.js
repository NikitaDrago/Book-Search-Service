import React from "react";
import Book from "./Book";
import { useAppSelector } from "../../store/hooks";
import { booksSelector } from "../../store/selectors";

const Books = () => {
  const books = useAppSelector(booksSelector);
  console.log(books);

  return (
    <div className="books-wrapper">
      {
        books && books.map((item) => <Book key={item.id} book={item}/>)
      }
    </div>
  );
};

export default Books;