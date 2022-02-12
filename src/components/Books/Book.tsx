import {Button, Card, Col} from "react-bootstrap";
import React from "react";

const Book = () => {
  return (
    // <Col>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src="holder.js/100px180"/>
        <Card.Body>
          <Card.Title>Node JS</Card.Title>
          <Card.Text>
            Дэвид Хэррон
          </Card.Text>
        </Card.Body>
      </Card>
    // </Col>
  )
}

export default Book