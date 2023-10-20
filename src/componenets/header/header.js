import "./header.css";
import { Button, Col, Row } from "react-bootstrap";
import heroImg from "../../assets/heroImg.jpg"

export default function Header() {
    return(
       <Row className="header my-3">
        <Col lg={7} md={6} className="header-text">
          <h5>Empowering Futures at Savantia Primary School</h5>
          <h1>We provide a nurturing environment for young minds to flourish</h1>
          <Button>Read More</Button>
        </Col>
        <Col lg={5} md={6} className="header-image d-flex justify-content-center align-items-center">
         <img src={heroImg} alt="kids image" />
        </Col>
       </Row>
    )
}