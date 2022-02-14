import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchInfoAboutBook} from "../../utils/fetchBooks";
import {useAppSelector} from "../../store/hooks";
import {apiKeySelector} from "../../store/selectors";
import {Spinner} from "react-bootstrap";

const BookInfo = () => {
  const {id} = useParams();
  const apiKey = useAppSelector(apiKeySelector);
  const [bookInfo, setBookInfo] = useState(null);
  const [popout, setPopout] = useState(
    <div className="text-center mt-4">
      <Spinner animation="border"/>
    </div>
  );

  const fetchBook = useCallback(async () => {
    await fetchInfoAboutBook(id, apiKey).then(res => {
      setBookInfo(res.volumeInfo);
    });
    setPopout(null);
  }, [apiKey, id]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  return <>
    {
      popout !== null ? popout : bookInfo && <div className="bookInfo d-grid">
        <div className="bookInfo__card text-center p-5">
          <img alt="" className="bookInfo__img shadow-lg" src={
            bookInfo.imageLinks && bookInfo.imageLinks.thumbnail && bookInfo.imageLinks.small
          }/>
        </div>
        <div className="p-5">
          {
            bookInfo && !!bookInfo.categories && (
              bookInfo.categories.length === 0 ? bookInfo.categories[0] : bookInfo.categories.map(
                (item, i) => <span key={`${item}-${i}`} className="d-block">{item}</span>
              )
            )
          }
          <h2 className="mb-3">{bookInfo.title}</h2>
          <p style={{width: "400px"}} className="text-decoration-underline">{
            bookInfo && !!bookInfo.authors && (
              bookInfo.authors.length === 0 ? bookInfo.authors[0] : bookInfo.authors.map(
                (item, i) => <span key={`${item}-${i}`} className="d-block">{item}</span>
              )
            )
          }</p>
          <span className="content" dangerouslySetInnerHTML={{__html: bookInfo.description}}/>
        </div>
      </div>
    }
  </>;
};


export default BookInfo;