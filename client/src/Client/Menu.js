import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

//import pages
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Projects from './Projects'
import About from './About'
import Login from './Login'
import CssBaseline from '@mui/material/CssBaseline';
//portfolio pages
import Images from './Comp Port/Images'
import Photoshop from './Comp Port/Photoshop'
import Movies from './Comp Port/Movies'
//style
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {makeStyles} from '@material-ui/styles';


//icons
import Cinema from './Comp Port/Cinema';
import Amv from './Comp Port/Amv';
//btoom appbar

//new imports
import WebMenu from './Comp Menu/WebMenu'
import MobileMenu from './Comp Menu/MobileMenu';
const useStyles = makeStyles({

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
});

const routes = [
    {
        path: '/',
        name: 'Home',
        value: 'home',
        Component: Home
    }, {
        path: '/about',
        name: 'About',
        value: 'about',
        Component: About
    }, {
        path: '/contact',
        name: 'Contact',

        value: 'contact',
        Component: Contact
    }, {
        path: '/portfolio',
        name: 'Portfolio',

        value: 'portfolio',
        Component: Portfolio
    }, {
        path: '/portfolio/photography',
        name: 'photography',
        value: 'photography',
        Component: Images
    }, {
        path: '/portfolio/video',
        name: 'Video',
        value: 'videos',
        Component: Movies
    }, {
        path: '/portfolio/Photoshop',
        name: 'Photoshop',
        value: 'photoshop',
        Component: Photoshop
    }, {
        path: '/projects',
        name: 'Projects',
        value: 'projects',
        Component: Projects
    }, {
        path: '/login',
        name: 'Login',
        value: 'login',
        Component: Login
    }, {
        path: '/portfolio/video/amv',
        name: 'Amv',
        value: 'amv',
        Component: Amv
    }, {
        path: '/portfolio/video/cinema',
        name: 'Cinema',
        valeu: 'cinema',
        Component: Cinema
    }
]

const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height}
}

/*mobile view*/

const Menu = () => {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    //old metthod for getting the size of the window
    /*
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const dispatch = useDispatch()
    dispatch(setWindowSize(windowDimensions))
    // console.log(windowDimensions)

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions())
            dispatch(setWindowSize(windowDimensions))
        }
        window.addEventListener('resize', handleResize)
        return() => window.removeEventListener('resize', handleResize);
    }, [])
*/

    return (

        <Router>
            <CssBaseline/> {
                matches
                    ? <WebMenu routes={routes}/>
                    : <MobileMenu routes={routes}/>
            }

        </Router>
    )
}

export default Menu;