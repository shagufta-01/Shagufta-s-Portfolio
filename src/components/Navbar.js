import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as ScrollLink } from 'react-scroll';
import { FaBolt } from 'react-icons/fa';
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
const Navitems = ({title,tolink,name}) =>{
  return(
  <Nav.Item>
     <Nav.Link as={ScrollLink} to={tolink} onClick={() => updateExpanded(false)}>
        {name} {title}
      </Nav.Link>
   </Nav.Item>
  )
}
  window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">Shagufta's PortFolio
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
          <Navitems tolink={"Home"} title={'Home'} name={<AiOutlineHome/>}/>
          <Navitems tolink={"about"} title={'About'} name={<AiOutlineUser/>}/>
          <Navitems tolink={"skills"} title={'Skills'} name={<FaBolt/>}/>
          <Navitems tolink={"project"} title={'Projects'} name={<AiOutlineProject/>}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
