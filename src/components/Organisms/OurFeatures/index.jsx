import React from "react"

import SectionImageText from "../SectionImageText"


// Import Image
import rapidResponse from "../../../assets/images/rapidResponse.png"
import safeCommute from "../../../assets/images/safeCommute.png"
import safeResidents from "../../../assets/images/safeResidents.png" 
import safeCitizens from "../../../assets/images/safeCitizens.png" 


const OurFeatures =(props)=>{
    return<>
    {/* Section Left Image Top */}
    <section className="themeBgB">
        <SectionImageText  
            row="d-flex flex-row-reverse flex-wrap justify-content-center" 
            left="col-12 col-md-5 d-flex align-items-center " 
            right="col-12 col-md-4" 
            JumbotronClass="p-5 text-white"
            title="24X7 Rapid Response"
            text="DROR safety app provides quick safety features along with emergency services like ambulance services to those in need."
            btnName="Know More"
            btnClass="text-danger b btn-light pl-5 pr-5 text-center"
            btnHref="" 
            src={rapidResponse} />
    </section>
    {/* Section Left Image:- Safe Commute */}
    <section className="container-fluid pt-3">
        <SectionImageText  
            row="d-flex flex-row-reverse flex-wrap " 
            left="col-12 col-md-6 d-flex align-items-center " 
            right="col-12 col-md-6" 
            JumbotronClass="p-5 "
            title="Safe Commute"
            text="Ensure you and your loved one’s safety with DROR safety app. You won’t have to worry about your family member’s whereabouts anymore, we have it all covered."
            btnName="Know More"
            btnClass="btn-danger pl-5 pr-5 text-center"
            btnHref="" 
            src={safeCommute} 
            imageClass="w-100"/>
    </section>

    {/* Section right Image:- Safe Residents */}
    <section className="container-fluid pt-3">
        <SectionImageText  
            row="d-flex flex-row flex-wrap justify-content-end " 
            left="col-12  col-md-5 d-flex align-items-center" 
            right="col-12 col-md-6" 
            JumbotronClass="p-5 "
            title="Safe Residents"
            text="DROR safety app provides you with a very unique feature which is the DROR safety guard in which a guard comes to your aid with just the press of an SOS button."
            btnName="Know More"
            btnClass="btn-danger pl-5 pr-5 text-center"
            btnHref="" 
            src={safeResidents} 
            imageClass="w-100"/>
    </section>

    {/* Section Left Image:- Safe Citizens */}
    <section className="container-fluid pt-3">
        <SectionImageText  
            row="d-flex flex-row-reverse flex-wrap " 
            left="col-12 col-md-6 d-flex align-items-center " 
            right="col-12 col-md-6" 
            JumbotronClass="p-5 "
            title="Safe Citizens"
            text="DROR safety app works to make this society a safe place for everyone. We provide many services and all our features are aimed towards helping its people in distress."
            btnName="Know More"
            btnClass="btn-danger pl-5 pr-5 text-center"
            btnHref="" 
            src={safeCitizens} 
            imageClass="w-100"/>
    </section>
    </>
}

export default OurFeatures