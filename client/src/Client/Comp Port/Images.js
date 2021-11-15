import React, {useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardImage from './CardImage'
import {useDispatch, useSelector} from 'react-redux';
import {getImages} from '../../actions/action__images';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
//style
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
    containerMobile:{
        paddingBottom:'20%'
    },
    circularLoader: {
        marginTop: '50%'
    },
    skleletonLoader: {
        marginTop: '10%'
    }
})

const Images = () => {
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const dispatch = useDispatch()
    const posts = useSelector(state => state.reducer__image)
    //const size = useSelector(state => state.reducer__window__size)
    useEffect(() => {
        dispatch(getImages())
    }, [])

    return (
        <Container maxWidth="lg">
            <Grid
            className={matches?classes.containerWeb:classes.containerMobile}
                container
                spacing={{
                    xs: 2,
                    md: 3
                }}
                columns={{
                    xs: 4,
                    sm: 8,
                    md: 12
                }}>

                {

                    posts.length > 0
                        ? (posts.map((post, key) => (
                            post.type === "photography" && 
                            <Grid item key={key.toString()} align="center" xs={12} sm={4} md={4}>
                                <CardImage
                                    id={post._id}
                                    title={post.title}
                                    place={post.place}
                                    type={post.type}
                                    phtp={post.photography_type}
                                    message={post.message}
                                    tags={post.tags}
                                    image={post.src}
                                    date={post.createdAt}/>
                            </Grid>

                        )))
                        : (
                            <Grid item xs={12} align="center" sm={12} md={12}>
                                {
                                  matches?
                                        <Grid container direction="row">
                                                <Grid item md={4}>
                                                    <Skeleton
                                                        variant="rectangular"
                                                        className={classes.skleletonLoader}
                                                        width={320}
                                                        height={420}/>

                                                </Grid>
                                                <Grid item  md={4}>
                                                    <Skeleton
                                                        variant="rectangular"
                                                        className={classes.skleletonLoader}
                                                        width={320}
                                                        height={420}/>

                                                </Grid>
                                                <Grid item  md={4}>
                                                    <Skeleton
                                                        variant="rectangular"
                                                        className={classes.skleletonLoader}
                                                        width={320}
                                                        height={420}/>

                                                </Grid>
                                            </Grid>

                                        : <CircularProgress color="primary" className={classes.circularLoader}/>

                                }
                            </Grid>
                        )

                }

            </Grid>
        </Container>

    )
}

export default Images
