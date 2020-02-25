import React from "react" 
import Image from "../atoms/Image"

import thankImg from "../../assets/images/bannerForBusiness.png"

const Success=(props)=>{
    return (
      <div>
        <section className="themeBgA pt-5 pb-5 text-white">
          <div className="container d-flex flex-row flex-wrap ">
            <div className="">
              <Image src={thankImg} className="w-100"/>
            </div>
            <div className=" align-self-center m-auto ">
              <h1 className="headings  font-weight-normal position-relative pt-5">
                    Thank You <i class="far fa-smile-wink"></i>
              </h1> 
              <p>for making a purchase form DROR, and now we are ready to keep you safe from every distress </p>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Success