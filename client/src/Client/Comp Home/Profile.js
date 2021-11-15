import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//style
import {makeStyles} from '@material-ui/styles';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
    card: {
        padding: '5%',
        width: '90%'
    },
    name: {
        paddingTop: '20%',
        paddingBottom: '3%'
    },
    about: {
        float: 'left',
        paddingTop: '5%'
    },

    seeMore: {
        background: 'red'
    }

})

const Profile = () => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardContent >
                <Grid container align="center" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Avatar
                            className={classes.avatar}
                            alt="Remy Sharp"
                            src=""
                            sx={{
                                width: 150,
                                height: 150
                            }}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography className={classes.name} variant="h5">
                            Khalil BEN SAID
                        </Typography>
                        <Typography gutterBottom component="div">
                            Web Developer
                        </Typography>
                    </Grid>
                </Grid>

                <Typography color="text.secondary" className={classes.about}>
                    descrption
                </Typography>

            </CardContent>

        </Card>
    )
}

export default Profile;
