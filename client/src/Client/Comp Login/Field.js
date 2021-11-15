import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    
    fiel: {
        width: '100%',
        '&:focus':{
            borderColor:'yelllow'
        }
    }
});
const Field = ({
    label,
    id,
    type,
    handleChange,
    half,
    multi,
    name,
    notNull
}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={half
                ? 6
                : 12}>
            <TextField
                className={classes.fiel}
                name={name}
                type={type}
                onChange={handleChange}
                id={id}
                label={label}
                variant="outlined"
                required={notNull?true:false}
                multiline={multi?true:false}
                />
        </Grid>
    )

}
export default Field;
