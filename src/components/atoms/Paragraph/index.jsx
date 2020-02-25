import React from "react"

// classes
const Paragraph=(props)=>{
  return(
    <props.paragraph className={props.class}>{props.children}</props.paragraph>
  )
}

export default Paragraph