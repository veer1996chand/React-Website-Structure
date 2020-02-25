import React, { useState } from "react"
// import {cookie } from "react-cookie";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import Image from "../atoms/Image"

import LandingPageImg from "../../assets/images/offers/Valentines-Day-Pop-Up.jpg"
import MobileViewDror from "../../assets/images/offers/Mobile-View-Dror.png"


import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// CSS
import './landingModale.css'

//  FestivalModale
const FestivalModale = (props) => {
    const [show, setShow] = useState(props.toggle);

    const handleClose = () => setShow(false);


    return (<Modal size="lg" show={show} onHide={handleClose}>
        <a href="/offers"><Image src={LandingPageImg} className="w-100 h-100 m-auto" title="Offers" alt="Offers" /></a>

    </Modal>
    );
}


//  GetDownloadLink

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#CF4954',
        },
    },
});





const GetDownloadLink = (props) => {
    const classes = useStyles();
    const [mobileNumber, setMobileNumber] = useState('');
    const [toggle, setToggle] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState('')
    const [show, setShow] = useState(props.toggle);

    let GetView;
    const handleClose = () => setShow(false);

    const validMobileRegex = RegExp(/^\d{10}$/);

      
    const handleSubmit = (e) => {
        // let d = new Date();
        // d.setTime(d.getTime() + (5*60*1000));
        // const expires = new Date()
        // expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)
        // cookie.set("onboarded", true, {path: "/", expires: d});
        e.preventDefault();
        if(e.target.mobileNumber.value.length > 0 && errors.length < 1){ 
            const url = "https://cors-anywhere.herokuapp.com/http://13.235.115.88:1339/sendAppLink/" 
            axios.get(url+e.target.mobileNumber.value)
                .then(res => {
                    setMobileNumber('');
                    setToggle(true)
                    setSuccess(true)
                    // cookie.save(
                    //     setShow(false),
                    //     {
                    //       path: '/',
                    //       expires,
                    //       maxAge: 1000,
                    //       domain: 'https://play.bukinoshita.io',
                    //       secure: true,
                    //       httpOnly: true
                    //     }
                    //   )
                })
                .catch(function (error) {
                    console.log(error);
                    setToggle(true);
                    setSuccess(false);
                });
        }else{
            setErrors('Invalid mobile number!') 
        }
        


    }

    if (toggle === false && success === false) {
        GetView = <form onSubmit={handleSubmit} className={`justify-content-center ${classes.root}`} autoComplete="off">
            <small className="text-center">Enter your phone number below</small>
            <div className="mb-3 mt-3">
                <div className="input-group ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">+91</span>
                    </div>
                    <input type="number" id="mobileNumber" className="telPhoneInput form-control" value={mobileNumber} onChange={e => { setMobileNumber(e.target.value); setErrors(validMobileRegex.test(e.target.value) ? '' : 'Mobile number must be 10 digits!') }} aria-label="Default" aria-describedby="inputGroup-sizing-default" required />
                </div>
                {errors.length > 0 && <small className='text-danger'>{errors}</small>}
            </div>
            <ThemeProvider theme={theme} >
                <Button className="mt-5 w-50 m-auto" type="submit" variant="contained" color="primary" >Submit</Button>
            </ThemeProvider>
        </form>
    } else if (toggle === true && success === true) {
        GetView = <div className="d-flex flex-column text-center mt-3">
            <h5 className='text-danger'>Congratulations! <i class="far fa-smile"></i></h5>
            <small>Thank you for reaching out to us we've sent a link on your number</small>
        </div>
    }
    else {
        GetView = <div className="d-flex flex-column text-center mt-3">
            <h5 className='text-danger'>Getlink field... <i class="far fa-frown"></i></h5>
            <Button onClick={e=>{setSuccess(false); setToggle(false)}} color="primary"><small className="text-danger">Send again</small></Button>
            
        </div>
    }
    return (<Modal size="lg "  show={show} onHide={handleClose}> 
        <button variant="secondary" onClick={handleClose} type="button" className="close close-icon mt-2 mr-2 d-flex align-self-end">
                            <span aria-hidden="true">&times;</span>
                        </button>
        <div className="d-flex flex-row position-relative justify-content-center"> 
            <div className="d-none d-md-block col-3 themeBgA">
                <Image src={MobileViewDror} className="w-100" title="Offers" alt="Offers" />
            </div>
            <div className="d-flex flex-column col-5  m-auto pr-2"> 
                <h4 className="text-center">To get the download link of your personal safety App </h4>
                
                {GetView}
            </div>
        </div>

    </Modal>
    );
}

export { FestivalModale, GetDownloadLink };