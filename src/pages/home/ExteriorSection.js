import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import exteriorImage from "./../../assets/exterior.jpg"
import demoImage01 from "./../../assets/demoImage01.jpg"
import demoImage02 from "./../../assets/demoImage02.jpg"
import demoImage03 from "./../../assets/demoImage03.jpg"
import demoImage04 from "./../../assets/demoImage04.jpg"

import {
  Grid,
  Typography,
  Card,
  CardMedia,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
  CardActionArea,
  CardContent
} from "@material-ui/core"; 
import logo from '../../assets/logo_banner.png'   
import Carousel from 'react-material-ui-carousel'

const items = [
  {  
      Image: demoImage01
  },
  { 
      Image: demoImage02
  },
  { 
      Image: demoImage03
  },
  { 
      Image: demoImage04
  }
]

const styles = ( theme) => ({ 
  bannerCard:{
    borderRadius: "0", 
    boxShadow: "none",
    color : theme.palette.secondary.light ,
    backgroundColor: theme.palette.background.default , 
    marginTop : "40px"
  },
  card :{
    borderRadius: "0", 
    boxShadow: "none",
    color : theme.palette.secondary.light ,
    backgroundColor: theme.palette.background.default , 
    paddingBottom: "20px",
    "& .MuiTypography-body2":{
      paddingBottom: "20px"
    },
    "&:hover" : {
      backgroundColor: theme.palette.background.default , 
    }
  },
  banner:{

  },
  media: { 
   
    [theme.breakpoints.down('sm')]: {
      height:   window.innerWidth * 70/81, 
    },
    [theme.breakpoints.up('md')]: { 
      width: "1200px",
      height: "675px", 
      margin: "0 auto",
      marginTop: "12px"
    } , 
    backgroundPosition: 'center'
  },
  bannderContent:{
    position: "absolute" ,
    width : "100%",
    top : "3%",
    textAlign : "center",
    left: "0",
    right:"0" 
  },
  bannderLogoBlock:{
   
  },
  bannderLogo:{
    width: "170px", 
    margin: "0 auto"  
  },
  logoSubTitleBlock :{

  },
  logoSubTitle:{ 
     fontFamily : "AvenirLTStd-Black !important"
  },
  bannderSubTitleBlock:{
    marginTop: "10px",
    [theme.breakpoints.up('lg')]: {
      marginTop: "50px",
    }
  },
  bannderSubTitle:{
    fontFamily : "AvenirLTStd-Black !important", 
    fontSize: '40px  ',  
    [theme.breakpoints.up('lg')]: {
      marginTop: "60px", 
      fontSize: '60px',
    }
  },
  carousel : { 
    width: "300px",
    margin: "0 auto"   
  },
  carouselImageBlock:{
    width : "300px",
    height : "300px" 
  },
  carouselImage:{
    width : "300px",
    height : "300px"  
  }
}) ;

const CarouselOptions = {
  autoPlay: false,
  animation: "fade",
  indicators: true,
  timeout: 200,
  navButtonsAlwaysVisible: false,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true
}

