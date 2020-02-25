import React from "react"

// classes
const Heading=(props)=>{
  return(
    <props.heading className={props.class}>{props.children}</props.heading>
  )
}

export default Heading