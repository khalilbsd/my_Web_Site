import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Field from './Comp Login/Field'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link';
//styles 
import {makeStyles} from '@mui/styles'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//button
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

//actions
import {useDispatch, useSelector} from 'react-redux';
import {postContact} from '../actions/action__Contact';

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
const useStyles = makeStyles({
    formulaire: {
        backgroundColor: 'white',
        paddingTop: '3%',
        minHeight: '92vh',
        paddingBottom: '5%',
        clipPath: 'inset(0px -15px 0px 0px)',
        boxShadow: ' 0 0 15px grey'
    },
    submitBtn:{
        float:'right'
    },
    otherSection: {
        paddingTop: '3%'
    },
    socialMedia: {
        paddingTop: '10%'
    },

    insIcon: {
        marginTop: '6%',
        fontSize: 65,
        background: 'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), ' +
                'radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), r' +
                'adial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), r' +
                'adial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%),' +
                ' radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),' +
                ' radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%' +
                '), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent)' +
                ', linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%' +
                ')',
        borderRadius: 10,
        color: 'white'
    },
    fbIcon: {
        fontSize: 80,
        color: "#1877f2"
    },
    youIcon: {
        fontSize: 80,
        color: "#FF0000"
    },
    gitIcon: {
        fontSize: 80,
        color: "black"
    },
    linkIcon: {
        color: "#0077b5",
        fontSize: 80
    },
    appTit: {
        display: 'none',
        transition: '5s ease-in-out'
    },
    info: {
        paddingTop: '5%',
        paddingBottom: '3%'
    },
    infoContent: {
        paddingBottom: '5%'
    }
})

const useMobileStyles=makeStyles({
    
contactRoot:{
  
    paddingBottom:'25%'
},
formulaire:{
    paddingTop:'10%'
},
    fbIcon:{
        fontSize:150,
        color: "#1877f2"
    },


    youIcon: {
        fontSize:150,
        color: "#FF0000"
    },
    gitIcon: {
        fontSize: 150,
        color: "black"
    },
    linkIcon: {
        fontSize: 150,
        color: "#0077b5"
    },
    insIcon: {
        marginTop: '6%',
        fontSize: 80,
        background: 'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), ' +
                'radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), r' +
                'adial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), r' +
                'adial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%),' +
                ' radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),' +
                ' radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%' +
                '), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent)' +
                ', linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%' +
                ')',
        borderRadius: 10,
        color: 'white'
    },
    gitIconContainer:{
        paddingBottom:'10%'
    }
})
const initialSate = {
    email: '',
    message: '',
    details: '',
    fname: '',
    lname: '',
    subject: ''
}

