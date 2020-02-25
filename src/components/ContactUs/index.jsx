import React, { useState } from "react"
import ThankYou from "../Organisms/ThankYou"
import axios from 'axios';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// atoms

// Icon

// import Local Class
import "./contactus.css"



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

const ContactUs = () => {
    const classes = useStyles();
    const [firstName, setfirstName] = useState(null);
    const [lastName, setlastName] = useState("");
    const [contactNumber, setcontactNumber] = useState(null);
    const [emailId, setemailId] = useState(null);
    const [message, setmessage] = useState("");
    const [errors, setErrors] = useState({ firstName: '', contactNumber: '', emailId: '' });


    const [toggle, setToggle] = useState(false);
    const [success, setSuccess] = useState(false);

    // OnFocus for Thank Model desable {False} 
    const OnFocusThankYou = () => {
        setToggle(false)
    }
    const validMobileRegex = RegExp(/^\d{10}$/);
    const validEmailRegex = RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        switch (name) {
            case 'firstName':
                setfirstName(value)
                setErrors({ ...errors, firstName: value.length < 2 ? 'First Name must be 2 characters long!' : '' });
                break;
            case 'contactNumber':
                setcontactNumber(value)
                setErrors({ ...errors, contactNumber: validMobileRegex.test(value) ? '' : 'Mobile number must be 10 digits!' });
                break;
            case 'emailId':
                // console.log("email=", validEmailRegex.test(value))
                setemailId(value)
                setErrors({ ...errors, emailId: validEmailRegex.test(value) ? '' : 'Email is not valid!' });
                break;
            default:
                break;


        }


    }

    const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(errors)) {
            // console.info('Valid Form') 
            var variable = { 
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                contactNumber: e.target.contactNumber.value,
                emailId: e.target.emailId.value,
                message: e.target.message.value
            }
            const url = "https://cors-anywhere.herokuapp.com/http://13.235.4.156:1339/web/contactus"

            axios.post(url, variable)
                .then(res => {
                    setfirstName('')
                    setlastName('')
                    setcontactNumber('')
                    setemailId('')
                    setmessage('')
                    setToggle(true);
                    setSuccess(true); 

                })
                .catch(function (error) {
                    console.log(error);
                    setToggle(true);
                    setSuccess(false);
                });
        } else {
            setToggle(true);
            setSuccess(false);
        }
        // fetch("https://cors-anywhere.herokuapp.com/http://15.206.171.129:1339/getPlans").then(resp => { return resp.json() })
        // .then(data => { console.log("data", data) });
        // fetch(url , {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': "application/json",
        //     },
        //     body: JSON.stringify(variable)
        // }
        // ).then(res => res.json()
        // .then(data => {
        //     console.log("dfgkhbhjghjk",data)
        //     alert("Thank You For Contacting Us!");
        // }))
    }

    return <div className="pb-5">

        <div>
            {success === true && (toggle === true && <ThankYou toggle={toggle} title="Thank You For Contacting Us!" content="We’ll be in touch soon." />)}
            {success === false && (toggle === true && <ThankYou toggle={toggle} title="Sorry" content="Please enter valid info..." />)}
        </div>
        <div className="themeBgA pt-5">
            <div className="d-flex flex-row justify-content-center">
                <div className="d-flex flex-column">
                    <h1 className="headings text-white text-center">CONTACT US</h1>
                    <p className="text-white text-center">Drop us a message and we’ll get back to you.</p>
                </div>
            </div>
            <div className="fromRow d-flex flex-row justify-content-center flex-wrap pt-5 mb-5">
                <div className="col-12 col-md-6 bg-light pt-5 p-3">
                    <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
                        <div className=" d-flex flex-column w-50">
                            <TextField className="ml-2" id="firstName" name="firstName" label="*First Name" value={firstName} onChange={handleChange} onFocus={OnFocusThankYou} color="secondary" noValidate />
                            {errors.firstName.length > 0 && <span className='text-danger'>{errors.firstName}</span>}
                        </div>
                        <div className=" d-flex flex-column w-50">
                            <TextField className="ml-2" id="lastName" name="lastName" label="Last Name" value={lastName} onChange={e => setlastName(e.target.value)} onFocus={OnFocusThankYou} color="secondary" />
                        </div>
                        <div className="ml-2 mt-2 d-flex flex-column w-100" >
                            <TextField className="" fullWidth id="contactNumber" name="contactNumber" label="*Mobile" value={contactNumber} onChange={handleChange} onFocus={OnFocusThankYou} color="secondary" noValidate />
                            {errors.contactNumber.length > 0 && <span className='text-danger'>{errors.contactNumber}</span>}
                        </div>
                        <div className="ml-2 mt-2 d-flex flex-column w-100">
                            <TextField className="" id="emailId" name="emailId" fullWidth label="*Email" value={emailId} onChange={handleChange} onFocus={OnFocusThankYou} color="secondary" noValidate />
                            {errors.emailId.length > 0 && <span className='text-danger'>{errors.emailId}</span>}
                        </div>
                        <div className="ml-2 mt-3 w-100 h-50 d-flex flex-column ">
                            <TextareaAutosize className=" " id="message" name="message" label="Standard secondary" value={message} onChange={e => setmessage(e.target.value)} onFocus={OnFocusThankYou} color="secondary" aria-label="minimum height" rowsMin={3} placeholder="Message" />
                        </div>
                        <ThemeProvider theme={theme}>
                            <Button className="mt-5" type="submit" variant="contained" color="primary" >Submit</Button>
                        </ThemeProvider>
                    </form>
                </div>
                <div className="col-12 col-md-4 themeBgB p-5">
                    <div className="">
                        <iframe className="w-100" height="300px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1631342310857!2d77.08525631455662!3d28.504739196605243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194457ecf45d%3A0x6dd17e53c142b132!2s336%2C%20Udyog%20Vihar%20Phase%204%20Rd%2C%20Phase%20III%2C%20Udyog%20Vihar%2C%20Sector%2019%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1580989164216!5m2!1sen!2sin" frameborder="0" />
                        <p className="mt-1 text-white">336, Udyog Vihar Phase 4 Rd, Phase III, Udyog Vihar, Sector 19, Gurugram, Haryana 122016</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


}

export default ContactUs

