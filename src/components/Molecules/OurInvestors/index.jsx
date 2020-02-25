import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// Import Atoms
import Image from "../../atoms/Image"

import invester1 from "../../../assets/images/invester1.png"  


export default class OurInvestors extends Component {
  state = {
    display: true,
    
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className="col-12 col-md-2">
         
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
          >
          {/* <Slider {...settings}>
            <div>
              <Image src={invester1} class="rounded w-100 p-3"/>
            </div>
            <div className="">
              <Image src={invester1} class="rounded w-100 p-3 "/>
            </div>  
          </Slider> */}

            <div>
              <Image src={invester1} class="rounded w-100 p-3" title="Inflection" alt="Inflection"/>
            </div>
        </div>
      </div>
    );
  }
}