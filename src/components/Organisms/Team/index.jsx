import React from "react"
import Image from "../../atoms/Image"
import CloseIcon from '@material-ui/icons/Close';

import CardWithImage from "../../Molecules/CardWithImage"
import HeadingTheme from "../../Molecules/HeadingTheme" 

import teamGroup from "../../../assets/images/team/teamGroup.png"



const Team = (props) => {
    var team = require("./team.js")
    let teamToReturn = [];  
    // Team DATA
    const teamData=(a, b)=>{ 
        teamToReturn = [];
        for(let i= a;i < b; i++)
        {   
             
            teamToReturn.push(<>
                         <p data-toggle="modal" data-target={`#M${team.default[i].id}`}>
                             <CardWithImage 
                                 cardClass="cardSize d-flex flex-column pl-5 pr-5 pt-5"
                                 imageSrc={team.default[i].image}
                                 imageClass="w-100"
                                 imgTitle={team.default[i].imgTitle}
                                 imgAlt={team.default[i].imgAlt}
                                 headingText={team.default[i].name}
                                 contentText={team.default[i].designation} />
                         </p>
                         {/* <!-- Modal -->    */}
                         <div className="modal fade bd-example-modal-lg" id={`M${team.default[i].id}`} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog modal-lg" role="document">
                            
                                 <i class="close fas fa-times-circle text-white" i-dismiss="modal" aria-label="Close"></i>
                      
                                 <div className="modal-content">
                                     <div className="d-flex flex-row flex-wrap pt-5 pb-5 pr-5">
                                         <div className="col-12 col-md-4">
                                             <Image src={team.default[i].image} className="w-100" />
                                         </div>
                                         <div className="col-12 col-md-8 pt-5 text-left">
                                             <h5>{team.default[i].name}</h5>
                                             <h6>{team.default[i].designation}</h6>
                                             <p className="text-justify">{team.default[i].description}</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
            
                     </>)  
        }console.log("Teamrrr",teamToReturn)
        return teamToReturn;
        
        
    }  
    return <>
    <HeadingTheme text="Team" headingClass="headings font-weight-normal pt-5 pb-5"/>
    <div className="d-flex flex-row flex-wrap justify-content-center">
        {teamData(0,4)}
    </div>
    
    <HeadingTheme text="Advisors" headingClass="headings font-weight-normal pt-5 pb-5"/>
    <div className="d-flex flex-row flex-wrap justify-content-center"> 
        {teamData(4,9)} 
    </div>

    <Image src={teamGroup} className="w-100 rounded mt-5" title="Dror Team" alt="Dror Team"/>
    </>
}

export default Team
