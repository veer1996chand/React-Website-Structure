import React from "react"
import Image from "../../atoms/Image"

import loaderImg from "../../../assets/images/loader.gif"

const Loader = () => {
    return (
        <div style={{ "position": "absolute", "width": "100vw", "height": "100%", "display": "flex" }}>
            <Image src={loaderImg} className="d-flex m-auto" />
        </div>
    );
}
export default Loader

