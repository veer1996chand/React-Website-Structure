import React, { useState } from "react"

import {GetDownloadLink} from "../LandingModale"

import HeadingTheme from "../Molecules/HeadingTheme"

import { Testimonial, OurPartner } from "../Organisms/Slick"
import DownloadApp from "../Organisms/DownloadApp"
import ImageTransition from "../Organisms/ImageTransition"
import SectionImageText from "../Organisms/SectionImageText"
import PricingPackage from "../Organisms/PricingPackage"

// Import Images---------------------------------------------
import bannerHome from "../../assets/images/bannerHome.png"

import RapidResponse from "../../assets/images/rapidResponse.png"
import safeCommute from "../../assets/images/feature/safeCommute.png"
import gettingFamiliar from "../../assets/images/feature/gettingFamiliar.png"
import citySafetyMap from "../../assets/images/feature/citySafetyMap.png"
import citizenJournalist from "../../assets/images/feature/citizenJournalist.png"
import safeCommunity from "../../assets/images/feature/safeCommunity.png"


// Class---------------------------------------------------------
import "./home.css"
import "../../App.css"
import "../../Animation.css"

const Home = (props) => {
    const [toggle] = useState(true)
    return <div className="pb-5">
        {/* Section LandingModale */}
        <section id="" className="text-white" >
            <GetDownloadLink toggle={toggle}  />
        </section>
        {/* Section Download */}
        <section id="download" className="text-white" >
            <DownloadApp />
        </section>

        {/* Section Banner */}
        <section className="themeBgA p-5">
            <ImageTransition
                row="d-flex flex-row flex-wrap justify-content-end"
                left="col-12 col-md-5 d-flex flex-column align-self-center justify-content-end"
                right="horizontalAnimation col-12 col-md-6 d-flex justify-content-center "
                JumbotronClass="text-white"
                // title={["Tell us when you need",<TextOpacity />]} 
                title="Tell us when you need "
                titleClass="headings textAnimation font-weight-normal pb-3"
                text="Welcome to India’s first personal safety assistant. Stay secure, with DROR."
                textClass="content text-white mt-2"
                btnName="Register"
                btnClass="d-none text-danger btn-light pl-5 pr-5 text-center "
                btnHref=""
                imageGroup="d-flex flex-row justify-content-center"
                src={bannerHome}
                imageClass=""
                imgTitle="Dror Safety"
                imgAlt="Dror Safety"
            />
        </section>


        {/* Section Left 24X7 Rapid Response */}
        <section className="themeBgB  pt-5">
            <div className="container">
                <SectionImageText
                    row="d-flex flex-row-reverse flex-wrap justify-content-center"
                    left="col-12 col-md-6 d-flex align-items-center"
                    right="col-12 col-md-5"
                    JumbotronClass="p-5 text-white"
                    title="24X7 Rapid Response"
                    titleClass="headings pb-3"
                    text="At any given minute, our DRORs are one click away. A quick tap on the SOS button will ensure you receive help around the clock."
                    textClass="content pb-3"
                    btnName="Know More"
                    btnClass="text-danger b btn-light pl-5 pr-5 mt-3 text-center"
                    btnHref="/our-products#rapidResponse"
                    btnClick="Href"
                    src={RapidResponse}
                    imgTitle="24X7 Rapid Response"
                    imgAlt="24X7 Rapid Response"
                    imageClass="w-100" />
            </div>
        </section>


        {/* Section Left Image:- Safe Commute */}
        <section className="pt-5 container" >
            <SectionImageText
                row="d-flex flex-row-reverse flex-wrap"
                left="col-12 col-md-6 d-flex align-items-center"
                right="col-12 col-md-5"
                JumbotronClass="p-5"
                title="Safer Commutes"
                titleClass="headings pb-3"
                text="Using our advanced Geotagging technology, we send you and your loved ones an alert if your cab deviates from the designated path, allowing everyone to breathe a little easier."
                textClass="content pb-3"
                btnName="Know More"
                btnClass="btn-danger pl-5 pr-5 text-center"
                btnHref="/our-products#safeCommute"
                btnClick="Href"
                src={safeCommute}
                imgTitle="Safe Commute"
                imgAlt="Safe Commute"
                imageClass="w-100" />
        </section>

        {/* Section right Image:- Getting familiar just got easy */}
        <section className="container pt-5">
            <SectionImageText
                row="d-flex flex-row flex-wrap justify-content-end "
                left="col-12 col-md-5 d-flex align-items-center "
                right="col-12 col-md-6"
                JumbotronClass="p-5 "
                title="Getting Familiar Just Got Easy"
                titleClass="headings pb-3"
                text="Relish new experiences using Track My Meeting. With your newfound freedom, live in the moment when you meet new people"
                textClass="content pb-3"
                btnName="Know More"
                btnClass="btn-danger pl-5 pr-5 text-center"
                btnHref="/our-products#gettingFamiliar"
                btnClick="Href"
                imgTitle="Getting familiar just got easy"
                imgAlt="Getting familiar just got easy"
                src={gettingFamiliar}
                imageClass="w-100" />
        </section>

        {/* Section Left Image:- City safety map*/}
        <section className="container pt-5" >
            <SectionImageText
                row="d-flex flex-row-reverse flex-wrap "
                left="col-12 col-md-6 d-flex align-items-center"
                right="col-12 col-md-5"
                JumbotronClass="p-5"
                title="City Safety Map"
                titleClass="headings pb-3"
                text="The backbone of caution is awareness. This is why our colour-coded Safety Map, complete with safety rankings, to make sure you stay updated about your surrounding."
                textClass="content pb-3"
                btnName="Know More"
                btnClass="btn-danger pl-5 pr-5 text-center"
                btnHref="/our-products#citySafetyMap"
                btnClick="Href"
                imgTitle="City safety map"
                imgAlt="City safety map"
                src={citySafetyMap}
                imageClass="w-100" />
        </section>


        {/* Section right Image:- Citizen journalist */}
        <section className="container pt-5">
            <SectionImageText
                row="d-flex flex-row flex-wrap justify-content-end "
                left="col-12 col-md-5 d-flex align-items-center "
                right="col-12 col-md-6"
                JumbotronClass="p-5 "
                title="Citizen Journalist"
                titleClass="headings pb-3"
                text="DROR’s community allows you space to not only stay informed about your city, but Report Incidents, becoming your area’s citizen journalist."
                textClass="content pb-3"
                btnName="Know More"
                btnClass="btn-danger pl-5 pr-5 text-center"
                btnHref="/our-products#citizenJournalists"
                btnClick="Href"
                src={citizenJournalist}
                imgTitle="Citizen journalist"
                imgAlt="Citizen journalist"
                imageClass="w-100" />
        </section>

        {/* Section Left Image:- safe Community */}
        <section className="container pt-5" >
            <SectionImageText
                row="d-flex flex-row-reverse flex-wrap "
                left="col-12 col-md-6 d-flex align-items-center"
                right="col-12 col-md-5"
                JumbotronClass="p-5"
                title="Safe Community"
                titleClass="headings pb-3"
                text="Create your own community on DROR to keep your loved ones close. Chat with them or make groups, and keep their fears from escalating."
                textClass="content pb-3"
                btnName="Know More"
                btnClass="btn-danger pl-5 pr-5 text-center"
                btnHref="/our-products#safeCommunity"
                btnClick="Href"
                src={safeCommunity}
                imgTitle="Safe community"
                imgAlt="Safe community"
                imageClass="w-100" />
        </section>


        {/* Testomonial */}
        <section className="MainSectionBody  pt-5 pb-5">
            <Testimonial />
        </section>

        {/* Pricing */}
        <section className="MainSectionBody d-flex justify-content-center">
            <div className="col-12 d-flex flex-column justify-content-center">
                <PricingPackage />
            </div>
        </section>

        {/* Our Partner */}
        <section className="MainSectionBody">
            <div className="d-flex flex-row justify-content-center">
                <HeadingTheme text="Our Partners" headingClass="headings font-weight-normal" />
            </div>
            <div className="d-flex flex-row justify-content-center">
                <OurPartner />
            </div>

        </section>
    </div>
}

export default Home