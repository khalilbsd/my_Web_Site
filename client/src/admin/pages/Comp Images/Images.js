import React, {useState} from 'react'
import update from 'react-addons-update';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
/*icon*/
import IconButton from '@mui/material/IconButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Field from './Field.js'
import ClearIcon from '@mui/icons-material/Clear';
import FileBase from 'react-file-base64';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Preview from './Preview';
//dispatch
import { useDispatch } from 'react-redux';
//actions
import { createImage } from '../../../actions/action__images';

const useStyles = makeStyles({

    leftSection: {
        marginTop:'3%',
        backgroundColor: "#00fa9a",
        height: '80vh',
        borderRadius: '10px 100px / 120px',
        paddingLeft:5,
        marginLeft:'10%'

    },
    leftSectionContainer: {
        paddingTop: '5%',
        paddingLeft: '2%'
    },
    leftSectionContainer2: {

        paddingLeft: '3%'
    },
    PreviewContainer: {
        paddingLeft: '25%',
        paddingTop: '25%'
    },
    title: {
        paddingTop: 80,
        paddingBottom: 50
    },
    input: {
        paddingBottom: 10
    },
    card: {
        marginRight: 10,
        marginBottom: 10
    },
    content: {
        background: 'white',
        paddingLeft: 10,
        display: 'flex'
    },
    tag: {
        paddingTop: 6
    },

    picture: {
        width: '100%'
    },
    btnSubmit: {
        backgroundColor: 'white',
        color: 'rgb(0,250,154)',
        '&:hover': {
            backgroundColor: 'rgb(4, 138, 87)',
            color: 'white',
            IconSubmit: {
                color: 'white'
            }
        }
    },
    test: {
        backgroundColor: "blue"
    }

});

const initialState = {
    title: '',
    message: '',
    place: '',
    type: '',
    photography_type: '',
    tags: [],
    src: '',
    createdAt: new Date()
}

