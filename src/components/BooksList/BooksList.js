import React from "react";
import Book from "./Book";
import {useAppSelector} from "../../store/hooks";
import {booksSelector, totalItemsSelector} from "../../store/selectors";
import {Button} from "react-bootstrap";

const BooksList = ({onLoadMore}) => {
  const books = useAppSelector(booksSelector);
  const totalItem = useAppSelector(totalItemsSelector);

  return (
    <>
      <h4 className="text-center pt-4">Found {totalItem} results</h4>
      <div className="books-wrapper mt-5">
        {
          books && books.map((item) => {
            return <Book key={`${item.etag}_${item.id}`} book={item}/>;
          })
        }
      </div>
      <div className="d-grid mb-5">
        <Button variant="dark" size="lg" active style={{margin: 'auto'}} onClick={onLoadMore}>
          Load more..
        </Button>
      </div>
    </>
  );
};

export default BooksList;