import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import memberPhoto1 from "./../../assets/team01.jpg"
import memberPhoto2 from "./../../assets/team02.jpg" 
import memberPhoto3 from "./../../assets/team03.jpg" 
import memberPhoto4 from "./../../assets/team04.jpg" 
import memberPhoto5 from "./../../assets/team05.jpg" 
import memberPhoto6 from "./../../assets/team06.jpg"

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
  CardContent,
  Paper,
  Divider,
  List,
  ListItem

} from "@material-ui/core"; 
import TeamMemberCard from "./TeamMemberCard";
 

const styles = ( theme) => ({
  root: {
    flexGrow: 1,
    color : theme.palette.secondary.light   
  }, 
  paper: {
    padding: theme.spacing(5),
    margin: 'auto',  
    borderRadius: "0", 
    boxShadow: "none" ,
    color : theme.palette.secondary.light ,
    backgroundColor: theme.palette.background.default 
  },
  percentage:{
    
  },
  decription:{

  },
  memberBlock:{
   
  },
  image :{
    width: '100%',
    height: 'auto'
  }
  
  });
  const features = [
    { 
      headline: "JEREMIE",
      text:
        "NFT EARLY ADOPTER",
      image: memberPhoto1
    
    } ,
    { 
      headline: "SOPHIE",
      text:
        "ARTIST, ANIMATOR – ACOGITO ERGO SUM",
      image: memberPhoto2
    } ,
    { 
      headline: "CLEMENT",
      text:
        "GEEK, NFT MAVEN",
      image: memberPhoto3
    } ,
    { 
      headline: "ARNAUD",
      text:
        "AI SCIENTIST, BLOCKCHAIN DEVELOPER",
      image: memberPhoto4
    } ,
    { 
      headline: "SARAH",
      text:
        "HAUT COUTURIER",
      image: memberPhoto5
    } ,
    { 
      headline: "CHARLOTTE",
      text:
        "GEMOLOGIST, LUXURY EXPERT",
      image: memberPhoto6
    }
  ];
function RoadmapSection(props) {
  const { classes, theme, width } = props;
  return (
    <div id="team" className={(classes.root)}  >
    <CardContent>
      <Typography  variant="h5" component="h2"> 
      <span className ="capitalFontTitle">T</span>HE <span className ="capitalFontTitle">T</span>EAM  
      </Typography> 
    </CardContent> 
    <div className="container-fluid">
          <Grid container   > 
            {features.map(element => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}  
                key={element.headline}
                className = {classes.memberBlock}
              >
                <TeamMemberCard
                  Image={element.image} 
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
       </div>
    </div>
  );
}

RoadmapSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
}; 
export default withWidth()( withStyles(styles, { withTheme: true })(RoadmapSection));
 