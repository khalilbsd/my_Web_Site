import Grid from '@mui/material/Grid';
import Btn from './Comp Port/Btn'
import {makeStyles} from '@mui/styles';
import photo from '../images/photo.JPG'
import pm from '../images/pm.jpg'
import video from '../images/video.jpg'
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography'
//router
import {BrowserRouter as Router} from "react-router-dom";
import Link from '@mui/material/Link';
const useStyles = makeStyles({
    container: {
        paddingTop: '4%',
        paddingBottom: '5%'
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Router>

            <Grid
                container
                className={classes.container}
                spacing={{
                    xs: 2,
                    md: 3
                }}
                columns={{
                    xs: 4,
                    sm: 8,
                    md: 12
                }}>
                <Grid
                    item
                    align="center"
                    sx={{

                        paddingBottom: '5%'
                    }}
                    className="pageTitlecontainer"
                    xs={12}
                    md={12}
                    sm={12}>
                    <Typography align="center" color="black" variant="h5" className="pageTitle">Portfolio</Typography>

                </Grid>

                <Grid item xs={12} sm={4} md={4} className={classes.item} align="center">
                    {
                        photo
                            ? <Link href="/portfolio/photography" underline="none">
                                    <Btn name="photography" image={photo}/>
                                </Link>
                            : <Skeleton variant="rectangular" animation="wave" width={210} height={118}/>

                    }
                </Grid>
                
                <Grid item xs={12} sm={4} md={4} className={classes.item} align="center">
                    {
                        video
                            ? <Link href="/portfolio/video" underline="none">

                                    <Btn name="video" image={video}/>
                                </Link>
                            : <Skeleton variant="rectangular" animation="wave" width={210} height={118}/>

                    }
                </Grid>
                <Grid item xs={12} sm={4} md={4} className={classes.item} align="center">
                    {
                        pm
                            ? <Link href="/portfolio/Photoshop" underline="none">
                                    <Btn name="photoshop" image={pm}/>
                                </Link>
                            : <Skeleton variant="rectangular" animation="wave" width={210} height={118}/>
                    }
                </Grid>
            </Grid>
        </Router>
    )
}

export default Portfolio;