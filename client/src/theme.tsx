import { createTheme } from '@mui/material/styles';
/*import {} from "@material-ui/core/colors";*/

export const Theme =createTheme({
    typography:{
        h1:{
            fontFamily:'Hachi Maru Pop',
            fontSize:'80px',
        },


        h4:{
            fontFamily:'Hachi Maru Pop',
            fontSize:'30px',
        },
        h5 :{
            fontFamily:'Roboto Slab',
           fontSize:'20px'
          
        },
        subtitle1 :{
         fontFamily:'Roboto Slab',
        fontSize:'15px'
       
     },

     body1:{
        fontFamily:'Roboto Slab',
        fontSize:'18px'
     },
     body2:{
        fontFamily:'Roboto Slab',
        fontSize:'16px'
     }

    },
    
    palette:{
        primary:{
            main:'#5900ff',
            contrastText:'white'
    },
        secondary:{
            main:'#ffd900',
            contrastText:'white'
        },
        info:{
            main:'#ff8c00',
        }
},
}
)