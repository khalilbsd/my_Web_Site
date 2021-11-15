import * as React from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import {useEffect} from 'react';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    hello: {
        marginTop: 50
    }

});

const icon = (
    <Typography variant="h1" color="secondary" align="center">Hello</Typography>
);

export default function Welcome() {
    const [checked, setChecked] = React.useState(false);
    const classes = useStyles();
    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <Box sx={{
                height: 180
            }} className={classes.hello}>

            <Grow
                in={checked}
                style={{
                    transformOrigin: '0 0 0'
                }}
                {...(checked ? { timeout: 1000 } : {})}>
                {icon}
            </Grow>

        </Box>
    );
}