import React from "react"
import TextBundles from "../../Molecules/TextBundles"

import Image from "../../atoms/Image"




const SectionImageText = (props) =>{ 
    return<div className={props.row}>
            <div className={props.left} >
                <div className="">
                    <TextBundles 
                    JumbotronClass={props.JumbotronClass} 
                    title={props.title}
                    titleClass={props.titleClass}
                    text={props.text}
                    textClass={props.textClass}
                    btnName={props.btnName}
                    btnClass={props.btnClass} 
                    btnHref={props.btnHref}
                    btnClick={props.btnClick}
                      />
                </div>
                <div>
                    {props.Imagesrc1}
                    {props.Imagesrc2}
                </div>
                <div className={props.formClass}>
                   {props.formName} 
                </div>
                <div className={props.imageGroup}>
                    {props.image1}
                    {props.image2}
                    {props.image3}
                </div> 
            </div> 
            <div className={props.right}><Image src={props.src} className={props.imageClass} title={props.imgTitle} alt={props.imgAlt}/></div>
    </div>
}
export default SectionImageText 