import React, { useState, useEffect } from "react" 
import Image from "../../atoms/Image"

// css
import "./ImageTransition.css"
const ImageTransition = (props) =>{ 

    const texts = [ 
        "to sleep safely in your cab.",
        "help when you’re alone.",
        "your loved ones by your side."
    ];

    const [text, setText] = useState(texts[2]);
    const [index, setIndex] = useState(0);
    
    setTimeout(() => {
        setIndex(((index + 1) % texts.length));
        setText(texts[index]);
    }, 3000);

    return <div className={props.row}>
        <div className={props.left} >
            <h1 className={`text-white`}>{props.title}<span className={`text-black ${props.titleClass}`}>{text}</span></h1>
            <p className={props.textClass}>{props.text}</p>
        </div>
        <div className={props.right}><Image src={props.src} className={props.imageClass} title={props.imgTitle} alt={props.imgAlt}/></div>
    </div>
}
export default ImageTransition 