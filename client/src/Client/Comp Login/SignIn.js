import React from 'react'
import {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
//form
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//icon
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Grid from '@mui/material/Grid';
//redux
import { useDispatch } from 'react-redux';
//actions
import {Login} from '../../actions/Auth';
const useStyles = makeStyles({

    formBtn: {
        width: '100%'
    }
});

const SignIn = ({state}) => {
    const classes = useStyles();
    const history=useHistory();
    const dispatch=useDispatch();
    const [values, setValues] = useState({showPassword: false});
    const [account, setAccount] = useState({email: '', password: ''})

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleAccount = (prop) => (event) => {
        setAccount({
            ...account,
            [prop]: event.target.value
        });
    }
    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            dispatch(Login(account,history))
        }catch(error){
            console.log(error.message)
        }
    }
    return (
       
            <form onSubmit={handleSubmit}>
                <Grid container="container">
                    <Grid item="item" xs={2} md={1}>
                        <AlternateEmailIcon
                            sx={{
                                color: 'action.active',
                                mr: 1,
                                my: 3
                            }}
                            fontSize="medium"/>
                    </Grid>

                    <Grid item="item" xs={10} md={11}>
                        <FormControl
                            sx={{
                                m: 0,
                                width: '100%'
                            }}
                            variant="standard">
                            <TextField
                                id="email"
                                label="Email"
                                variant="standard"
                                onChange={handleAccount('email')}/>
                        </FormControl>
                    </Grid>

                </Grid>
                <Grid container="container">
                    <Grid item="item" xs={2} md={1}>
                        <LockIcon
                            sx={{
                                color: 'action.active',
                                mr: 1,
                                my: 3
                            }}
                            fontSize="medium"/></Grid>
                    <Grid item="item" xs={10} md={11}>
                        <FormControl
                            sx={{
                                m: 0,
                                width: '100%'
                            }}
                            variant="standard">

                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword
                                    ? 'text'
                                    : 'password'}
                                value={account.password}
                                onChange={handleAccount('password')}
                                endAdornment={<InputAdornment position = "end" > <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}>
                                    {
                                        values.showPassword
                                            ? <VisibilityOff/>
                                            : <Visibility/>
                                    }
                                </IconButton>
                            </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>

                </Grid>
                <Grid item="item">
                    <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        className={classes.formBtn}>
                        {
                            state
                                ? 'Login'
                                : 'Sign Up'
                        }
                    </Button>
                </Grid>

            </form>
        
    )
}

export default SignIn
