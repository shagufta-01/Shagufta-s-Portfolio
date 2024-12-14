import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Avatar_4.png";
import Socialmedia from "./socialmedia";
import About from "../About/About";
import Techstack from "../About/Techstack";
import Type from "./Type";
import Project from "../Project/Projects"
import Resume from "../Resume";
function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return ( 
    <section>
        <Container className="home-content" id="Home" data-aos="fade-up">
          <Row>
            <Col md={7} className="home-header" >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name" > Shagufta Fatima </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left", paddingTop:30 }}>
              <h2 >I'm Into</h2>
                <Type />
                <br>
                </br>
                <br></br>
                <Resume />
              </div>
              
            <section>
              </section>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      <section id='about' data-aos="fade-in">
      <About />
      </section>
      <section id='skills'  style={{paddingTop:'3%'}} data-aos="fade-up">
      <Techstack />
      </section>
      <section id='project' style={{paddingTop:'6%'}} data-aos="fade-down">
      <Project />
      </section>
      <Socialmedia  />
    </section>
  );
}

export default Home;
