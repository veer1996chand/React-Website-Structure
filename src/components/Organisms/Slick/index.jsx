import React, { Component } from "react";
import Helmet from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "../../atoms/Image";

import HeadingTheme from "../../Molecules/HeadingTheme";
import TestimonialCards from "../../Molecules/TestimonialCards";

// testimonial Image
import rahulKhattar from "../../../assets/images/testimonial/rahulKhattar.png";
import shwetaTripathi from "../../../assets/images/testimonial/shwetaTripathi.png";
import kartikKapoor from "../../../assets/images/testimonial/kartikKapoor.png";

import partener1 from "../../../assets/images/partener1.jpg";
import partener2 from "../../../assets/images/partener2.jpg";
import partener3 from "../../../assets/images/partener3.jpg";
import partener4 from "../../../assets/images/partener4.jpg";

// CSS

import "./slick.css"

const Slick = () => {
    return (
        <Helmet>
            <script
                src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
                type="text/javascript"
            ></script>
            <script
                src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
                type="text/javascript"
            ></script>
            <script src="slick.js" type="text/javascript" charset="utf-8"></script>
        </Helmet>
    );
};

class OurPartner extends Component {
    state = {
        display: true,

    };
    render() {
        const settings = {
            dots: false,
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
                            <Image src={partener1} class="rounded w-75" title="Medulance" alt="Medulance" />
                        </div>
                        <div>
                            <Image src={partener2} class="rounded w-75" title="Rapido" alt="Rapido" />
                        </div>
                        <div>
                            <Image src={partener3} class="rounded w-75" title="Make My Trip" alt="Make My Trip" />
                        </div>
                        <div>
                            <Image src={partener4} class="rounded w-75" title="RoadMech" alt="RoadMech" />
                        </div>

                    </Slider>
                </div>
            </div>
        );
    }
}

class Testimonial extends Component {
    constructor() {
        super();
        this.state = {
            display: true,
            slidesToShow: 3
        }
    } 
    browserZise(that){
        if (1100 > (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) && 800 < (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)) {
            that.setState((state)=>({ slidesToShow: 2 })); 
        }else if (800 > (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)) {
            that.setState((state)=>({ slidesToShow: 1 })); 
        } else {
            that.setState((state)=>({ slidesToShow: 3 })); 
        }
    }    
    
    render() {  
        window.onload = function() { this.browserZise(this) }.bind(this) 
        window.onresize = function () { this.browserZise(this) }.bind(this);  
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: this.state.slidesToShow,
            slidesToScroll: 1
        };
        return (
            <div className="">
                <div className="d-flex flex-row justify-content-center pb-5">
                    <HeadingTheme
                        text="What people say about us"
                        headingClass=" headings font-weight-normalpl-5 pr-5"
                    />
                </div>
                <Slider {...settings} className="container">
                    <TestimonialCards
                        src={rahulKhattar}
                        imgTitle="Rahul Khattar"
                        imgAlt="Rahul Khattar"
                        rating={5}
                        title="Rahul Khattar"
                        text="Dror’s Distress Notification feature was a lifesaver when my dad came to help me out in a matter of minutes after I met with a car accident"
                    />
                    <TestimonialCards
                        src={shwetaTripathi}
                        imgTitle="Shweta Tripathi"
                        imgAlt="Shweta Tripathi"
                        rating={3}
                        title="Shweta Tripathi"
                        text="I was returning back home on a regular Monday work routine when my car engine ceased on Shankar chowk road, that’s when Dror’s 24x7 rapid response feature saved me through that disaster. It’s a Lifesaver."
                    />
                    <TestimonialCards
                        src={kartikKapoor}
                        imgTitle="Kartik Kapoor"
                        imgAlt="Kartik Kapoor"
                        rating={4}
                        title="Kartik Kapoor"
                        text="My girlfriend was coming back home in a Cab alone, thanks to Dror I was able to track her from my phone and know about the red areas which she was traveling through"
                    />
                </Slider>
            </div>
        );
    }
}

export { Testimonial, OurPartner };
