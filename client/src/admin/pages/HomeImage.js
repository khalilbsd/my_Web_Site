import React from 'react'
import PropTypes from 'prop-types';
import ButtonUnstyled, {buttonUnstyledClasses} from '@mui/core/ButtonUnstyled';
import {styled} from '@mui/system';
import Grid from '@mui/material/Grid';
import {makeStyles} from '@mui/styles';
/*icon*/
import {BrowserRouter as Router} from "react-router-dom";
import Link from '@mui/material/Link';
import UpdateIcon from '@mui/icons-material/Update';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
    const {
        children,
        ...other
    } = props;

    return (
        <svg width="200" height="200" {...other} ref={ref}>
            <polygon points="0,200 0,0 200,0 200,200" className="bg"/>
            <polygon points="0,200 0,0 200,0 200,200" className="borderEffect"/>
            <foreignObject x="0" y="0" width="200" height="180">
                <div className="content">{children}</div>
            </foreignObject>
        </svg>
    );
});

ButtonRoot.propTypes = {
    children: PropTypes.node
};

const CustomButtonRoot = styled(ButtonRoot)(
    ({theme}) => `
    overflow: visible;
    cursor: pointer;
    --main-color: ${theme.palette.mode === 'light'
        ? 'rgb(25,118,210)'
        : 'rgb(144,202,249)'};
    --hover-color: ${theme.palette.mode === 'light'
            ? 'rgba(25,118,210,0.04)'
            : 'rgba(144,202,249,0.08)'};
    --active-color: ${theme.palette.mode === 'light'
                ? 'rgba(25,118,210,0.12)'
                : 'rgba(144,202,249,0.24)'};
  
    & polygon {
      fill: transparent;
      transition: all 800ms ease;
      pointer-events: none;
    }
    
    & .bg {
      stroke: var(--main-color);
      stroke-width: 0.5;
      filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
      fill: transparent;
    }
  
    & .borderEffect {
      stroke: var(--main-color);
      stroke-width: 2;
      stroke-dasharray: 150 600;
      stroke-dashoffset: 150;
      fill: transparent;
    }
  
    &:hover,
    &.${buttonUnstyledClasses.focusVisible} {
      .borderEffect {
        stroke-dashoffset: -600;
      }
  
      .bg {
        fill: var(--hover-color);
      }
    }
  
    &:focus,
    &.${buttonUnstyledClasses.focusVisible} {
      outline: none;
    }
  
    &.${buttonUnstyledClasses.active} { 
      & .bg {
        fill: var(--active-color);
        transition: fill 300ms ease-out;
      }
    }
  
    & foreignObject {
      pointer-events: none;
  
      & .content {
        font-family: Helvetica, Inter, Arial, sans-serif;
        font-size: 14px;
        font-weight: 200;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--main-color);
        text-transform: uppercase;
        border-radius:100px;
      }
  
      & svg {
        margin: 0 5px;
      }
    }`,
);
const SvgButton = React.forwardRef(function SvgButton(props, ref) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref}/>;
});

const useStyles = makeStyles({
    root: {
        marginTop: '5%'
    },
    add: {
        float: 'right'
    },
    addSection: {
        paddingRight: 50
    },
    updateSection: {
        paddingLeft: 50
    }
})


const HomeImage = () => {
    const classes = useStyles()
    return (
      
            <Router>
                <Grid container className={classes.root}>
                    <Grid item xs={12} md={6} className={classes.addSection}>
                        <Link href="/admin/Image/AddImage" underline="none">
                            <SvgButton className={classes.add}><AddAPhotoIcon fontSize="large"/></SvgButton>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.updateSection}>
                    <Link href="/admin/Image/Update" underline="none">
                        <SvgButton><UpdateIcon fontSize="large"/></SvgButton>
                        </Link>
                    </Grid>

                </Grid>
            </Router>
        
    )
}

export default HomeImage
