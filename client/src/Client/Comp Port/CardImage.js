import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';
import Grid from '@mui/material/Grid';
import {makeStyles} from '@mui/styles';
import {CardActionArea} from '@mui/material';
//modal
import ImageModal from './ImageModal'
const useStyles = makeStyles({
   
   customText:{
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height:30,
    marginBottom:10
   },
   tags:{
    height:20,
    textOverflow:'ellipsis',
    whiteSpace: 'nowrap',
    overflow:'hidden'
   }
})

const CardImage = ({
    title,
    place,
    type,
    phtp,
    message,
    tags,
    image,
    date,
    id
}) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Card sx={{
            marginTop:'10%',
            marginBottom:'5%',
                maxWidth:320,
                minWidth: 320,
                maxHeight:420
            }}>
            <ImageModal handleClose={handleClose} open={open} id={id}/>
            <CardActionArea onClick={handleOpen}>
                <CardMedia component="img" height="250" image={image} alt={title}/>
                <CardContent>
                    <div>

                    <Typography variant="h5" color="text.secondary">
                        {title}
                    </Typography>
                    </div>
                    <div>
                    <Typography variant="subtitle1" color="#bababa">
                        <LocationOnIcon
                            fontSize="xs"
                            sx={{
                                marginRight: 0  
                            }}/> {place}  {moment(date).fromNow()}
                    </Typography>
                    </div>
                    <div>

                    <Typography variant="subtitle1" color="#bababa">
                        {type}
                        : {phtp}
                    </Typography>
                    </div>
                    <div>
                    <Typography variant="body1" color="text.secondary" className={classes.customText}>
                        {message}
                    </Typography>

                    </div>
                    <div>

                    <Typography variant="subtitle1" color="primary" className={classes.tags}>
                        <Grid container direction="row">
                            {
                                tags.map((tag, key) => (
                                    key<3?
                                    <Grid item  key={key.toString()}>
                                      #{tag + ', '}
                                    </Grid>
                                    :'...'
                                ))
                            }
                        </Grid>
                    </Typography>
                    </div>
                </CardContent>
            </CardActionArea>

           {/* <CardActions disableSpacing="disableSpacing">
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>

                        </CardActions>*/}
        </Card>
    )
}

export default CardImage
