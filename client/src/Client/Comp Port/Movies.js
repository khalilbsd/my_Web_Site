import Grid from '@mui/material/Grid';
import {makeStyles} from '@mui/styles';
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Btn from './Btn'
import Link from '@mui/material/Link';

//images
import Cinema from '../../images/cinema.jpg'
import Amv from '../../images/amv.jpg'
const useStyles = makeStyles({
    video: {
        borderRadius: 10,
        border: 'none',
        marginTop: '5%'
    },
    circularLoader: {
        marginTop: '50%'
    },
    skleletonLoader: {
        marginTop: '5%'
    }
})

const Movies = () => {
    const classes = useStyles()   
    return (

        <Grid
            container="container"
            spacing={5}
            sx={{
                marginBottom: 20,
                paddingTop: 5
            }}>.
            <Grid item="item" xs={12} md={12} align="center" sm={12}>
                <Typography variant="h4" color="primary">Choose a type</Typography>
            </Grid>
            <Grid item="item" xs={12} align="center" md={6} sm={6}>
                <Link href="/portfolio/video/amv" underline="none">
                    <Btn name="AMV" image={Amv}/>
                </Link>
            </Grid>
            <Grid item="item" xs={12} align="center" md={6} sm={6}>
                <Link href="/portfolio/video/cinema" underline="none">
                    <Btn name="Cinetmatic" image={Cinema}/>
                </Link>
            </Grid>

        </Grid>

    )
}

export default Movies
