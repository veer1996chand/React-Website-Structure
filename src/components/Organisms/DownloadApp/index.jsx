import React from "react"
import Image from "../../atoms/Image"

import drorPlayStore from "../../../assets/images/drorPlayStore.png"
import drorAppStore from "../../../assets/images/drorAppStore.png"
import mobileSocialIcon from "../../../assets/images/mobileSocialIcon.png"
import "./download.css"
const DownloadApp = (props) => {
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
                var fBody = document.body.scrollHeight - 1000
                if (fBody < document.documentElement.scrollTop || 200 > document.documentElement.scrollTop) {
                        document.getElementById("download").style.display = "none"
                }
                else if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                        document.getElementById("download").style.display = "block"
                }
        }
        return <div id="download" className="d-flex flex-row align-items-center fixed-bottom themeBgA p-3">

                <div className="col-5 col-md-6 d-flex flex-row  justify-content-center">
                        <a className="d-none d-md-block ml-2" href="https://play.google.com/store/apps/details?id=com.drorapp&hl=en_IN" ><Image src={drorPlayStore} className="w-100 h-100 " title="Play Store" alt="Play Store" /></a>
                        
                        <a className="d-none d-md-block ml-2" href="https://apps.apple.com/mu/app/dror-safety-app/id1479691165" ><Image src={drorAppStore} className="w-100 h-100 " title="App Store" alt="App Store" /></a>
                        <a className="d-md-none d-sm-block " href="https://invite.drorapp.com/app/home" ><Image src={mobileSocialIcon} className="w-100" title="Download" alt="Download" /></a>

                </div>
                <div className="col-7 col-md-6 text-align"><a href="https://twitter.com/drorsafety"><i className="twitter fab fa-twitter "></i></a>
                        <a href="https://www.youtube.com/channel/UCqCJOUpMGZQieXLW2XztWsQ"><i className="youtube fab fa-youtube "></i></a>
                        <a href="https://www.linkedin.com/company/drorapp/"><i className="linkedin fab fa-linkedin-in "></i></a>
                        <a href="https://www.instagram.com/drorsafety/"><i className="instagram fab fa-instagram "></i></a>
                        <a href="https://www.facebook.com/drorsafety/"><i className="facebook fab fa-facebook-f "></i></a>
                </div>

        </div>
}

export default DownloadApp