import React,{useEffect} from "react"

//Atoms
import Image from "../atoms/Image"

//Molecules
import CardWithImage from "../Molecules/CardWithImage" 

// Organisms
import DownloadApp from "../Organisms/DownloadApp"
import SectionImageText from "../Organisms/SectionImageText"
import PricingPackage from "../Organisms/PricingPackage"


// I will work in future
import OurFeatures from "../Organisms/OurFeatures"

// Import Images
import bannerAboutUs from "../../assets/images/bannerAboutUs.png" 
import ScreenshotRapidResponse from "../../assets/images/feature/ScreenshotRapidResponse.png"  

// Gif
import gifRapidResponse from "../../assets/images/feature/gifRapidResponse.gif"  
import gifSafeCommute from "../../assets/images/feature/gifSafeCommute.gif"  
import gifGettingFamiliar from "../../assets/images/feature/gifGettingFamiliar.gif"  
import gifCitySafetyMap from "../../assets/images/feature/gifCitySafetyMap.gif"  
import gifCitizenJournalists from "../../assets/images/feature/gifCitizenJournalists.gif"  
import gifSafeCommunity from "../../assets/images/feature/gifSafeCommunity.gif"  

// icon 
import iconOnRoadAssistance from "../../assets/images/feature/iconOnRoadAssistance.png"  
import iconDrorCaptains from "../../assets/images/feature/iconDrorCaptains.png"  
import iconMedicalEmergency from "../../assets/images/feature/iconMedicalEmergency.png"  
import iconRouteDeviation from "../../assets/images/feature/iconRouteDeviation.png"  
import iconSmsAlerts from "../../assets/images/feature/iconSmsAlerts.png"  
import iconTrackMyMeeting from "../../assets/images/feature/iconTrackMyMeeting.png"  
import iconHeatMap from "../../assets/images/feature/iconHeatMap.png"  
import iconRateYourPlace from "../../assets/images/feature/iconRateYourPlace.png"  
import iconReportIncident from "../../assets/images/feature/iconReportIncident.png"  
import iconSafetyAndAlerts from "../../assets/images/feature/iconSafetyAndAlerts.png"  
import iconPersonalChat from "../../assets/images/feature/iconPersonalChat.png"  

 
import drorPlayStore from "../../assets/images/drorPlayStore.png"
import drorAppStore from "../../assets/images/drorAppStore.png"

