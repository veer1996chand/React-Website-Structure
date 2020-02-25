import React from "react"
import Image from "../../atoms/Image"
const MediaLandingPage =(props)=>{
    const id =props.match.params.id
    var ImageData = require('../../Media/image.js')
    var data = ImageData.default
    console.log("Media :",data)
    if(data[id].id==id){
        return<div className=""> 
                    <div><Image src={data[id].imageSrc} className="img-fluid"/></div>
                    <div>{data[id].title}</div>
                    <div>{data[id].description}</div>
                    
                </div>
    }else
    {
        return<div>Sorry</div>
    }

}

export default MediaLandingPage