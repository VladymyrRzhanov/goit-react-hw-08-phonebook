import React, { useState,  } from 'react';
import { useDispatch } from "react-redux";
import * as authUserOperations from "redux/authUser/authUser-operations";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ContactForm, Button, BtnText } from "./styles";


const RegisterForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showpassword, setShowpassword] = useState(false)

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '50ch',
        },
    }));

    const classes = useStyles();

    const handleClickShowPassword = () => {
        setShowpassword(!showpassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleInputChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authUserOperations.createUser({ name, email, password }));
        reset();
    };


    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <ContactForm onSubmit={handleSubmit}>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <TextField
                        // id="outlined-basic"
                        label="Name"
                        type="text"
                        name="name"
                        value={name}
                        variant="outlined"
                        required
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <TextField
                        id="outlined-basic"
                        type="email"
                        name="email"
                        value={email}
                        label="Email"
                        variant="outlined"
                        required
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showpassword ? 'text' : 'password'}
                        name="password"
                        value={password}
                        required
                        onChange={handleInputChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showpassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
            <Button type="submit"><BtnText>Register</BtnText><ArrowUpwardIcon width="32" height="32" /></Button>
        </ContactForm>
    );
};

export default RegisterForm;