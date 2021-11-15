import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
/*bootstrap and transition */
import {CSSTransition} from 'react-transition-group'
import {Container, Nav} from 'react-bootstrap'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Footer from '../../constants/Footer'
//action to set the window size
import {useDispatch} from "react-redux";
import {setWindowSize} from '../../actions/action__size'
//style
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {makeStyles} from '@material-ui/styles';
/*mobile view*/
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';


//new imports
const isAccesssible = (path) => {
    if ((path === "photography") || (path === "Video") || (path === "Photoshop") || (path === "Amv") || (path === "Cinema") || (path === "Login")) {
        return false;
    } else {
        return true
    }

}
const useStyles=makeStyles({
    logo: {
        paddingBottom: 8
    },
    link: {
        //paddingtop:10,
        color: 'white',
        textTransform: 'none',
        paddingTop: 15,
        paddingLeft: 10,
        paddingBottom: 15,
        float: 'right',
        fontFamily: 'Roboto Slab',
        fontSize: '18px',
        marginRight: 25,
        textDecoration: 'none',
        '&:active': {
            backgroundColor: '#ffd900'
        }
    },
    link_mobile: {
        color: 'white',
        textTransform: 'none',
        padding: 5,
        textDecoration: 'none',
        '&:active': {
            backgroundColor: '#ff8c00'
        }
    },
    Bar: {
        marginBottom: '3%',
        backgroundColor: "#5900ff"
    }
})
const WebMenu = ({routes}) => {
    const classes=useStyles()
   
    return (
        <>
        < AppBar position = "static" className = {
            classes.AppBar
        } > <Toolbar variant="dense">

                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{
                        xs: 1,
                        sm: 2,
                        md: 3
                    }}>
                    <Grid item xs={6}>
                        <Typography variant="h4" className={classes.logo}>
                            Tssawer
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        {
                            routes.map((route) => (
                                (isAccesssible(route.name)) && 
                                <Nav.Link
                                    className={classes.link}
                                    key={route.path}
                                    as={NavLink}
                                    to={route.path}
                                    activeClassName="active"
                                    exact>
                                    {route.name}
                                </Nav.Link>
                            ))
                        }

                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
        <Container className="container">
            {

            routes.map(({path, Component}) => (
                <Route key={path} exact path={path}>

                    {
                        ({match}) => (
                            <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="page"
                                unmountOnExit>
                                <div className="page">
                                    <Component/>
                                    <Footer title="khalil"/>
                                </div>
                            </CSSTransition>
                        )
                    }
                </Route>
            ))
        }
        </Container>
        </>
    )
}

export default WebMenu
