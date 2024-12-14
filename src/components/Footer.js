import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">   
        </Col>
        <Col md="4" className="footer-copywright" >
          <h3 style={{textAlign:'center'}}>Copyright © {year} Shagufta Fatima</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
