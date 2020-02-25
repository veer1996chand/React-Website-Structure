import React from "react"

import "./HeadingTheme.css"

const HeadingTheme = (props) =>{
    return<h1 className={`heading-outer ${ props.headingClass }`}>{props.text}</h1>
} 

export default HeadingTheme