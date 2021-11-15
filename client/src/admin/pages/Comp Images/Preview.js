import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
const Preview = ({
    title,
    message,
    place,
    type,
    photype,
    src,
    hashtag
}) => {
  

    return (
        <Card sx={{
                maxWidth: 345
            }}>
            <CardMedia component="img" height="194" image={src} alt="Paella dish"/>
            <CardContent>
                <Typography variant="subtitle2" color="#bababa">
                    <LocationOnIcon
                        fontSize="small"
                        sx={{
                            marginRight: 1
                        }}/>{place}
                </Typography>
                <Typography variant="subtitle2" color="#bababa">
                    <CameraAltIcon fontSize="samll"/> {type}
                    : {photype}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {message}
                </Typography>
                
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Preview
