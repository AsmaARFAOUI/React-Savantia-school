import "./footer.css";
import { Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Form, Button } from "react-bootstrap";
import facebook from "../../assets/facebook.png";
import tweeter from "../../assets/tweeter.png";
import instagram from "../../assets/instagram.png";
import linkdin from "../../assets/linkdin.png";

export default function Footer(){

    return(
        <>
         <Row className="footer mx-lg-5 mt-5">
          <Col lg={3} md={6}>
            <img src={logo} alt="logo"/>
          </Col>
          <Col lg={3} md={6}>
            <h3>Quick Links</h3>
             <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
              <li><a href="#contact">Contact Us</a></li>
             </ul> 
          </Col>
          <Col lg={3} md={6}>
            <h3>Contact Us</h3>
            <p className="my-3">Reach out to us for any inquiries or assistance.</p>
            <div className="footerContactUs d-flex">
              <div><i class="bi bi-telephone-fill"></i></div>
              <div>
                <h6>Contact Us</h6>
                <h4>+216 71 845 359</h4>
              </div>
            </div>   
          </Col>
          <Col lg={3} md={6} >
            <h3>Register</h3>
            <Form className="footerForm">
              <Form.Control type="email" placeholder="Enter email" />  
              <Button className="w-100 border-0 mt-3">Register Now</Button>
            </Form>
            <div className="footerSocialMedia mt-3">
              <img src={facebook} alt="facebook"/>
              <img src={tweeter} alt="tweeter"/>
              <img src={instagram} alt="instagram"/>
              <img src={linkdin} alt="linkdin"/>
            </div>
          </Col>
         </Row>
         <Row className="footerBottom d-flex mt-3 mb-3">
          <Col lg={11} className="d-flex justify-content-center">
            <h6>Copyright © 2023  All Right Reserved.</h6>
          </Col>
          <Col lg={1} className="d-flex justify-content-end">
            <Button href="#top" className="btnTopPage d-flex justify-content-center align-items-center">^</Button>
          </Col>
         </Row>
        </>
    )
}