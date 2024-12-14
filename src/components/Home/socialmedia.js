import { Container,Row,Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillMail
  } from "react-icons/ai";
  const Navlinks=({link,tagname})=>{
    return(
    <li className="social-icons">
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="icon-colour  home-social-icons"
    >
      {tagname}
    </a>
  </li>
    )
  }
export default function socialmedia(){
    return(
    <Container className="home-about-section" >
         <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <Navlinks link={"https://github.com/shagufta-01"} tagname={<AiFillGithub />}/>
            <Navlinks link={"https://twitter.com/smilekiller_02"} tagname={<AiOutlineTwitter />} />
            <Navlinks link={"mailto: shaguftafatima444@gmail.com"} tagname={<AiFillMail />}/>
            <Navlinks link={"https://www.linkedin.com/in/shagufta-fatima-66264b24a/"} tagname={<AiFillLinkedin />}/>
            <Navlinks link={"https://www.instagram.com/shagufta_fatima/"} tagname={<AiFillInstagram />}/>
            </ul>
          </Col>
        </Row>
    </Container>
    )
}