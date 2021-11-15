import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//router
import {CSSTransition} from 'react-transition-group'

import {Nav} from 'react-bootstrap'
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
//components
import Home from './pages/Home';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import HomeImages from './pages/HomeImage';
import Videos from './pages/Videos';
//subPages
import AddImage from './pages/Comp Images/Images'
import Update from './pages/Comp Images/Update';
//icon
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
//style
import {makeStyles} from '@material-ui/styles';
const drawerWidth = 200;

const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'open'
})(({theme, open}) => ({
    flexGrow: 0,
    padding: theme.spacing(0),
    transition: theme
        .transitions
        .create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme
            .transitions
            .create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
        marginLeft: 0
    })
}),);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({theme, open}) => ({
    transition: theme
        .transitions
        .create([
            'margin', 'width'
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme
            .transitions
            .create([
                'margin', 'width'
            ], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
    })
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}));

export default function Navbar() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const routes = [
        {
            path: '/admin/',
            name: 'Home',
            Component: Home
        }, {
            path: '/Settings',
            name: 'Settings',
            Component: Settings
        }, {
            path: '/admin/Images',
            name: 'Images',
            Component: HomeImages
        }, {
            path: '/admin/Videos',
            name: 'Videos',
            Component: Videos
        }, {
            path: '/admin/Projects',
            name: 'Projects',
            Component: Projects
        }, {
            path: '/admin/Image/AddImage',
            name: 'AddImage',
            Component: AddImage
        }, {
            path: '/admin/Image/Update',
            name: 'Update',
            Component: Update
        }
    ]

    const accessible = (item) => {
        switch (item) {
            case 'AddImage':
                return false;
            case 'Update':
                return false;
            default:
                return true;

        }
    }
    const renderIcon = (item) => {
        switch (item) {
            case 0:
                return (<HomeIcon/>)
            case 1:
                return (<SettingsIcon/>)
            case 2:
                return (<ImageIcon/>)
            case 3:
                return (<OndemandVideoIcon/>)
            case 4:
                return (<AccountTreeIcon/>)

        }
    }

    return (
      
            <Router>
                <CssBaseline/>
                <AppBar position="fixed" open={open} color="secondary">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                mr: 2,
                                ...(open && {
                                    display: 'none'
                                })
                            }}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            DashBoard Admin
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper' : {
                            width: drawerWidth,
                            boxSizing: 'border-box'
                        }
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {
                                theme.direction === 'ltr'
                                    ? <ChevronLeftIcon/>
                                    : <ChevronRightIcon/>
                            }
                        </IconButton>
                    </DrawerHeader>
                 
                    <List>
                        {
                            routes.map((route, index) => (
                                accessible(route.name)
                                    ? <Nav.Link
                                        key={route.path}
                                        as={NavLink}
                                        to={route.path}
                                        activeClassName="active"
                                        exact>
                                        <ListItem button key={route.name}>

                                            <ListItemIcon>
                                                {renderIcon(index)}
                                            </ListItemIcon>
                                            <ListItemText primary={route.name}/>
                                        </ListItem>
                                    </Nav.Link>
                                    : null
                            ))
                        }
                    </List>

                </Drawer>
                <Main open={open}>
                    <DrawerHeader/>
                    <Box>
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
                                                </div>
                                            </CSSTransition>
                                        )
                                    }
                                </Route>
                            ))
                        }
                    </Box>

                </Main>
            </Router>
      
    );
}