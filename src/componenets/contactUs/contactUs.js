import "./contactUs.css";
import { Row, Col, Form, Button } from "react-bootstrap"
import contactImg from "../../assets/contactImg.jpg";

export default function ContactUs() {
    
    return(
        <div id="contact" className="contactUs pt-3">
        <h5 className="text-center">CONTACT US</h5>
        <h2 className="text-center">Don't Hesitate To Contact Us!</h2>
        <Row className=" py-3">
          <Col className="contactUsForm my-auto">
             <Form className="bg-white">
            <Form.Control type="text" placeholder="Your Name" className="my-3 py-3" />
            <Form.Control type="email" placeholder="Your Email" className="my-3 py-3" />
            <Form.Control type="number" placeholder="Phone Numbers" className="my-3 py-3" />
            <Form.Control as="textarea" rows={3} placeholder="Your Message" className="my-3 py-3"/>
            <Button type="submit" className="mx-auto my-3 py-3 d-flex justify-content-center">
              Send
           </Button>
           </Form>
          </Col>
          <Col className="d-flex flex-column d-flex">
           <img src={contactImg} alt="savantia photo" className="contactImg mx-auto my-3"/>
           <div className="contactInfo mt-5 mx-auto">
            <p><i class="bi bi-geo-alt-fill"></i> Tunis, 2000 Bardo 20 Mars</p>
            <p><i class="bi bi-envelope-at-fill"></i> savantiaschool@gmail.com</p>
            <p><i class="bi bi-telephone-fill"></i> +216 71 845 359</p>
           </div>
          </Col>
        </Row>
        </div>
    )
}