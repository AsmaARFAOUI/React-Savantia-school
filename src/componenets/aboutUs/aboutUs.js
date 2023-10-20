import "./aboutUs.css";
import { Row, Col, Button } from "react-bootstrap"
import aboutUsImg1 from "../../assets/aboutUsImg1.jpg"
import aboutUsImg2 from "../../assets/aboutUsImg2.jpg"
import aboutUsImg3 from "../../assets/aboutUsImg3.jpg"

export default function AboutUs(){

    return(
        <Row className="mb-3" id="about">
          <Col lg={6} md={6} className="aboutUsImages my-auto">
            <Row className="mb-3 aboutUsImagesRow">
              <img src={aboutUsImg1} alt="" className="aboutUsImg1"/>
              <img src={aboutUsImg2} alt="" className="aboutUsImg2"/>
            </Row>
            <Row className="aboutUsImagesRow">
              <img src={aboutUsImg3} alt="" className="aboutUsImg3"/>
              <img src={aboutUsImg1} alt="" className="aboutUsImg4"/>
            </Row>
          </Col>
          <Col lg={5} md={5} className="mx-lg-5 mt-lg-3">
            <Row className="aboutUs">
             <h6>About Us</h6>
             <h1>The Great Place Of Learning and Discovery</h1>
             <p>Savantia Primary School is dedicated to fostering a love for learning and empowering young minds. We prioritize individual growth, ensuring every child receives the attention and support they need to succeed. Join us in shaping a future where knowledge meets compassion, and curiosity paves the way for a lifetime of achievement.</p>
             <Button className="readMoreAboutUsBtn">Read More</Button>
            </Row>
          </Col>
        </Row>
    )
}