import React from "react"

import Image from "../atoms/Image"

import HeadingTheme from "../Molecules/HeadingTheme" 
import OurPartner from "../Molecules/OurPartner"

import DownloadApp from "../Organisms/DownloadApp"
import ImageTransition from "../Organisms/ImageTransition"
import SectionImageText from "../Organisms/SectionImageText"
import PricingPackage from "../Organisms/PricingPackage"


// I will work in future
import OurFeatures from "../Organisms/OurFeatures"

// Import Images
import bannerForBusiness from "../../assets/images/bannerForBusiness.png"
import safeCitizens from "../../assets/images/safeCitizens.png"
import forOrganisations from "../../assets/images/forOrganisations.png"
import forTourAndTravels from "../../assets/images/forTourAndTravels.png"
import forUniversities from "../../assets/images/forUniversities.png"

import drorPlayStore from "../../assets/images/drorPlayStore.png"
import drorAppStore from "../../assets/images/drorAppStore.png"
// Local CSS
import "../../Animation.css"

const ForBusiness = (props) => {
    return <div >
        {/* Section Download */}
        <section id="download" className="text-white" >
            <DownloadApp />
        </section>
        <section className="themeBgA p-5">
            <SectionImageText
                row="d-flex flex-row flex-wrap justify-content-end"
                left="col-12 col-md-5 d-flex align-items-center justify-content-end"
                right="horizontalAnimation position-relative col-12 col-md-6 d-flex justify-content-center  "
                JumbotronClass="pb-5 text-white"
                title={["We have Care-porate features specially", <br />, " designed for your", <br />, "Employees"]}
                titleClass="headings font-weight-normal pb-3"
                text=""
                textClass="content pb-3"
                btnName="Register"
                btnClass="d-none text-danger btn-light pl-5 pr-5 text-center "
                btnHref=""
                src={bannerForBusiness}
                imageClass=""
                imgTitle="Your Safety"
                imgAlt="Your Safety"
            />
        </section>

        {/* Section right imagae For Organisations */}
        <section className="container-fluid p-5">
            <SectionImageText
                row="d-flex flex-row flex-wrap justify-content-center"
                left="col-12 col-md-6 d-flex align-items-center "
                right="col-12 col-md-6 d-flex justify-content-center"
                JumbotronClass="p-5"
                title="For Organisations"
                titleClass="headings font-weight-normal pb-3"
                text="Employees are exposed to risks which are beyond the control of their employer as they spend more time on the move and working out of the office. DROR's 24*7 field response ensures the safety of your employees at all times so that they feel confident both in and out of the office. "
                textClass="content pb-3"
                btnName="Know More"
                btnClass="btn-danger pl-5 pr-5 text-center d-none"
                btnHref=""
                src={forOrganisations}
                imgTitle="For Organisations"
                imgAlt="For Organisations"
            />
        </section>

        {/* Section Left image For Tour & Travels */}
        <section className="p-5" >
            <SectionImageText
                row="d-flex flex-row-reverse flex-wrap justify-content-center"
                left="col-12 col-md-6 d-flex align-items-center"
                right="col-12 col-md-6 d-flex justify-content-center"
                JumbotronClass="p-5 "
                title="For Tour & Travels"
                titleClass="headings font-weight-normal pb-3"
                text="We partner with travel agencies to deliver safety requirements and to ensure your safety by providing immediate help, guidance and assurance when needed so that you travel hassle free."
                textClass="content pb-3"
                btnName="Know More"
                btnClass="btn-danger pl-5 pr-5 text-center d-none"
                btnHref=""
                src={forTourAndTravels}
                imgTitle="For Tour & Travels"
                imgAlt="For Tour & Travels"
            />
        </section>
        {/* Section right Image:- For Universities */}
        <section className="container-fluid p-5">
            <SectionImageText
                row="d-flex flex-row flex-wrap justify-content-center"
                left="col-12 col-md-6 d-flex align-items-center "
                right="col-12 col-md-6 d-flex justify-content-center"
                JumbotronClass="p-5 "
                title="For Universities"
                titleClass="headings font-weight-normal pb-3"
                text="Dror helps ensure the safety and wellbeing of students across India who share our interest of  making the environment of Indian universities a safe place to be in. We assign our DROR captains to universities, alerting them in times of need, ensuring the highest level of safety for all students both on and off- campus."
                textClass="content pb-3"
                btnName="Know More"
                btnClass="btn-danger pl-5 pr-5 text-center d-none"
                btnHref=""
                src={forUniversities}
                imgTitle="For Universities"
                imgAlt="For Universities"
            />
        </section>
    </div>
}

export default ForBusiness