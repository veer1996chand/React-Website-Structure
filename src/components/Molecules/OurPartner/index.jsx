import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// Import Atoms
import Image from "../../atoms/Image"

import partener1 from "../../../assets/images/partener1.jpg"
import partener2 from "../../../assets/images/partener2.jpg"
import partener3 from "../../../assets/images/partener3.jpg"
import partener4 from "../../../assets/images/partener4.jpg"


export default class OurPartner extends Component {
  state = {
    display: true,
    
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="col-11 col-md-8">
         
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
          >
          <Slider {...settings}>
            <div>
              <Image src={partener1} class="rounded w-75" title="Medulance" alt="Medulance"/>
            </div>
            <div>
              <Image src={partener2} class="rounded w-75" title="Rapido" alt="Rapido"/>
            </div>
            <div>
              <Image src={partener3} class="rounded w-75" title="Make My Trip" alt="Make My Trip"/>
            </div>
            <div>
              <Image src={partener4} class="rounded w-75" title="RoadMech" alt="RoadMech"/>
            </div>
             
          </Slider>
        </div>
      </div>
    );
  }
}