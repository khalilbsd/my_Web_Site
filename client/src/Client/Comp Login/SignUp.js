import React from 'react'
import {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FileBase from 'react-file-base64';
//date picker
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';

//style
import {makeStyles} from '@material-ui/styles';
import Grid from '@mui/material/Grid';
//componenet field
import Field from './Field';

const useStyles = makeStyles({

    content: {
        paddingTop: 20
    },
    desc: {
        width: '100%'
    },
    right: {},
    left: {
        paddingRight: '10px'
    }
});
const steps = ['Personel information', 'Social media', 'Account'];

const SignUp = () => {
    const [value, setValue] = React.useState(new Date());
    const classes = useStyles()
    const [adminData, setAdminData] = useState({
        name: '',
        lname: '',
        name: '',
        lname: '',
        desc: '',
        date_birth: '',
        image: '',
        linkd: '',
        instagram: '',
        job: '',
        fb: '',
        Git: ''
    })
    const handleReset = () => {
        setActiveStep(0);
    };
    const handleForm = () => {
        alert("done")
    };
    const handleChange = () => {}
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this, it should never occur
            // unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const renderComponent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Grid
                        container
                        spacing={1}
                        direction="column"
                        className={classes.content}
                        alignItems="center">
                        <Grid container xs={12} direction="ligne" spacing={2} sm={12}>
                            <Field onChange={handleChange} label="name" id="name" half="half"/>
                            <Field onChange={handleChange} label="Last Name" id="lname" half="half"/>
                        </Grid>
                        <Grid
                            container
                            xs={12}
                            direction="ligne"
                            className={classes.content}
                            spacing={2}
                            sm={12}>
                            <Grid item xs={12} md={6} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={0}>
                                        <MobileDatePicker
                                            label="Birthday"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField label="Standard" {...params}/>
                                            }
                                        />

                                    </Stack>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} md={6} sm={6}>
                                <div className={classes.file}>
                                    <FileBase type="file" multiple={false} onDone={handleChange}/>
                                </div>
                            </Grid>

                        </Grid>
                        <Grid
                            container
                            xs={12}
                            direction="ligne"
                            className={classes.content}
                            spacing={2}
                            sm={12}>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    className={classes.desc}
                                    id="outlined-textarea"
                                    label="Description"
                                    placeholder="descrption here"
                                    multiline="multiline"/>
                            </Grid>
                        </Grid>

                    </Grid>

                )
            case 1:
                return (
                    <Grid container spacing={2} direction="column" alignItems="center">
                        <Grid
                            container
                            xs={12}
                            direction="Column"
                            className={classes.content}
                            spacing={1}
                            sm={12}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Field onChange={handleChange} label="Gmail" id="Gmail"/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Field onChange={handleChange} label="facebook" id="facebook"/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Field onChange={handleChange} label="instagram" id="instagram"/>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12}><Field onChange={handleChange} label="Linkedln" id="Linkedln"/>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            case 2:
                return (
                    <Grid container spacing={2} direction="column" alignItems="center">
                        <Grid
                            container
                            xs={12}
                            direction="Column"
                            className={classes.content}
                            spacing={1}
                            sm={12}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Field onChange={handleChange} label="email" id="email"/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Field
                                    onChange={handleChange}
                                    label="Password"
                                    type="password"
                                    id="pwd"
                                   />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Field
                                    onChange={handleChange}
                                    label="Confirm password"
                                    type="password"
                                    id="pwd"
                                    />
                            </Grid>
                        </Grid>
                    </Grid>
                )
        }
    }
    return (
        <div>

            <Stepper activeStep={activeStep}>
                {
                    steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (<Typography variant="caption">Optional</Typography>);
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })
                }
            </Stepper>

            {
                activeStep === steps.length
                    ? (
                        <React.Fragment>
                            <Typography
                                sx={{
                                    mt: 2,
                                    mb: 1
                                }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    pt: 2
                                }}>
                                <Box
                                    sx={{
                                        flex: '1 1 auto'
                                    }}/>
                                <Button onClick={handleReset}>Reset</Button>
                                <Button onClick={handleForm}>Done</Button>
                            </Box>
                        </React.Fragment>
                    )
                    : (
                        <React.Fragment className={classes.content}>

                            {renderComponent(activeStep)}

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    pt: 2
                                }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{
                                        mr: 1
                                    }}>
                                    Back
                                </Button>
                                <Box
                                    sx={{
                                        flex: '1 1 auto'
                                    }}/> {
                                    isStepOptional(activeStep) && (
                                        <Button
                                            color="inherit"
                                            onClick={handleSkip}
                                            sx={{
                                                mr: 1
                                            }}>
                                            Skip
                                        </Button>
                                    )
                                }

                                <Button onClick={handleNext}>
                                    {
                                        activeStep === steps.length - 1
                                            ? 'Finish'
                                            : 'Next'
                                    }
                                </Button>
                            </Box>
                        </React.Fragment>
                    )
            }

        </div>
    )
}

export default SignUp