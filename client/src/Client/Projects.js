import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Grid from '@mui/material/Grid';
import {getGithubRepos} from "../actions/action.__projects";
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
//icons
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';

const useStyles = makeStyles({
   
    folderContainer:{
        paddingTop:'5%'
    },
    folder:{
        fontSize:'130px',
    },
    circularLoader: {
        marginTop: '50%'
    },
    skleletonLoader: {
        marginTop: '5%'
    },
    Icon_btn:{
        '&:hover':{
            backgroundColor:'transparent'
        }
    },

})
const Projects = () => {
    const classes=useStyles()
    const git = useSelector(state => state.reducer_projects)
    const dispatch = useDispatch()
    const size = useSelector(state => state.reducer__window__size)
    useEffect(() => {
        dispatch(getGithubRepos())
    }, [])


    const handleProject= (name) =>{
        console.log('haha')
    }
    return (
        <Grid container alignItems="center" >
             <Grid
                    item="item"
                    align="center"
                    sx={{
                        paddingTop:'5%',
                        paddingBottom: '3%'
                    }}
                    className="pageTitlecontainer"
                    xs={12}
                    md={12}
                    sm={12}>
                    <Typography align="center" color="black" variant="h5" className="pageTitle">Portfolio</Typography>

                </Grid>
            {
                git.length > 0
                    ? 
                    git.map((project,index)=>(
                    <Grid item xs={12} mds={3} align="center" key={index} sm={3} className={classes.folderContainer}>
                        <Link href={`https://github.com/khalilbsd/${project.name}`} target="_blank" underline="none">
                            <IconButton aria-label="folder" className={classes.Icon_btn} >
                                <FolderIcon className={classes.folder}/>
                            </IconButton>
                        
                            <Typography variant="h5" align="center">
                                    {project.name}
                            </Typography>
                        </Link>
                        </Grid>
                    ))

                    :
                    (
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

export default Projects;