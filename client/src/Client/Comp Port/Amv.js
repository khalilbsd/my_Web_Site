import React,{useState,useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useDispatch,useSelector} from 'react-redux'
import {makeStyles} from '@mui/styles';
//action
import { fetchAmvVideos } from '../../api/api__video';

const useStyles = makeStyles({
    pageTitle:{
        paddingTop:'3%'
    },
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
const Amv = () => {
    const classes=useStyles()
    const dispatch=useDispatch()
    const size = useSelector(state => state.reducer__window__size)
    const [videos, setvideos] = useState([])
    const youtube = useSelector(state => state.reducer__video)

/*useEffect(() => {
    dispatch(fetchAmvVideos())
}, [dipsatch])
*/

    return (
      <Grid container  spacing={5}
      sx={{

          marginBottom: 20,
          paddingTop: 5
      }}>
          <Grid item xs={12} md={12} md={12} align="center" >
          <Typography variant="h4" color="secondary" className={classes.pageTitle}>AMV videos</Typography>
          </Grid>
          {
    youtube.items
        ? (youtube.items.map((vid, key) => (
                vid
                ? vid.id.videoId && <Grid item="item" xs={12} align="center" md={4} sm={4} key={key}>
                    <iframe
                        className={classes.video}
                        width="90%"
                        height="270"
                        src={`https://www.youtube.com/embed/${vid.id.videoId}`}/>
                </Grid>
                : <Grid item="item" xs={12} md={4} sm={4}>
                    <Skeleton variant="rectangular" animation="wave" width={210} height={118}/>
                </Grid>
            )))
        : (
            <Grid item="item" xs={12} align="center" sm={12} md={12}>
                {
                    size.width && size.width > 400
                        ? <Grid container="container" direction="row">
                                <Grid item="item" md={4}>
                                    <Skeleton
                                        variant="rectangular"
                                        className={classes.skleletonLoader}
                                        width={'90%'}
                                        height={270}/>

                                </Grid>
                                <Grid item="item" md={4}>
                                    <Skeleton
                                        variant="rectangular"
                                        className={classes.skleletonLoader}
                                        width={'90'}
                                        height={270}/>

                                </Grid>
                                <Grid item="item" md={4}>
                                    <Skeleton
                                        variant="rectangular"
                                        className={classes.skleletonLoader}
                                        width={'90%'}
                                        height={270}/>

                                </Grid>
                            </Grid>

                        : <CircularProgress color="primary" className={classes.circularLoader}/>

                }
            </Grid>
        )

}
      </Grid>
    )
}

export default Amv
