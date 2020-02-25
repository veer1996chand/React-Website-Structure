import React from "react"

//Atoms
import Image from "../../atoms/Image"

// import Image



const CardWithImage =(props)=>{
    return<div className={props.cardClass} >
                <Image src={props.imageSrc} className={props.imageClass} title={props.imgTitle} alt={props.imgAlt}/>
                <div className="card-body">
                    <h5 className="card-title">{props.headingText}</h5> 
                    <p className={props.contentText}>{props.contentText}</p>
                </div>
            </div>
}

export default CardWithImage