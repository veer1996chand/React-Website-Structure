import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));

const RegisterForm = () => {
    const classes = useStyles(); 
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [emailId, setemailId] = useState("");
    const [message, setmessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("dfhgigkjn", e.target.firstName.value)
        var variable = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            contactNumber: e.target.contactNumber.value,
            emailId: e.target.emailId.value,
            message: e.target.message.value
        }

        const url = "http://13.232.60.25:1339/contact_us/addInterestedUser"
        console.log(e.target)
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(variable)
        }
        ).then(res => res.json()
            .then(data => {
                console.log("dfgkhbhjghjk", data)
            }))

    }
    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <TextField id="firstName" name="firstName" label="First Name" value={firstName} onChange={e => setfirstName(e.target.value)} color="secondary" />
            <TextField id="lastName" name="lastName" value={lastName} onChange={e => setlastName(e.target.value)} label="Last Name" color="secondary" />
            <TextField id="contactNumber" fullWidth name="contactNumber" value={contactNumber} onChange={e => setcontactNumber(e.target.value)} label="Mobile" color="secondary" />
            <TextField id="emailId" name="emailId" fullWidth label="email" value={emailId} onChange={e => setemailId(e.target.value)} color="secondary" />
            <TextareaAutosize id="message" className="mt-3 w-100" name="message" value={message} onChange={e => setmessage(e.target.value)} label="Standard secondary" color="secondary" aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />
            <Button className="mt-5" type="submit" variant="contained" color="secondary">Register</Button>
        </form>
    );
}

export default RegisterForm