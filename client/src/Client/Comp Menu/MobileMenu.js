import
React from 'react'
import {BrowserRouter as Route, Link} from "react-router-dom";
/*bootstrap and transition */
import {Container} from 'react-bootstrap'
//style
import CssBaseline from '@mui/material/CssBaseline';

import {makeStyles} from '@material-ui/styles';
/*mobile view*/
//icons
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BookIcon from '@mui/icons-material/Book';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import {AnimatedSwitch} from 'react-router-transition';

//btoom appbar
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

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
})

const isAccesssible = (path) => {
    if ((path === "photography") || (path === "Video") || (path === "Photoshop") || (path === "Amv") || (path === "Cinema") || (path === "Login")) {
        return false;
    } else {
        return true
    }

}

const MobileMenu = ({routes}) => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0);

    const handleMenue = (event, newValue) => {
        setValue(newValue);
    };
    const renderIcon = (item) => {
        switch (item) {
            case 0:
                return (<HomeIcon fontSize="medium"/>)
            case 1:
                return (<InfoIcon fontSize="medium"/>)
            case 2:
                return (<CallIcon fontSize="medium"/>)
            case 3:
                return (<BookIcon fontSize="medium"/>)
            case 7:
                return (<AccountTreeIcon fontSize="medium"/>)

        }
    }

    return (<> < Container className = "container" > {
        routes.map(({path, Component}) => (<AnimatedSwitch
            atEnter={{
                opacity: 0
            }}
            atLeave={{
                opacity: 0
            }}
            atActive={{
                opacity: 1
            }}
            className="switch-wrapper">
            <Route key={path} exact="exact" path={path}>

                <Component/>

                ) }
            </Route>
        </AnimatedSwitch>
        )) }
    </Container>

    <BottomNavigation
        sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0
        }}
        value={value}
        onChange={handleMenue}>
        {

            routes.map((elem, index) => (
                isAccesssible(elem.name) && <BottomNavigationAction
                    key={index.toString()}
                    component={Link}
                    to={elem.path}
                    label={elem.name}
                    value={elem.value}
                    icon={renderIcon(index)}/>
            ))

        }

    </BottomNavigation>
</>
)
}

export default MobileMenu