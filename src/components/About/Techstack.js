import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiMongodb,
  DiPhotoshop,
} from "react-icons/di";
// import { ImFontSize } from "react-icons/im";
function Tech({ component,title }){
  return(
  <Col xs={4} md={2} className="tech-icons">
        {component}
        <p style={{fontSize:'18px'}}>{title}</p>
      </Col>
  )
}
function Techstack() {
  return (
    <Container className="about-section" >
    <h1 style={{color:'white'}}>
          Professional <strong className="purple">Skillset </strong>
        </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Tech component={<DiPython />} title={'Python'}/>
    <Tech component={<DiJava />} title={'Java'}/>
    <Tech component={<DiJavascript1/>} title={'JavaScript'}/>
    <Tech component={<DiReact />} title={'React'}/>
    <Tech component={<DiMysql />} title={'Mysql'}/>
    <Tech component={<DiMongodb />} title={'MongoDB'}/>
    <Tech component={<DiNodejs />} title={'NodeJs'}/>
    <Tech component={<DiGit />} title={'Git'}/>
    <Tech component={<DiPhotoshop />} title={'Photoshop'}/>
    </Row>
    </Container>
  );
}

export default Techstack;