// loca css
import  "../../Animation.css" 
import "./ourProject.css"
const OurProject = (props) =>{
    useEffect(()=>{
        const myId = window.location.hash.slice(1) 
        const elem = document.getElementById(myId)
        if (elem) {
          elem.scrollIntoView()
        }
    }); 
    return<div className="pb-5">
        {/* Section Download */}
        <section id="download" className="themeBgA p-3 text-white fixed-bottom" >
            <DownloadApp />
        </section>  
    {/* Section Banner */}
    <section  className="themeBgA p-5">
            <SectionImageText  
                row="d-flex flex-row flex-wrap justify-content-end" 
                left="col-12 col-md-5 d-flex align-items-center justify-content-end" 
                right="horizontalAnimation position-relative col-12 col-md-6 d-flex justify-content-center  " 
                JumbotronClass="pb-5 text-white"
                title="An App Dedicated To Your Safety"
                titleClass="heading pb-3"
                text="Dror App's Wall-to-Wall Safety Features has got all your personal security covered"
                textClass="content pb-3"
                btnName="Register"
                btnClass="d-none text-danger btn-light pl-5 pr-5 text-center "
                btnHref="" 
                src={bannerAboutUs}
                imageClass="" 
                imgTitle="Your Safety"
                imgAlt="Your Safety" 
                />
        </section> 
    {/* Section right imagae 24X7 Rapid Response */}
    <section id="rapidResponse" className="container-fluid pt-5 pb-5">
        <SectionImageText  
            row="d-flex flex-row flex-wrap justify-content-center" 
            left="col-12 col-md-6 d-flex flex-column" 
            right="col-12 col-md-6 d-flex flex-row align-items-center justify-content-center" 
            JumbotronClass="p-5"
            title="24X7 Rapid Response"
            titleClass="heading pb-3"
            text="Problems are unpredictable and can come at any point in time and DROR understands this so with the endlessly timed services DROR knows what to do and take precise decisions to take charge whenever you find yourself in a situation that demands critical attention like:"
            textClass="content pb-3"
            btnName="Know More"
            btnClass="btn-danger pl-5 pr-5 text-center d-none"
            btnHref="" 
            imageGroup="d-flex flex-row justify-content-center"
            image1={<CardWithImage cardClass="cardSize text-center font-weight-bold" imageSrc={iconOnRoadAssistance} imageClass="imageClass" imgTitle="Road Assistance" imgAlt="Road Assistance" contentText={["On-Road",<br/>,"Assistance"]}/>} 
            image2={<CardWithImage cardClass="cardSize text-center font-weight-bold" imageSrc={iconDrorCaptains} imageClass="imageClass" imgTitle="Dror Captains" imgAlt="Dror Captains" contentText={["DROR",<br/>,"Captains"]}/>}
            image3={<CardWithImage cardClass="cardSize text-center font-weight-bold" imageSrc={iconMedicalEmergency} imageClass="imageClass" imgTitle="Medical Emergency" imgAlt="Medical Emergency" contentText={["Medical",<br />,"Emergency"]}/>}
            src={gifRapidResponse} 
            imageClass="imageGif"
            imgTitle="24X7 Rapid Response"
            imgAlt="24X7 Rapid Response" 
            />
    </section>

     {/* Section Left image Safe Commute */}
     <section id="safeCommute" className="themeBgA container-fluid pt-5 pb-5 text-white" >
        <SectionImageText  
            row="d-flex flex-row-reverse flex-wrap justify-content-center" 
            left="col-12 col-md-6 d-flex flex-column" 
            right="col-12 col-md-6 d-flex flex-row align-items-center justify-content-center" 
            JumbotronClass="p-5"
            title="Safer Commutes"
            titleClass="heading pb-3"
            text="DROR uses advanced geotagging technology in real-time where you can use our “Live Tracking” feature to help us track your live location and you can easily enter the route to your destination and all you need to do is sit back and relax because now DROR will:"
            textClass="content pb-3"
            btnName="Know More"
            btnClass="btn-danger pl-5 pr-5 text-center d-none"
            btnHref="" 
            imageGroup="d-flex flex-row justify-content-center"
            image1={<CardWithImage cardClass="cardSize text-center font-weight-bold" imageSrc={iconRouteDeviation} imageClass="imageClass" imgTitle="Route Deviation" imgAlt="Route Deviation" contentText={["Route",<br />,"Deviation"]}/>} 
            image2={<CardWithImage cardClass="cardSize text-center font-weight-bold" imageSrc={iconSmsAlerts} imageClass="imageClass" imgTitle="Sms Alerts" imgAlt="Sms Alerts" contentText={["SMS",<br/>,"Alerts"]}/>}
            src={gifSafeCommute} 
            imageClass="imageGif"
            imgTitle="Safer Commutes"
            imgAlt="Safer Commutes" 
             />
    </section>
    {/* Section right Image:- Getting Familiar Just Got Easy */}
    <section id="gettingFamiliar" className="container-fluid pt-5 pb-5">
        <SectionImageText  
            row="d-flex flex-row flex-wrap justify-content-center" 
            left="col-12 col-md-6 d-flex flex-column" 
            right="col-12 col-md-6 d-flex flex-row align-items-center justify-content-center" 
            JumbotronClass="p-5"
            title="Getting Familiar Just Got Easy"
            titleClass="heading pb-3"
            text="If meeting somebody for the first time makes you feel uneasy then you can easily use the"
            textClass="content pb-3"
            btnName="Know More"
            btnClass="btn-danger pl-5 pr-5 text-center d-none"
            btnHref="" 
            imageGroup="d-flex flex-row justify-content-center"
            image1={<CardWithImage cardClass="cardSize text-center font-weight-bold d-flex flex-column" imageSrc={iconTrackMyMeeting} imageClass="imageClass" imgTitle="Track My Meeting" imgAlt="Track My Meeting" contentText={["Track My",<br />,"Meeting"]}/>} 
            image2={<CardWithImage cardClass="cardSize text-center font-weight-bold" imageSrc={iconSmsAlerts} imageClass="imageClass" imgTitle="Sms Alerts" imgAlt="Sms Alerts" contentText={["SMS",<br/>,"Alerts"]}/>}
            src={gifGettingFamiliar} 
            imageClass="imageGif" 
            imgTitle="Getting Familiar Just Got Easy"
            imgAlt="Getting Familiar Just Got Easy" 
            />
    </section>

     {/* Section Left Image:- City Safety Map */}
    <section id="citySafetyMap" className="themeBgA text-white container-fluid pt-5 pb-5">
        <SectionImageText  
            row="d-flex flex-row-reverse flex-wrap justify-content-center" 
            left="col-12 col-md-6 d-flex flex-column" 
            right="col-12 col-md-6 d-flex flex-row align-items-center justify-content-center" 
            JumbotronClass="p-5"
            title="City Safety Map"
            titleClass="heading pb-3"
            text="Whenever you are feeling anxious about a certain area you are entering or an area that you aren’t aware of then you can always check up on"
            textClass="content pb-3"
            btnName="Know More"
            btnClass="btn-danger pl-5 pr-5 text-center d-none"
            btnHref="" 
            imageGroup="d-flex flex-row justify-content-center"
            image1={<CardWithImage cardClass="cardSize text-center font-weight-bold d-flex flex-column" imageSrc={iconHeatMap} imgTitle="Heat Map" imgAlt="Heat Map" imageClass="imageClass" contentText="Heat Map"/>} 
            image2={<CardWithImage cardClass="cardSize text-center font-weight-bold d-flex flex-column" imageSrc={iconRateYourPlace} imgTitle="Rate Your Place" imgAlt="Rate Your Place" imageClass="imageClass" contentText={["Rate your",<br/>,"place"]}/>}
            src={gifCitySafetyMap} 
            imageClass="imageGif"
            imgTitle="City Safety Map"
            imgAlt="City Safety Map" 
            />
    </section>
    {/* Section right Image:- Citizen Journalists */}
    <section id="citizenJournalists" className="container-fluid pt-5 pb-5">
        <SectionImageText  
            row="d-flex flex-row flex-wrap justify-content-center" 
            left="col-12 col-md-6 d-flex flex-column" 
            right="col-12 col-md-6 d-flex flex-row align-items-center justify-content-center" 
            JumbotronClass="p-5"
            title="Citizen Journalist"
            titleClass="heading pb-3"
            text="Our community keeps growing only when you contribute to it and we need your assistance where you can contribute when you find a case of Eve-teasing, Kidnapping, Etc."
            textClass="content pb-3"
            btnName="Know More"
            btnClass="btn-danger pl-5 pr-5 text-center d-none"
            btnHref="" 
            imageGroup="d-flex flex-row justify-content-center"
            image1={<CardWithImage cardClass="cardSize text-center font-weight-bold d-flex flex-column" imageSrc={iconReportIncident} imageClass="imageClass" imgTitle="Report Incident" imgAlt="Report Incident" contentText={["Report",<br />,"Incident"]}/>} 
            image2={<CardWithImage cardClass="cardSize text-center font-weight-bold d-flex flex-column" imageSrc={iconSafetyAndAlerts} imageClass="imageClass" imgTitle="Safety And Alerts" imgAlt="Safety And Alerts" contentText={["Safety &",<br />,"Alerts"]}/>}
            src={gifCitizenJournalists} 
            imageClass="imageGif"
            imgTitle="Citizen Journalist"
            imgAlt="Citizen Journalist" 
            />
    </section>

    {/* Section Left Image:- Safe community */}
    <section id="safeCommunity" className="themeBgA text-white container-fluid pt-5 pb-5">
        <SectionImageText  
            row="d-flex flex-row-reverse flex-wrap justify-content-center" 
            left="col-12 col-md-6 d-flex flex-column" 
            right="col-12 col-md-6 d-flex flex-row align-items-center justify-content-center" 
            JumbotronClass="p-5"
            title="Safe community"
            titleClass="heading pb-3"
            text="DROR believes in personalization and nothing can go wrong when you stay in touch with the ones who matter you the most!"
            textClass="content pb-3"
            btnName="Know More"
            btnClass="btn-danger pl-5 pr-5 text-center d-none"
            btnHref="" 
            imageGroup="d-flex flex-row justify-content-center"
            image1={<CardWithImage cardClass="cardSize text-center font-weight-bold d-flex flex-column" imageSrc={iconPersonalChat} imageClass="imageClass" imgTitle="Personal Chat" imgAlt="Personal Chat" contentText={["Personal",<br />,"Chat"]}/>} 
            src={gifSafeCommunity} 
            imageClass="imageGif" 
            imgTitle="Safe community"
            imgAlt="Safe community" 
            />
    </section>

    
    {/* Pricing */} 
    <section className="MainSectionBody"> 
        <PricingPackage />
    </section>
</div>
}

export default OurProject