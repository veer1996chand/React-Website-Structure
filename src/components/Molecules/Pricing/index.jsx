import React from "react" 
import Image from '../../atoms/Image'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// Local CSS
import "./pricing.css"



const Pricing =(props) =>{
  
  
    return <div className="price-card card-shadow border d-flex flex-column flex-nowrap m-2">
            <h1 className={`priceCardHeader mt-5 p-3 ${props.titleClass}`}>{props.title}</h1> 
            <Card.Body>
              <h2 className={`${props.priceClass}`} style={{textDecorationLine: 'line-through'}}>{props.price}</h2>
              <h2 className={`text-danger ${props.priceClass}`}>{props.offerPrice}</h2>
              <Card.Text>
                {props.text}
              </Card.Text>
              <a href={props.payNow} onclick={props.onclick} className={props.btnClass}>{props.btnName}</a>
            </Card.Body> 
          </div>

 
}

export default Pricing
 