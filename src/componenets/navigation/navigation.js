import "./navigation.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";

export default function Navigation(){

    return(
      <Navbar expand="lg" className="bg-white" id="top">
        <Container fluid>
          <Navbar.Brand href="#home" className="logo">
            <img src={logo} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-lg-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#link">
               <Button>Register<span><i class="bi bi-caret-right-fill"></i></span></Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>
    )
}