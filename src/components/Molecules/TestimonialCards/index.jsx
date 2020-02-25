import React from "react";
import Card from "react-bootstrap/Card";
import StarIcon from "@material-ui/icons/Star";
import Image from "../../atoms/Image"; 
// Local CSS
import "./Testimonial.css";



import partener1 from "../../../assets/images/partener1.jpg"
import partener2 from "../../../assets/images/partener2.jpg"
import partener3 from "../../../assets/images/partener3.jpg"
import partener4 from "../../../assets/images/partener4.jpg"


const TestimonialCards = props => {
  return (
    // <div
    //   className={`cardMainDiv d-flex flex-column col-8 col-md-3 mr-2 ml-2 position-relative`}
    //   style={{ width: "18rem" }}
    // >
      <div
    className={`cardMainDiv d-flex flex-column ml-2 mr-2 col-12position-relative m-auto`}
    style={{ width: "20rem" }}
  >
      <center>
        <div className="d-md-none d-col-block ">
          <br />
        </div>
        <div class="cardHeader position-relative">
          <Image src={props.src} title={props.imgTitle} className="w-50" />
          <div className="pt-2">
            <StarIcon className="fas fa-star fa-2x text-warning" />
            <StarIcon className="fas fa-star fa-2x text-warning" />
            <StarIcon className="fas fa-star fa-2x text-warning" />
            <StarIcon className="fas fa-star fa-2x text-warning" />
            <StarIcon className="fas fa-star fa-2x text-warning" />
          </div>
        </div>
      </center>
      <Card className="cardBody card-shadow pl-4 pr-4 pb-4">
        <h1 class="subHeading">{props.title}</h1>
        <p class="Cardcontent content">{props.text}</p>
      </Card>
    </div>
  );
};

export default TestimonialCards;
