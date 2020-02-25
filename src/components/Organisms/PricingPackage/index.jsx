import React from "react"

import HeadingTheme from "../../Molecules/HeadingTheme"
import Pricing from "../../Molecules/Pricing"



const PricingPackage = (props) => {
    return <>
        <div className="d-flex flex-row justify-content-center">
            <HeadingTheme text="Pricing" headingClass="headings font-weight-normal" />
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center pt-5">
            <Pricing
                title="1 Month"
                titleClass="themeBgA subHeading text-white"
                price="&#x20B9; 500 /-"
                priceClass="subHeading font-weight-bold"
                offerPrice="&#x20B9; 300 /-"
                text={["24*7 Rapid Response", <br />, "Safe Commute", <br />, "RWA Safe Colony ", <br />, "Citizen Journalist", <br />, "Safe Meeting"]}
                btnName="BUY NOW"
                payNow="https://rzp.io/l/one-month"
                onclick="ga(‘send’, ‘event’, [buy now], [one-month], [view]);"
                btnClass="pl-3 pr-3 content btn btn-outline-danger" />
            <Pricing
                title="3 Month"
                titleClass="themeBgA subHeading text-white"
                price="&#x20B9; 1500 /-"
                priceClass="subHeading font-weight-bold"
                offerPrice="&#x20B9; 750 /-"
                text={["24*7 Rapid Response", <br />, "Safe Commute", <br />, "RWA Safe Colony ", <br />, "Citizen Journalist", <br />, "Safe Meeting"]}
                btnName="BUY NOW"
                payNow="https://rzp.io/l/three-months"
                onclick="ga(‘send’, ‘event’, [buy now], [three-months], [view]);"
                btnClass="pl-3 pr-3 content btn btn-outline-danger" />
            <Pricing
                title="6 Month"
                titleClass="themeBgA subHeading text-white"
                price="&#x20B9; 3000 /-"
                priceClass="subHeading font-weight-bold"
                offerPrice="&#x20B9; 1200 /-"
                text={["24*7 Rapid Response", <br />, "Safe Commute", <br />, "RWA Safe Colony ", <br />, "Citizen Journalist", <br />, "Safe Meeting"]}
                btnName="BUY NOW"
                payNow="https://rzp.io/l/six-months"
                onclick="ga(‘send’, ‘event’, [buy now], [six-months], [view]);"
                btnClass="pl-3 pr-3 content btn btn-outline-danger" />

            <Pricing
                title="1 Year"
                titleClass="themeBgA subHeading text-white"
                price="&#x20B9; 6000 /-"
                priceClass="subHeading font-weight-bold"
                offerPrice="&#x20B9; 2100 /-"
                text={["24*7 Rapid Response", <br />, "Safe Commute", <br />, "RWA Safe Colony ", <br />, "Citizen Journalist", <br />, "Safe Meeting"]}
                btnName="BUY NOW"
                payNow="https://rzp.io/l/one-year"
                onclick="ga(‘send’, ‘event’, [buy now], [one-year], [view]);"
                btnClass="pl-3 pr-3 content btn btn-outline-danger" />
        </div>
    </>
}

export default PricingPackage