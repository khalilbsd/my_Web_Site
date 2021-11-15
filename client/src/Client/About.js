import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import {makeStyles} from "@mui/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container'
import Link from '@mui/material/Link';

//image
import Tunisia from '../images/tunisia.PNG'
import MyImage from '../images/mine.jpg';
const useStyles = makeStyles({

    secondSection: {
        paddingTop: '5%'
    },
    country: {
        color: 'red'
    },
    imageContainer: {

        maxHeight: 300,
        paddingBottom: '3%'
    },
    tunMap:{
        width:'90%',
        marginTop:'10%',
        
    },
    list:{
        listStyleType:'none',
        margin: 0,
    padding:4    }
})

const About = () => {
    const classes = useStyles()
    return (
        <Container>
            <Grid container spacin={0}>
                <Grid
                    item
                    align="center"
                    sx={{
                        paddingTop: '5%',
                        paddingBottom: '10%'
                    }}
                    className="pageTitlecontainer"
                    xs={12}
                    md={12}
                    sm={12}>
                    <Typography align="center" color="black" variant="h5" className="pageTitle">About me</Typography>

                </Grid>

                <Grid
                    item
                    align="center"
                    xs={12}
                    md={4}
                    sm={4}
                    className={classes.imageContainer}>
                    <img className="about-image" src={MyImage}/>
                </Grid>
                <Grid item align="center" xs={12} md={8} sm={8}>
                    <Typography
                        variant="h5"
                        align="left"
                        sx={{
                            paddingBottom: '2%'
                        }}>
                        Welcome!</Typography>
                    <Typography variant="body2" align="left">
                        Who I'm I ? is a question that anybody can ask and answer at the same time. take
                        a person that's walking now in New York, ask him who are you? or tell him to
                        introduce himself. The answer will be similar to "I'm this person" or "my name
                        is". So welcome to the about section. The section that all of whom who had or
                        will visit my web site will be here asking to know me better.
                    </Typography>

                </Grid>
                <Grid container spacing={3} className={classes.secondSection}>

                    <Grid item xs={12} md={6} sm={6}>
                        <Typography
                            variant="h5"
                            align="left"
                            sx={{
                                paddingBottom: '2%'
                            }}>
                            Who am I ?</Typography>
                        <b>Khalil Ben Said</b> is my family name. I'm a 2 face coin, a web developer as a
                        professional career, and an artist as a hobby. I don't know if you consider this
                        section to be somehow relative or similar to a cover letter but here goes
                        nothing. I grew up, lived, and studied my entire life in 
                        <b className={classes.country}> Tunisia</b>
                        . Well,
                        technically I'm still a student. I've recently finished college from   <Link
                            href="http://www.istic.rnu.tn/en/"
                            underline="none"
                            target="_blank"
                            color="blue">
                             Istic 
                        </Link>  with
                        a computer science degree. For me, life was never about bus stops and a ride
                        from A to B. He who stops once will never be able to catch the train. Therefore
                        determined as ever with the same passion that started this journey I enrolled
                        myself in the night engineering cycle within     <Link href="https://esprit.tn/" color="red" underline="none" target="_blank">
                            Esprit
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} align="center">
                        <img src={Tunisia} className={classes.tunMap}/>
                    </Grid>
                </Grid>
                <Grid container className={classes.widSection} spacing={2}>
                    <Grid item xs={12} md={5} sm={5}>

                    </Grid>
                    <Grid item xs={12} md={7} sm={7}>
                    <Typography
                            variant="h5"
                            align="left"
                            sx={{
                                paddingBottom: '2%'
                            }}>
                                    What I do ? 
                     </Typography>
                     As mentioned above I'm a 2 face coin. The human being is combined with 2 forces the physical that allows
                      us to feel and touch our surroundings, and the spirit that allows us to feel emotions and feelings, and
                       none can exist without the other and that applies to me. The fact that my hobbies and my career are two 
                       separate ways allows me to be in peace. For my career I choose development as a general concept I found
                        myself passioned about the web and software development For instance I bet that you think that this website
                         is static written in
                      <b>HTML</b>,<b>CSS</b>, and<b>JS</b>? 
                     Actually this web site is developed using the <b>MERN stack </b> aloso called fullStack js. That's <b>MongoDb</b>,
                     <b>Express.js</b>, <b>ReactJS</b>, and  <b>Node.js</b>. All of what you see here, the responsivness,the functionnalities, the design, the structure
                     is hardcoded and developed from scratch Youll find my cv linked bellow for more technicall information or. So you see,  youshould never judge a book by it's cover.
                     <Link href="/projects" underline="none"  target="_blank" >See my work here</Link>


                    </Grid>
                    
                </Grid>
                <Grid container className={classes.stacksSection} spacing={2}>
                  
                    <Grid item xs={12} md={7} sm={7}>
                    <Typography
                            variant="h5"
                            align="left"
                            sx={{
                                paddingBottom: '2%'
                            }}>
                                    What I love to do? 
                     </Typography>
                                In addition to developement and computer I'm a junior photoshop artist that just love what he's doing 
                                I'm not making money or anything I just love the concept of a drawing a world that's free of any rules
                                as long as my I have my imagination i will always have something to draw. 
                                I'm also A photographer, video Maker, and editor. I love images I guess! 
                                <Link underline="none" href="/portfolio" target='_blank'>
                                    You can see my work here !
                                </Link>
                    </Grid>
                    <Grid item xs={12} md={5} sm={5}>
                            
                    </Grid>
                </Grid>
                <Grid container className={classes.stacksSection} spacing={2}>
                <Grid item xs={12} md={5} sm={5}>
                          
                          </Grid>
                  <Grid item xs={12} md={7} sm={7}>
                  <Typography
                          variant="h5"
                          align="left"
                          sx={{
                              paddingBottom: '2%'
                          }}>
                                 Here's someting Extra about me 
                   </Typography>
                        Apart from my study !  I was and still part of some national clubs/organizations
                         <ul className={classes.list}>
                             <li>- I'm the Co-leader of the communication department in the Tunisian red Crecent</li>
                             <li>- I'm the leader of the IT department in TUNSA</li> 
                             <li>- I'm one of the founders of the red crescent istic club  </li>
                             <li>- I'm one of the founders istic photo club</li>

                             </ul>
                         
                             
                  </Grid>
                
              </Grid>
            </Grid>
        </Container>
    )
}

export default About;