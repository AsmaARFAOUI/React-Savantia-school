import "./TestimonialCard.css";
import { Card } from "react-bootstrap";

export default function TestimonialCard(props) {

    return(
      <div className="LatestNewsCards my-3">
       <Card  className="LatestNewsCard border-0">
        <Card.Body>
        <Card.Text className="parentOpinion">
          <span><i class="bi bi-quote quoteIcon"></i>{props.text}</span>
        </Card.Text>
         <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
             <img src={props.imgProfile} alt="latest news image" className="latestNewsProfileImg rounded-circle"/>
             <p className="my-auto">John deo</p>
            </div>
         </div>
        </Card.Body>
       </Card>
      </div>
    )
}