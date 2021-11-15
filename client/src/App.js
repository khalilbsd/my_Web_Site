import React, {useEffect, useState} from 'react';
//styles
import './css/style.css'
//theme
import {Theme} from './theme.tsx'
import {ThemeProvider} from '@mui/material/styles';
import Menu from './Client/Menu';
import Navbar from './admin/Navbar'


const isAdminroute = (route) => {
    switch (route.includes('/admin')) {
        case true:
            return true;
        case false:
            return false;
        default:
            return false

    }
}

function App() {
    const [location, setLocation] = useState('')
    useEffect(() => {
        setLocation(window.location.pathname)
    }, [window.location.pathname])
    return (
      
           
            <ThemeProvider theme={Theme}>
                {
                    !isAdminroute(location)
                        ? <Menu/>
                        : <Navbar/>
                }
            </ThemeProvider>

        
    );
}

export default App;
