import React, { useState } from 'react';
import axios from 'axios';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// atoms
import Image from "../../atoms/Image"
import AutoCompleteGoolePlace from "../../atoms/AutoCompleteGoolePlace"

// Icon

import iconContact from "../../../assets/images/iconContact.png"
// import Local Class
// import "./AddInterestedUser.css"

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
        secondary: {
            main: '#000000',
        },
    },
});

const AddInterestedUser = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [emailId, setemailId] = useState("");
    const [city, setcity] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        // https://indian-cities-api-nocbegfhqg.now.sh/cities?City=
        // console.log("dfhgigkjn",e.target.firstName.value)
        var variable = {
            name: e.target.name.value,
            contactNumber: e.target.contactNumber.value,
            emailId: e.target.emailId.value,
            city: e.target.city.value
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
    return <>
        {/* Trigger */}
        <Button className="mt-5" variant="contained" color="secondary" data-toggle="modal" data-target="#Register" >Register</Button>
        
        {/* <!-- Modal --> */}
        <div className="modal fade" id="Register" tabindex="-1" role="dialog" aria-labelledby="RegisterLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content p-5">

                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                            <TextField id="name" fullWidth name="name" label="Name" value={name} onChange={e => setName(e.target.value)} color="secondary" />
                            <TextField id="contactNumber" fullWidth name="contactNumber" value={contactNumber} onChange={e => setcontactNumber(e.target.value)} label="Mobile" color="secondary" />
                            <TextField id="emailId" name="emailId" fullWidth label="Email" value={emailId} onChange={e => setemailId(e.target.value)} color="secondary" />
                            <TextField id="city" name="city" fullWidth label="City Name" value={city} onChange={e => setcity(e.target.value)} color="secondary" />
                            <ThemeProvider theme={theme}>
                                <Button className="mt-5" type="submit" variant="contained" color="primary" >Register</Button>
                            </ThemeProvider>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default AddInterestedUser