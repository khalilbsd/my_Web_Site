import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  
    text: {
        position: "absolute",
        top: "40%",
        width: "100%",
        textAlign: "center",
        color: "white",
        backgroundColor: "none",
        fontFamily: "Roboto Slab",
        '&:hover':{
            
        }
    }
})

const Btn = ({name, image}) => {
    const classes = useStyles()
    return (

        <Card
            sx={{
                maxWidth: 345
            }}
            className="btn-card-navigation">
            <CardActionArea>
                <CardMedia sx={{
                    height:270
                }} component="img" className="btn-card-navigation-image" height="140" image={image} alt={name}/>

                <Typography variant="h4" className={classes.text}>
                    {name}
                </Typography>

            </CardActionArea>
        </Card>

    )
}

export default Btn
