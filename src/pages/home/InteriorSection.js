import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import exteriorImage from "./../../assets/interior.jpg"
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

const styles = ( theme) => ({ 
  card :{
    borderRadius: "0", 
    boxShadow: "none",
    color : theme.palette.secondary.light ,
    backgroundColor: theme.palette.background.default ,
    paddingTop : "45px",
    paddingBottom : "30px" 
  },
  media: { 
    width:  window.innerWidth,
    [theme.breakpoints.down('sm')]: {
      height:   window.innerWidth * 70/81, 
    },
    [theme.breakpoints.up('md')]: {
      width: "1200px",
      height: "675px", 
      margin: "0 auto",
    } ,
    backgroundPosition: 'center'
  },
});
 
function InteriorSection(props) {
  const { classes, theme, width } = props;
  return (
    <Card className={classes.card}  >
       <CardActionArea> 
       <CardContent>
          <Typography gutterBottom variant="h5"  >
            <span className ="capitalFontTitle">VI</span>LLA <span className ="capitalFontTitle">D</span>EVENDOME <span className ="capitalFontTitle">C</span>LUB
          </Typography> 
        </CardContent>
        <CardMedia
          className={classes.media}
          image= {exteriorImage}
          title="exterior"
        /> 
        </CardActionArea>
    </Card> 
  );
}

InteriorSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
}; 
export default withWidth()( withStyles(styles, { withTheme: true })(InteriorSection));
 