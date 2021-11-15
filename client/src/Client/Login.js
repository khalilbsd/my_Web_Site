import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//style
import {makeStyles} from '@material-ui/styles';
import Grid from '@mui/material/Grid';
import SignIn from './Comp Login/SignIn'
import SignUp from './Comp Login/SignUp';

const useStyles = makeStyles({
    constainer:{
      
    },
    card: {
        width: '100%',
        marginTop:'15%'
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    email: {
        marginTop: '5%',
        color: 'blue'
    },
    formBtn: {
        width: '100%'
    },
   
    note:{
        float:'right'
    }

});

const Login = () => {
    const [isSignUP, setSignUp] = useState(true);
    const classes = useStyles()
    const changeForm = () => {
        setSignUp(!isSignUP);
    }

    return (
     
                <Grid container spacing={2} direction="column" className={classes.container} alignItems="center">
                    <Grid item xs={12} md={12} align="center">
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h4" color="secondary" className={classes.title}>
                                    {
                                      isSignUP
                                            ? 'Login'
                                            : 'Sign Up'
                                    }
                                </Typography>
                                <Grid container align="center">

                                {
                                    !isSignUP
                                        ? <SignUp/>
                                        : <SignIn state={isSignUP}/>
                                }
                                </Grid>
                            </CardContent>
                            <CardActions className={classes.actions}>
                                <Grid container direction="column" spacing={1}>
                                    <Grid container justify='felx-end'>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <Button color="info" className={classes.note} onClick={changeForm}>
                                                {
                                                    isSignUP
                                                        ? "You don't have an account? sign up?"
                                                        : 'Already have an account ? Sign in '
                                                }
                                            </Button>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </CardActions>

                        </Card>

                    </Grid>

                </Grid>
            
       
    );
}

export default Login;