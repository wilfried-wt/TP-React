import React from "react";
import Card from 'react-bootstrap/Card';
import produit from "../asset/prd.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Corps() {

    return(
        <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
            <Col>  
                <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '200px' }} variant="top" src={produit} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
            </Col>
            ))}
          </Row>
       
    )
}