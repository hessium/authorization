import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);

    const handleEmailChange = e => {
        setEmail(e.target.value);
        if (e.target.validity.valid) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    const handlePassChange = e => {
        setPass(e.target.value);
        if (e.target.validity.valid) {
            setPassError(false);
        } else {
            setPassError(true);
        }
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            className='form'
        >
            <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                error={emailError}
                required
                placeholder=""
                helperText={emailError ? "Please enter your email" : ""}
                onChange={handleEmailChange}/>
            <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={pass}
                error={passError}
                minRows="8"
                required
                placeholder=""
                helperText={passError ? "Please enter your pass" : ""}
                onChange={handlePassChange}/>
            <Button variant="contained"
                    size="medium"
                    onClick={() => handleClick(email, pass)}>
                {title}
            </Button>
        </Box>
    );
};

export default Form;