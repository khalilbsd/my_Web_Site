import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useSelector} from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import {makeStyles} from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';

const useStyles = makeStyles({
  ImagesContianer:{
    backgroundColor:'lightgrey',
    borderRadius:5,
    maxHeight:535,
    width:'30%'
 
  },
  imageContainer:{
    height:535,
    width:'95%',
    textAlign:'center',
    display: 'table-cell',
    verticalAlign:'middle',
    

  },
  image:{
   width:'100%',
   height:'100%',
   display:'block',
   margin:'0 auto'
  },


  messageTypography:{
    overflow:'auto',
    overflowWrap: 'break-word',
    maxHeight:250,
    overflowX:'hidden'
  },
  postContent:{
    paddingRight:10
  }
})

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    borderRadius:3,
    boxShadow: 24,
    height:'80%',
    p: 4
};

const ImageModal = ({open, handleClose, id}) => {
    const classes=useStyles();
    const posts = useSelector(state => state.reducer__image)

    return (
      <Modal
                  
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500
                    }}>

                    <Fade in={open}>
                        <Box sx={style}>
                            <Grid container >
                              {
                                posts?
                                  posts.map((post,key)=>(
                                    post._id===id&&
                                      <>
                                      <Grid item md={4} sm={4} key={key} className={classes.postContent}>
                                        <Typography gutterBottom variant='h5'>
                                          {post.title} 
                                        </Typography>
                                        <Typography  variant='subtitle2' gutterBottom color="primary">
                                        {moment(post.createdAt).fromNow()}
                                        </Typography> 
                                        <Typography  variant='subtitle2' gutterBottom color="primary">
                                       <LocationOnIcon fontSize="xs"/>   {post.place} {post.type} : {post.photography_type}
                                        </Typography>
                                        <Typography variant='subtitle1' gutterBottom className={classes.messageTypography} >
                                            {post.message}
                                        </Typography>
                                        <Typography variant='subtitle2' gutterBottom color="primary"  >
                                            {post.tags.map((tag,index)=>(
                                               <> #{tag},</> 
                                            ))}
                                        </Typography>
                                  </Grid>
                                  <Grid item md={8} sm={8} align="center" key={key} className={classes.ImagesContianer}>
                                    <div className={classes.imageContainer}>
                                     <img src={post.src} className={classes.image}/>
                                    </div>
                                  </Grid>
                                  </>
                                    
                                  ))
                                :
                                <Grid item xs={12} sm={4} md={4}>  
                                <Skeleton variant="rectangular" width={300} height={400} />
                                </Grid>
                              }
                               
                            </Grid>
                        </Box>
                    </Fade>
                </Modal>
    )
}

export default ImageModal
