import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {makeStyles} from '@mui/styles';
/*slect*/
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const useStyles = makeStyles({
    input: {
        width: '100%',
        paddingRight:10
    },
    field: {
        backgroundColor: "white",
        border: 'none',
        borderRadius: 10
    },
    SelectTitle: {
        marginTop: -10
    },
    SelectContent: {
        backgroundColor: 'white',
        width:'100%'
    }
})

const Field = ({
    id,
    name,
    label,
    handleChange,
    select,
    item1,
    item2,
    half,
    quarter,
    multi,
    initial
}) => {
    const classes = useStyles()
    return (
      
            <Grid item md={ half?6:quarter?4:12}  className={classes.input}>
                {
                    select?
                         (
                            <FormControl fullWidth>
                                <InputLabel id="type" className={classes.SelectTitle}>{label}</InputLabel>
                                <Select
                                    className={classes.SelectContent}
                                    required
                                    value={initial}
                                    labelId={id}
                                    name={name}
                                    id={id}
                                    onChange={handleChange}
                                    label={label}
                                    autoWidth
                                    size="small">
                                    <MenuItem value="">
                                        <em>Choose a type</em>
                                    </MenuItem>
                                    <MenuItem value={item1}>{item1}</MenuItem>
                                    <MenuItem value={item2}>{item2}</MenuItem>

                                </Select>
                            </FormControl>
                        )
                        : <TextField
                                className={classes.field}
                                multiline={multi?true:false}
                                maxRows={10}
                                id={id}
                                name={name}
                                label={label}
                                onChange={handleChange}
                                variant="outlined"
                                size="small"
                                required
                                fullWidth/>
                }

            </Grid>
        
    )
}

export default Field