const Contact = () => {
    const classes = useStyles()
    const mobileStyle=useMobileStyles()
    const theme=useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    console.log(matches)
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false);
    const [Email, setEmail] = useState(initialSate)
   // const size = useSelector(state => state.reducer__window__size)
    const handleChange = (e) => {
        setEmail({
            ...Email,
            [e.target.name]: e.target.value
        });
    };

    const handleForm = (e) => {
        e.preventDefault();
        dispatch(postContact(Email))
        setLoading(true);
    }
    return (
        <Grid container className={!matches?mobileStyle.contactRoot:null}>

            <Grid item xs={12} sm={5} md={5} className={matches?classes.formulaire:mobileStyle.formulaire}>
                <Grid
                    item
                    align="center"
                    sx={{

                        paddingBottom: '10%'
                    }}
                    className="pageTitlecontainer"
                    xs={12}
                    md={12}
                    sm={12}>
                    <Typography align="center" color="black" variant="h5" className="pageTitle">Contact me</Typography>

                </Grid>

                <Container maxWidth="sm">
                    <form onSubmit={handleForm}>

                        <Grid container spacing={3}>
                            <Field
                                id="fname"
                                type="text"
                                handleChange={handleChange}
                                name="fname"
                                label="your first name"
                                half="half"
                                notNull="notNull"/>
                            <Field
                                id="lname"
                                type="text"
                                handleChange={handleChange}
                                name="lname"
                                label="your last name"
                                half="half"
                                notNull="notNull"/>
                            <Field
                                id="subject"
                                type="text"
                                name="subject"
                                handleChange={handleChange}
                                label="subject of your email"
                                notNull="notNull"/>

                            <Field
                                id="email"
                                type="email"
                                name="email"
                                handleChange={handleChange}
                                label="your email"
                                notNull="notNull"/>

                            <Field
                                id="message"
                                type="text"
                                name="message"
                                handleChange={handleChange}
                                label="message"
                                notNull="notNull"
                                multi="multi"/>
                            <Field
                                id="details"
                                type="text"
                                name="details"
                                handleChange={handleChange}
                                label="Additional Details"
                                multi="multi"/>
                            <Grid item xs={12} md={12} sm={12}>
                                <LoadingButton
                                     type="submit"
                                    className={classes.submitBtn}
                                    endIcon={<SendIcon />}
                                    loading={loading}
                                    loadingPosition="end"
                                    variant="contained"
                                    fullWidth
                                    >
                                    Send
                                </LoadingButton>
                             
                            </Grid>
                        </Grid>

                    </form>
                </Container>
            </Grid>
            <Grid
                item
                xs={12}
                md={7}
                sm={7}
                align="center"
                className={classes.otherSection}>
                <Grid item xs={12} md={12} sm={12}>
                    <Typography variant="h4" align="center" color="secondary">
                        you can find me also on
                    </Typography>
                </Grid>
                <Container maxWidth="lg" className={classes.socialMedia}>
                    <Grid container>
                        <Grid item xs={1} md={1} sm={1}></Grid>
                        <Grid item xs={2} md={2} sm={2}>
                            <Box>
                                <Link href="https://www.facebook.com/khalil.bsd/" target="_blank">
                                    <FacebookIcon className={matches?classes.fbIcon:mobileStyle.fbIcon} name="facebook"/>
                                </Link>

                            </Box>
                        </Grid>
                        <Grid item xs={2} md={2} sm={2}>
                            <Box>
                                <Link href="https://www.instagram.com/bsdkhalil/" target="_blank">
                                    <InstagramIcon className={matches?classes.insIcon:mobileStyle.insIcon}/>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={2} md={2} sm={2}>
                            <Box>
                                <Link
                                    href="https://www.youtube.com/channel/UCHhxQeJIguIWLkHcaemCsvg"
                                    target="_blank">
                                    <YouTubeIcon className={matches?classes.youIcon:mobileStyle.youIcon}/>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={2} md={2} sm={2}>
                            <Box>
                                <Link
                                    href="https
                            ://www.linkedin.com/in/khalil-ben-said-487a571ba"
                                    target="_blank">
                                    <LinkedInIcon className={matches?classes.linkIcon:mobileStyle.linkIcon}/>
                                </Link>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={2} md={2} sm={2} className={!matches?mobileStyle.gitIconContainer:null}>
                            <Box>
                                <Link href="https://github.com/khalilbsd" target="_blank">
                                    <GitHubIcon className={matches?classes.gitIcon:mobileStyle.gitIcon}/>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={1} md={1} sm={1}></Grid>
                    </Grid>
                    <Grid
                    item
                    align="center"
                    sx={{

                        paddingBottom: '10%'
                    }}
                    className="pageTitlecontainer"
                    xs={12}
                    md={12}
                    sm={12}>
                    <Typography align="center" color="black" variant="h5" className="pageTitle">contact Info</Typography>

                </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container>
                            <Grid item xs={12} md={2} sm={2} className={classes.infoContent}>
                                <Typography variant="h5" align="left" color="darkgrey">email :</Typography>
                            </Grid>
                            <Grid item xs={12} md={10} sm={10} className={classes.infoContent}>
                                <Typography variant="h5" align="left" color="darkgrey">Khalilbensaid98@gmail.com</Typography>
                            </Grid>
                            <Grid item xs={12} md={2} sm={2} className={classes.infoContent}>
                                <Typography variant="h5" align="left" color="darkgrey">
                                    Tel :
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={10} sm={10} className={classes.infoContent}>
                                <Typography variant="h5" align="left" color="darkgrey">
                                    (+216) 21 316 462
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </Grid>
        </Grid>

    )
}

export default Contact;