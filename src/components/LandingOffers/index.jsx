import React from "react"

import { Testimonial } from "../Organisms/Slick"
import PricingPackage from "../Organisms/PricingPackage"
import offerBanner from "../../assets/images/offerBanner.jpg"
import Image from "../atoms/Image"
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'



const LandingOffers = (props) => {


    return <div className="d-flex flex-column">
        <section>
            <a href="#offer"><Image src={offerBanner} className="w-100 " title="Offers" /></a>
        </section>

        {/* Section right Image:- Getting familiar just got easy */}
        <section className="pt-5 pb-5 themeBgA  text-white">
            <div className="d-flex flex-row flex-wrap justify-content-end">
                <div className="col-12 col-md-5 d-flex flex-column align-self-center justify-content-end">
                    <h6 className="font-weight-bold subHeading">“Things are never quite as scary when you've got DROR as best friend “ </h6>
                    <p >How we will keep you safe and your loved one</p>

                    <ul >
                        <li>Route Deviation Alerts whenever your taxi deviates more than 200 meters</li>
                        <li>24*7 On Call DROR Rapid Response in GURGAON</li>
                        <li>24*7 On Call Ambulance in DELHI NCR</li>
                        <li>24*7 On Call Road Side Assistance in DELHI NCR </li>
                        <li> Complete Safety Map of DELHI NCR with Rating </li>
                        <li>Track my Meeting, when she is going to meet with STRANGER</li>
                        <li>Get more REWARDS when you help SOMEONE</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <div style={{ width: 660, height: 'auto' }}>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/nOFqMoiWEgk?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ResponsiveEmbed>
                    </div>
                </div>
            </div>
        </section>
        {/* Testomonial */}
        <section className="MainSectionBody  pt-5 pb-5">
            <Testimonial />
        </section>

        {/* Pricing  */}
        <div id="offer" className="mt-5 mb-5">
            <PricingPackage />
        </div>

    </div>
}
export default LandingOffers;