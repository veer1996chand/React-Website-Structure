import React from "react"
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

import "../../../App.css" 
const TextBundles = (props)=>{
 
    const LinkHref=()=>{
        console.log("bnt1 :",props.btnClick)
        window.location.assign(props.btnHref);
    };
    const MediaLandingPage2=()=>{
        console.log("bnt2 :",props.btnClick)
    };
    const MediaLandingPage3=()=>{
        console.log("bnt3 :",props.btnClick)
    };
    const btnClick=props.btnClick
    return<div className={props.JumbotronClass}>
            <h1 className={props.titleClass}>{props.title}</h1> 
            <p className={props.textClass}>
             {props.text}</p>
            <p>
            <Button className={props.btnClass} onClick={() => {
            switch(props.btnClick){
                case "Href" : LinkHref()
                break;
                case "2" : MediaLandingPage2()
                break;
                default : MediaLandingPage3()
                break;
            }
            }}>{props.btnName}</Button>
            </p>
        </div>
}

export default TextBundles