function ExteriorSection(props) {
  const { classes, theme, width } = props;
 
  return (
    <Fragment key="ExteriorSection" > 
    <Card className={classes.bannerCard}  >
       <CardActionArea> 
       <CardContent  className={classes.banner} >
         <CardMedia
            className={classes.media}
            image= {exteriorImage}
            title="exterior"
          /> 
          <Box  className={classes.bannderContent}>  
              <Box  className = {classes.bannderLogoBlock} >
                 <img src = {logo} className = {classes.bannderLogo}/>  
              </Box>  
              <Box className={classes.bannderSubTitleBlock} >
                  <Typography gutterBottom   className={classes.bannderSubTitle} >
                     <span className ="capitalFontBanner1">P</span>ARIS <span className ="capitalFontBanner">É</span>LK
                  </Typography>
              </Box> 
          </Box> 
       </CardContent>  
       </CardActionArea>
    </Card> 
    <Card className={classes.card}  >
       <CardActionArea>  
       <CardContent  id="villadevendome">
         <Box pt="35px"> 
           <Typography gutterBottom variant="h5"  >
            <span className ="capitalFontTitle">VI</span>LLA <span className ="capitalFontTitle">D</span>EVENDOME
          </Typography>
         </Box> 
          <Typography variant="body2"  component="p" gutterBottom>
          The pandemic has accelerated the transformation of how people work and live, therefore, mask has turned to the most essential in our daily lives. As the shift of a new lifestyle, face expressions are hidden underneath masks, which build distance in the social interactions. With the advancement of technology, remote working has become a new trend. 
          </Typography>
          <Typography variant="body2"  component="p" gutterBottom>
          Paris ELK and friends go to Villa Devendome in a mystery town which is located in the Southern Alps to enjoy a fascinating and cool life while working remotely. Paris ELK and friends are enjoying in a villa which included a well maintained front garden with vegetable and fruit gardens, a swimming pool, spa, movie theater and an indoor sports facility. 
          </Typography>
           <Typography variant="body2"  component="p" >
           Apparently, Paris ELK is not alone. Paris ELK and friends  work together remotely during the day and meet after work to chat and drink wine, appreciate the art and music, and their common hobby is paragliding or organizing fencing competitions. They turned the small forest into a club that became quite famous among the dignified people. Many celebrities have come to the club to discover…
         </Typography>
        </CardContent> 
        </CardActionArea>
    </Card> 
    <Card className={classes.card} >
       <CardActionArea>   
        <CardContent   >
          <Typography gutterBottom variant="h5" > 
            <span className ="capitalFontTitle">O</span>UR <span className ="capitalFontTitle">M</span>ISSION
          </Typography>
          <Typography variant="body2"  component="p">
          Our mission is to build a free, equal, sustainable eco system with inclusion and diversity at its core.          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>  
  <Card className={classes.card} id="fair-distribution">
       <CardActionArea>  
        <CardContent> 
          <Grid container spacing={2}  direction="row">  
             <Grid item xs={12} sm={8}  md={8} lg={8} container  key="ExteriorSectionGrid1" >  
                 <Typography gutterBottom variant="h5"  >  
                 <span className ="capitalFontTitle">F</span>AIR  <span className ="capitalFontTitle">D</span>ISTRIBUTION 
                  </Typography>
                  <Typography variant="body2"  component="p">
                     Each Paris ELK costs 0.09ETH, No bonding curves. 
                     No withhold from the sale, all the giveaways, rewards for creators or club members will be minted in order to create a club with equality, and minimize the impact of creators’ preference. 
                  </Typography>  
            </Grid> 
            <Grid item xs={12} sm={4}  md={4} lg={4}   key="ExteriorSectionGrid2"> 
                    <Carousel
                        className={classes.carousel}
                        autoPlay={CarouselOptions.autoPlay}
                        animation= "slide"
                        indicators={CarouselOptions.indicators}
                        timeout={CarouselOptions.timeout}
                        cycleNavigation={CarouselOptions.cycleNavigation}
                        navButtonsAlwaysVisible={CarouselOptions.navButtonsAlwaysVisible}
                        navButtonsAlwaysInvisible={CarouselOptions.navButtonsAlwaysInvisible}
                        next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                        prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                        onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                        // fullHeightHover={false}
                        // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                        // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                        // indicatorContainerProps={{style: {margin: "20px"}}}
                        // NextIcon='next'
                    >
                        {
                            items.map((item, index) => {
                                return   <Card  className={classes.carouselImageBlock} key= {index}>
                                <CardActionArea>
                                  <CardMedia
                                    className={classes.carouselImage}
                                    image={item.Image}  
                                  />  
                                </CardActionArea> 
                              </Card>  
                            })
                        }
                    </Carousel>
                </Grid> 
        </Grid> 
        </CardContent> 
        </CardActionArea>
    </Card>  
    </Fragment> 
  );
}

ExteriorSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
}; 
export default withWidth()( withStyles(styles, { withTheme: true })(ExteriorSection));
 