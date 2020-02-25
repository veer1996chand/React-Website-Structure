import React from "react"
import { Link } from "react-router-dom"
import CloseIcon from '@material-ui/icons/Close';
//Atoms
import Image from "../../atoms/Image"

// import Image
import TextBundles from "../../Molecules/TextBundles"


const DBCardWithImage =(props)=>{
    return<div className={props.cardClass}  style={{ width: '18rem' }}>
                <Image src={props.imageSrc} className={props.imageClass}/>
                <div class="card-body"> 
                    <TextBundles 
                    JumbotronClass={props.JumbotronClass} 
                    title={props.data.title}
                    tile={props.titleClass}
                    text={props.data.shortDescription}
                    btnName={props.btnName}
                    btnClass={props.btnClass}
                    btnClick={props.btnClick} />
                    
                    {/* <Link  
                    to={{pathname:`/MediaLandingPage/${props.data.id}`}}  
                    className={props.linkClass}>{props.linkName}</Link> */}
                    <Link  
                    data-toggle="modal" 
                    className={props.linkClass} data-target={`#M${props.data.id}`}
                    >
                    {props.linkName}
                    </Link>

                </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id={`M${props.data.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <i class="close fas fa-times-circle text-white" i-dismiss="modal" aria-label="Close"></i>
                    <div class="modal-content">
                        
                    <div class=""> 
                        <Image src={props.data.imageSrc} className={props.imageClass}/>
                    </div>
                    <div class="modal-body"> 
                            <h5 class="modal-title text-center" id="exampleModalLabel">{props.data.title}</h5>
                            <p>{props.data.description}</p>
                        </div>
                    <div class="modal-footer">
                         
                    </div>
                    </div>
                </div>
                </div>
            </div>
}

export default DBCardWithImage