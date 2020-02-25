import React from "react"
import { Link } from "react-router-dom"
import CloseIcon from '@material-ui/icons/Close';
import YouTube from 'react-youtube-embed'
//Atoms
import Image from "../../atoms/Image" 

// import Image
import TextBundles from "../../Molecules/TextBundles"


const DBCardWithVideo =(props)=>{
    return<div className={props.cardClass}  style={{ width: '18rem' }}> 
                <div class="embed-responsive" >
                    <YouTube id={props.data.videoSrc} />
                </div>
                <div class="card-body"> 
                <p>{props.data.title}</p>   
                </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id={`M${props.data.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <button type="button" class="close bg-danger rounded-circle p-2 pointer" data-dismiss="modal" aria-label="Close">
                        <CloseIcon />
                    </button>
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

export default DBCardWithVideo