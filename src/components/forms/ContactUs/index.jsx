import React, { useState } from 'react';
import axios from 'axios';

import { makeStyles, createMuiTheme,ThemeProvider } from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button'; 
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// atoms
import Image from "../../atoms/Image"

// Icon
 
import iconContact from "../../../assets/images/iconContact.png"
// import Local Class
import "./contactUs.css"

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    }, 
}));

const theme = createMuiTheme({
    palette: {
      primary:  {
        main: '#CF4954',
      },
    },
  });

const ContactUs = ()=>{
    const classes = useStyles();
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [emailId, setemailId] = useState("");
    const [message, setmessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // https://indian-cities-api-nocbegfhqg.now.sh/cities?City=
        // console.log("dfhgigkjn",e.target.firstName.value)
        var variable = {  
            firstName:e.target.firstName.value,
            lastName:e.target.lastName.value,
            contactNumber:e.target.contactNumber.value,
            emailId:e.target.emailId.value,
            message:e.target.message.value
        } 

        const url = "http://13.235.115.88:1338/contact_us/addInterestedUser"
        axios.post(url, { variable })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

        // const url = "http://13.235.115.88:1338/contact_us/addInterestedUser"
        // console.log(e.target)
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
        // }))
        
    }
    return<> 
    {/* Trigger */}
    <Image className="contactSymbol" src={iconContact} data-toggle="modal" data-target="#contactUs"/>
    
    {/* <!-- Modal --> */}
    <div class="modal fade" id="contactUs" tabindex="-1" role="dialog" aria-labelledby="contactUsLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="contactUsLabel">Contact Us</h5>
             
        </div>
        <div class="modal-body">
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <TextField id="firstName" name="firstName" label="First Name" value={firstName} onChange={e => setfirstName(e.target.value)} color="secondary" />
            <TextField id="lastName" name="lastName" value={lastName} onChange={e => setlastName(e.target.value)} label="Last Name" color="secondary" />
            <TextField id="contactNumber" fullWidth name="contactNumber" value={contactNumber} onChange={e => setcontactNumber(e.target.value)} label="Mobile" color="secondary" />
            <TextField id="emailId" name="emailId" fullWidth label="Email" value={emailId} onChange={e => setemailId(e.target.value)} color="secondary" />
            
            <TextareaAutosize id="message" className="mt-3 w-100 h-50" name="message" value={message} onChange={e => setmessage(e.target.value)} label="Standard secondary" color="secondary" aria-label="minimum height" rowsMin={3} placeholder="Message" />
            
            <ThemeProvider theme={theme}>
                <Button className="mt-5" type="submit" variant="contained" color="primary" >Register</Button>
            </ThemeProvider>
        </form>
        </div>
        <div class="modal-footer"> 
        </div>
        </div>
    </div>
    </div>
    
    </>
}

export default ContactUs