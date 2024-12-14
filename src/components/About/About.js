import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Avatar_3.png";
import Tilt from "react-parallax-tilt";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2 em", fontStyle:"oblique" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1><br></br>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ 
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              overflow: "hidden", 
              paddingTop: "30px", 
              paddingBottom: "30px" }}
            className="about-img circular-image"
          >
            <Tilt>
            <img src={laptopImg} alt="about" className="img-fluid rounded-circle"  />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
