import React from "react"
import { Link } from "react-router-dom"

//import properties
import logo from "../../assets/images/logo.png"
import footerPlayStore from "../../assets/images/footerPlayStore.png"
import footerAppStore from "../../assets/images/footerAppStore.png"
// atoms
import Image from "../atoms/Image"


//import CSS
import "./footerNav.css"
const FooterNav = (props) =>{
    return(
        <div id="footer" className="d-flex flex-column">
            <div className="d-flex flex-row flex-wrap p-5 text-light">
                <div className="d-flex flex-column justify-content-start col-12 col-md-3 "> 
                    <Link to="/" className="">
                        <Image src={logo} title="Dror" className=" "/>
                    </Link>
                    <div className="pl-2 mt-3 mb-3">Download Now</div>
                    <div className="d-flex flex-row justify-content-start">  
                        <a  href="https://play.google.com/store/apps/details?id=com.drorapp&hl=en_IN" className="mr-2"><Image src={footerPlayStore} className="w-100" /></a>
                        <a  href="https://apps.apple.com/mu/app/dror-safety-app/id1479691165" className="mr-2"><Image src={footerAppStore} className="w-100" /></a>
                    </div>
                </div>
                <div className="p-2 col-6 col-md-3 d-flex flex-column">  
                    <div>
                        <a href="/our-products" className="mt-3 p-1 text-light">Our Products</a><br /><br /> 
                        <a href="/about-us" className="mt-3 p-1  text-light">About Us</a><br /><br />  
                        {/* <Link to="/career" className="mt-3 p-1  text-light">Career</Link><br /><br /> */}
                    </div>   
                </div>
                <div className="p-2 col-6 col-md-3 d-flex flex-column">
                    <div> 
                        <a href="privacy-policy" className="mt-3 pl-2 text-light">Privacy Policy</a><br /><br /> 
                        <a href="/for-business" className="mt-3 p-1  text-light">For Business</a><br /><br />                                   
                        
                        {/* <Link to="" className="mt-3 pl-2 text-light">Terms Of Use</Link><br /><br />  */}
                        {/* <Link to="/terms-of-use" className="mt-3 p-1  text-light">Terms Of Use</Link><br /><br /> */}
                    </div> 
                </div>
                <div className="d-none p-2 col-6 col-md-3 d-flex flex-column ">
                    <div className="p-1 text-light">Folow Us On</div>  
                    <div className="d-flex flex-row justify-content-start mt-1">
                        <a href="https://twitter.com/drorsafety"><i className="fab fa-twitter p-2 text-light"></i></a>
                        <a href="https://www.youtube.com/channel/UCqCJOUpMGZQieXLW2XztWsQ"><i className="fab fa-youtube p-2 text-light"></i></a>
                        <a href="https://www.linkedin.com/company/drorapp/"><i className="fab fa-linkedin-in p-2 text-light"></i></a>
                        <a href="https://www.instagram.com/drorsafety/"><i className="fab fa-instagram p-2 text-light"></i></a>
                        <a href="https://www.facebook.com/drorsafety/"><i className="fab fa-facebook-f p-2 text-light"></i></a>
                        </div>
                </div>
            </div>
            <div className="themeBlack text-light p-3 text-center">@Copyright 2020</div>
        </div>      
        )

}

export default FooterNav