import React from "react"

// Atoms
import Paragraph from "../atoms/Paragraph"
import Image from "../atoms/Image"

// Molecules
import HeadingTheme from "../Molecules/HeadingTheme"  
import CardWithImage from "../Molecules/CardWithImage"  
import OurPartner from "../Molecules/OurPartner"
import OurInvestors from "../Molecules/OurInvestors"

// Organisms
import DownloadApp from "../Organisms/DownloadApp"
import Team from "../Organisms/Team"


// CSS 
import  "../../Animation.css"
import "./aboutUs.css"
 





const AboutUs = (props) =>{
 
    return<div  className="pb-5">
        {/* Section Download */}
        <section id="download" className="text-white" >
            <DownloadApp />
        </section>
        {/* Banner */}
        <section className="themeBgA pt-5 pb-5 text-white">
            <div className="container pt-5 pb-5 ">
                <h1 className="headings font-weight-normal  position-relative pt-5">Who is DROR?</h1>
                <Paragraph paragraph="p" class="content pt-3 pb-5 pl-3">DROR, since 18th August 2018 is India's first and only safety app that helps citizens in distress by building a community based networking so that they can ensure each other’s safety. It promotes women's safety by leveraging technology and community insights to enable everyone to build a trust-able community. With DROR, every individual is able to get help as well as rescue in just a click! Let your community be your shield and keep you safe.</Paragraph>
            </div>
        </section>

        {/* Mission */}
        <section className="pt-5 pb-5">
            <div className="container pt-5 pb-5">
                <HeadingTheme text="Mission" headingClass="headings font-weight-normal pt-5"/> 
                <Paragraph paragraph="p" class="content pt-3 pb-5 pl-3">DROR safety app’s larger aim is to help the police and the government ensure safety for all its citizens by leveraging technology, data and vigilant community members.DROR safety app’s design and features have been guided by research and data from criminology experts and focus especially on creating safe spaces for women and reduce incidents of sexual assault, misbehavior and even rape.</Paragraph>
            </div>
        </section>

        {/* Vision */}
        <section className="themeBgB pt-5 pb-5 text-white">
            <div className="container pt-5 pb-5">
                <HeadingTheme text="Vision" headingClass="headings font-weight-normal pt-5"/> 
                <Paragraph paragraph="p" class="content pt-3 pb-5 pl-3">DROR safety app’s vision is to use technology to create a trust-based community network of vigilant and responsible citizens who are ready to help others in distress. It ensures the safety of the people, especially for women at all times by enabling instant SOS signals to mobilize help from around you, helping you identify safe spaces and meet new people and roam freely at any time without worrying.</Paragraph>
            </div>
        </section>

        {/* Team */}
        <section className="container text-center p-5">
             <Team   />   
        </section>

        {/* Our Investors */} 
         
        <section className="themeBgA MainSectionBody p-5 text-white">
            <div className="container">
                <div className="d-flex flex-row justify-content-center">
                    <HeadingTheme text="Our Investors" headingClass="headings font-weight-normal"/>                
                </div>
                <div  className="d-flex flex-row p-5 justify-content-center">
                    <OurInvestors />
                </div>
            </div>
        </section> 

        {/* Our Partner */} 
        <section className="MainSectionBody pt-3">
            <div className="d-flex flex-row justify-content-center">
                <HeadingTheme text="Our Partners" headingClass="headings font-weight-normal"/>                
            </div>
            <div  className="d-flex flex-row justify-content-center">
                <OurPartner />
            </div>

        </section> 
         
    </div>
}

export default AboutUs