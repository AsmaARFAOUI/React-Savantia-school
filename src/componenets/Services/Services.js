import "./Services.css";
import { Row, Col, Button } from "react-bootstrap"

export default function Services() {
    return(
        <div className="my-5" id="services">
          <h4 className="workingProcessSubTitle text-center">Savantia Services</h4>
          <h2 className="workingProcessTitle text-center">Our Services</h2>
          <Row className="workingProcessItems my-3">
          <Col className="step step1">
           <h5>Cafeteria</h5>
           <p>At our Savantia school, our cafeteria offers nutritious meals for
             students. We focus on a balanced and diverse menu to support their
              well-being. Our dedicated staff ensures a positive dining experience.</p>
           <Button className="border-0">View More<span><i class="bi bi-caret-right-fill"></i></span></Button>
          </Col>
          <Col className="step step2">
           <h5>Safty Transport</h5>
           <p>Our school provides a safe and reliable bus service for students.
             Our modern buses are equipped with safety features and maintained 
             to high standards. We prioritize punctuality and comfort, ensuring 
             a smooth transportation experience.</p>
           <Button className="border-0">View More<span><i class="bi bi-caret-right-fill"></i></span></Button>
          </Col>
          <Col className="step step3">
           <h5>Clubs and Activities</h5>
           <p>At our school, we offer a variety of engaging clubs and
             activities for students. These clubs cater to diverse interests,
             allowing students to explore and excel in their passions. We 
             encourage active participation in these enriching extracurricular
             opportunities.</p>
           <Button className="border-0">View More<span><i class="bi bi-caret-right-fill"></i></span></Button>
          </Col>
          </Row>
        </div>
    )
}