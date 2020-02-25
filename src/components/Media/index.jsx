import React from "react"

// Atoms
import Heading from "../atoms/Heading"

//Organisms
import TabsComponent from "../Organisms/TabsComponent" 

// Class
import "../../App.css"  
import  "../../Animation.css" 

// // Jobs Data import 
// var Team = require('./data.js')
// Import Data
var ImageData = require('./image.js')
var VideoData = require('./video.js')
var PressData = require('./press.js')


const Media = (props) =>{
    return<div>
        {/* Banner */}
        <section className="themeBgA text-white text-center p-5">
            <br />
            <div className="p-5 mt-5 mb-5 container position-relative verticalAnimation">
            <Heading heading="h1" class="display-1 font-weight-bold" >DROR</Heading>
            <Heading heading="h5" class="display-4 font-weight-bold " >Media</Heading> 
            </div><br />
        </section>

        {/* TabsComponent */}
        <section className="p-5 mt-5">
            <TabsComponent ImageData={ImageData} VideoData={VideoData} PressData={PressData}/>
        </section>
    </div>
}

export default Media