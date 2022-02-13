import { Button, Col, Container, Form, FormControl, InputGroup, Row, Spinner } from "react-bootstrap";
import React, { useCallback, useState } from "react";
import searchIcon from "./search.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilter, setSearchBook, setSorting } from "../../store/bookSlice";
import { searchBookSelector } from "../../store/selectors";

const Header = ({setPopout}) => {
  const [text, setText] = useState(null);
  const dispatch = useAppDispatch();
  const searchBook = useAppSelector(searchBookSelector);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (text !== searchBook && text) {
      setPopout(
        <div className="text-center mt-4">
          <Spinner animation="border"/>
        </div>
      );
      dispatch(setSearchBook(text));
    }
  }, [text, searchBook]);

  return (
    <div className="app__header">
      <Container className="text-center p-5">
        <Row>
          <Col>
            <h1 className="fw-bolder mb-xl-5">Search for books</h1>
            <form onSubmit={handleSearch}>
              <InputGroup className="mb-4">
                <FormControl
                  placeholder="Title of the book"
                  aria-describedby="basic-addon2"
                  onInput={e => setText(e.target.value)}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
                  <img className="search-svg" src={searchIcon} alt=""/>
                </Button>
              </InputGroup>

              <Row className="justify-content-md-center mt">
                <Col md="auto" className="fw-bolder fs-5">Categories</Col>
                <Col md="auto">
                  <Form.Select aria-label="Default select example" className="form_cursor"
                               onChange={
                                 (e) => dispatch(setFilter(e.target.value))
                               }
                  >
                    <option value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                  </Form.Select>
                </Col>
                <Col md="auto" className="fw-bolder fs-5">Sorting by</Col>
                <Col md="auto">
                  <Form.Select aria-label="Default select example" className="form_cursor"
                               onChange={
                                 (e) => dispatch(setSorting(e.target.value))
                               }
                  >
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>
                  </Form.Select>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;