const Images = () => {
    const [counter, setCounter] = useState(0)
    const classes = useStyles();
    const [information, setInfo] = useState(initialState)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInfo({
            ...information,
            [e.target.name]: e.target.value
        });
    };

    /*add a tag*/
    const addCard = (e) => {
        e.preventDefault()
        if ((counter === 0) || (information.tags[counter - 1] !== '')) {
           
            setInfo({
               ...information,tags:
                [...information.tags,'']
            })
            setCounter(counter + 1)
          
        }
    }

    const handleTag = (e) => {
        if (e.key === 'Enter') {
            {
                setInfo(update(information, {
                    tags: {
                        [Number(e.target.id)]: {
                            $set: e.target.value
                        }
                    }
                }))
            }
        }
    }

    /* tag distruction*/
    const deleteCard = () => {}

    /*submit form*/
    const handleForm = (e) => {
        e.preventDefault()
      dispatch(createImage(information))
    }

    const preventForm = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
        }

    }

    return (
        <div className={classes.main}>
            <Grid
                container
                rowSpacing={0}
                columnSpacing={{
                    xs: 1,
                    sm: 2,
                    md: 0
                }}>

                <Grid item xs={12} sm={6}>
                    <div className={classes.leftSection}>
                        <Typography
                            variant="subtitle1"
                            color="white "
                            className={classes.title}
                            align="center">Add Image</Typography>
                        <form onSubmit={handleForm} onKeyPress={preventForm}>
                            <Grid container spacing={1} direction="column" fixed>
                                <Grid
                                    direction="row"
                                    container
                                    className={classes.leftSectionContainer}
                                    spacing={1}
                                    fixed>
                                    <Field
                                        id="title"
                                        half="half"
                                        name="title"
                                        handleChange={handleChange}
                                        label="Title"/>
                                    <Field
                                        id="place"
                                        half="half"
                                        name="place"
                                        handleChange={handleChange}
                                        label="place"/>.
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    className={classes.leftSectionContainer2}
                                    spacing={2}>
                                    <Field
                                        half="half"
                                        initial={information.type}
                                        id="type"
                                        name="type"
                                        select="select"
                                        label="Picture type"
                                        item1="photography"
                                        valueItem1="photography"
                                        item2="photo manipulation"
                                        valueItem2="photoshop"
                                        handleChange={handleChange}/> {

                                        information.type === 'photography'
                                            ? (
                                                <Field
                                                initial={information.photography_type}
                                                    select="select"
                                                    id="type"
                                                    name="photography_type"
                                                    label="Picture type"
                                                    item1="Night photography"
                                                    item2="Street photography"
                                                    half="half"
                                                    handleChange={handleChange}/>
                                            )
                                            : null
                                    }
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    spacing={2}
                                    className={classes.leftSectionContainer}
                                    >
                                    <Field
                                        id="message"
                                        half="half"
                                        name="message"
                                        multi="multi"
                                        handleChange={handleChange}
                                        label="message"/>
                                    {/*tag card begin*/}
                                    <Grid item md={6} className={classes.input}>
                                        <Grid container direction="row">
                                            {
                                                information.tags
                                                    ? information.tags.map(
                                                        (entry, key) => entry === ''
                                                        ? (
                                                    
                                                            <Grid item className={classes.inputTags} key={key.toString()}>
                                                                <TextField
                                                                    id={key.toString()}
                                                                    size="small"
                                                                    label="Hashtag"
                                                                    className={classes.inputs}
                                                                    variant="outlined"
                                                                    onKeyPress={handleTag}/>
                                                                <IconButton type="button" aria-label="cancel tag" onClick={deleteCard}>
                                                                    <ClearIcon/>
                                                                </IconButton>
                                                            </Grid>
                                                        )
                                                    
                                                        : <Grid item className={classes.inputTags} key={key.toString()}>
                                                            <Card className={classes.card}>
                                                                <Grid container direction="row">
                                                                    <div className={classes.content}>
                                                                        <Grid item className={classes.tag}>
                                                                            {entry}
                                                                        </Grid>
                                                                        <Grid item className={classes.btn_icon}>
                                                                            <IconButton
                                                                                type="button"
                                                                                size="small"
                                                                                aria-label="cancel tag"
                                                                                onClick={deleteCard}>
                                                                                <DeleteForeverOutlinedIcon size="small"/>
                                                                            </IconButton>
                                                                        </Grid>
                                                                    </div>
                                                    
                                                                </Grid>
                                                    
                                                            </Card>
                                                        </Grid>
                                                    )
                                                    : null
                                            }
                                            {
                                                information.tags
                                                    ? <IconButton
                                                            disabled={information.tags[information.tags.length - 1] === ' ' && true}
                                                            aria-label="add tag"
                                                            onClick={addCard}>
                                                            <AddCircleIcon/>
                                                        </IconButton>
                                                    : null
                                            }
                                        </Grid>
                                    </Grid>
                                    <Grid item className={classes.input}>
                                        <FileBase
                                            name="src"
                                            type="file"
                                            multiple={false}
                                            onDone={({base64}) => setInfo({
                                                ...information,
                                                src: base64
                                            })}/>
                                    </Grid>

                                    <Button
                                        variant="contained"
                                        className={classes.btnSubmit}
                                        type="submit"
                                        endIcon={<AddAPhotoIcon className = {
                                            classes.IconSubmit
                                        } />}>
                                        Add
                                    </Button>

                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} className={classes.rightSection}>
                    <Container fixed>
                        <Grid item xs={12} sm={12} className={classes.PreviewContainer}>
                            <Preview
                                title={information.title}
                                message={information.message}
                                place={information.place}
                                photype={information.photography_type}
                                type={information.type}
                                hashtag={information.tags}
                                src={information.src}/>
                        </Grid>

                    </Container>
                </Grid>
            </Grid>

        </div>
    )
}

export default Images
