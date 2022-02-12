import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header/Header";
import Books from "./components/Books";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { apiKeySelector, maxSearchBookSelector, searchBookSelector } from "./store/selectors";
import { fetchBooks } from "./utils/fetchBooks";
import { setBookList } from "./store/bookSlice";


const App = () => {
  const dispatch = useAppDispatch();
  const apiKey = useAppSelector(apiKeySelector);
  const maxSearchBooks = useAppSelector(maxSearchBookSelector);
  const searchBook = useAppSelector(searchBookSelector);
  const [popout, setPopout] = useState(null);

  useEffect(() => {
    searchBook && fetchBooks(searchBook, apiKey, maxSearchBooks)
      .then(value => {
          dispatch(setBookList(value));
          setPopout(<Books/>);
        },
      );
  }, [searchBook]);

  return (
    <>
      <Header setPopout={setPopout}/>
      {popout}
    </>
  );
};

export default App;
