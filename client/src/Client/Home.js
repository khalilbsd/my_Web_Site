//style
import {makeStyles} from '@mui/styles';
import Grid from '@mui/material/Grid';
//components
import Welcome from "./Comp Home/Welcome";
import Profile from "./Comp Home/Profile"
import Typography from '@mui/material/Typography'
const useStyles = makeStyles({
    load: {
        paddingTop: '5%',
        paddingBottom: 100
    }
})
const Home = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.load} spacing={2}>
            <Grid
                item
                align="center"
                sx={{
                    paddingBottom: '3%'
                }}
                className="pageTitlecontainer"
                xs={12}
                md={12}
                sm={12}>

                <Typography align="center" color="black" variant="h5" className="pageTitle">Home</Typography>

            </Grid>
            <Grid item xs={12} md={5} sm={5}>
                <Welcome/>
            </Grid>

            <Grid item xs={12} align="center" md={7}>
                <Profile/>
            </Grid>
        </Grid>
    )
}

export default Home;