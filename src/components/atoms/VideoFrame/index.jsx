import React, {Fragment} from "react"

const VideoFrame = (props) =>{
    var src = props.src;
    return <Fragment>
        <center><div class="embed-responsive embed-responsive-16by9 col-sm-12 col-md-6">
            <iframe width="560" 
            height="315" 
            class="embed-responsive-item" 
            src={src}
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
            </div>
            </center>
    </Fragment>
}

export default VideoFrame;