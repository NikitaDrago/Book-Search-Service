import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header/Header";
import Books from "./components/BooksList/BooksList";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  apiKeySelector, booksSelector, filterSelector,
  maxSearchBookSelector,
  searchBookSelector,
  sortingSelector, startIndexBookSelector
} from "./store/selectors";
import { fetchBooks } from "./utils/fetchBooks";
import { setBookList, setMoreBooks, setSearchRange } from "./store/bookSlice";


const App = () => {
  const [popout, setPopout] = useState(null);
  const dispatch = useAppDispatch();
  const apiKey = useAppSelector(apiKeySelector);
  const maxSearchBooks = useAppSelector(maxSearchBookSelector);
  const startIndex = useAppSelector(startIndexBookSelector);
  const searchBook = useAppSelector(searchBookSelector);
  const sorting = useAppSelector(sortingSelector);
  const filter = useAppSelector(filterSelector);

  const handleLoadMore = () => {
    dispatch(setSearchRange(startIndex + 30));
  };

  const handleData = useCallback(async (action, index) => {
    const subject = filter === 'all' ? '' : `+subject:${filter}`;
    searchBook && fetchBooks(searchBook, subject, apiKey, sorting, index, maxSearchBooks)
      .then(value => {
          switch (action) {
            case 'newData':
              dispatch(setBookList(value));
              break;
            case 'LoadMore':
              dispatch(setMoreBooks(value));
              break;
            default:
              break;
          }
          setPopout(<>
            <Books onLoadMore={handleLoadMore}/>
          </>);
        }
      );
  }, [searchBook, sorting, startIndex, filter]);

  useEffect(() => {
    handleData('newData', 0);
  }, [searchBook]);

  useEffect(() => {
    handleData('LoadMore', startIndex);
  }, [sorting, startIndex]);

  useEffect(() => {
    handleData('newData', startIndex);
  }, [filter]);


  return (
    <>
      <Header setPopout={setPopout}/>
      {popout}
    </>
  );
};

export default App;
