import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import React from "react";
import searchIcon from "./search.svg";


const Header = () => {
  return (
    <div className="app__header">
      <Container className="text-center p-5">
        <Row>
          <Col>
            <h1 className="fw-bolder mb-xl-5">Search for books</h1>
            <>
              <InputGroup className="mb-4">
                <FormControl
                  placeholder="Title of the book"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" >
                  <img className="search-svg" src={searchIcon} alt=""/>
                </Button>
              </InputGroup>

              <Row className="justify-content-md-center mt">
                <Col md="auto" className="fw-bolder fs-5">Categories</Col>
                <Col md="auto">
                  <Form.Select aria-label="Default select example">
                    <option value="1">all</option>
                    <option value="2">art</option>
                    <option value="3">biography</option>
                    <option value="4">computers</option>
                    <option value="5">history</option>
                    <option value="6">medical</option>
                    <option value="7">poetry</option>
                  </Form.Select>
                </Col>
                <Col md="auto" className="fw-bolder fs-5">Sorting by</Col>
                <Col md="auto">
                  <Form.Select aria-label="Default select example">
                    <option value="1">relevance</option>
                    <option value="2">newest</option>
                  </Form.Select>
                </Col>
              </Row>
            </>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;