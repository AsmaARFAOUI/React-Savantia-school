import "./Testimonial.css"
import { testimonialCardsData } from "../../data/testimonialCardsData";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {

  var settings = {
    dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    responsive: [
      { breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    const latestNewsCards = latestNewsCardsData.map((item) => (
      <TestimonialCard imgProfile={item.imgProfile} text={item.text} />
    ))
    return(
        <div className="latestNews my-5 py-5 mx-lg-5" id="testimonial">
          <h5 className="text-center">TESTIMONIAL</h5>
          <h2 className="text-center">What Parents Say!</h2>
          <Slider {...settings} className="latestNewsSlider">
            {latestNewsCards}
          </Slider>
        </div>
    )
}