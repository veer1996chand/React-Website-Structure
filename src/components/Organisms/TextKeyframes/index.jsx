import React from "react"

import "./textKeyframes.css"
const TextKeyframes =(props)=>{
    return<div className="w-100  p-5">
        <h1 className="verticalAnimation bg-info headings font-weight-bold p-5">{props.tagLine}</h1>
    </div>
}

export default TextKeyframes