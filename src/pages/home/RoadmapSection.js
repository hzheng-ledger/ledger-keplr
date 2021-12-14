import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import exteriorImage from "./../../assets/Gif_Villa Devendome.gif"
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

const styles = ( theme) => ({
  root: {
    flexGrow: 1,
    color : theme.palette.secondary.light  ,
    paddingTop : "37px"
  },  
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',  
    borderRadius: "0", 
    boxShadow: "none" ,
    color : theme.palette.secondary.light ,
    backgroundColor: theme.palette.background.default 
  },
  percentage:{
    //color : theme.palette.secondary.light  ,
    color : "#FDC1BB"  ,
  },
  decription:{

  },
  image :{
    width: '100%',
    height: 'auto'
  },
  imageBlock :{
    padding : "45px"
  }
  });
 
function TeamSection(props) {
  const { classes, theme, width } = props;
  return (
    <div id= "roadmap" className={classes.root}>
    <CardContent>
      <Typography  variant="h5" component="h2"> 
       <span className ="capitalFontTitle">R</span>OAD <span className ="capitalFontTitle">M</span>AP <span className ="capitalFontTitle">A</span>CTIVATION 
      </Typography> 
    </CardContent> 
    <Paper className={classes.paper}>  
        <Grid container spacing={2} justifyContent="center" alignItems="center" direction="row">  
          <Grid item xs={12} sm={8}  md={8} lg={8} container  >
           
            <Grid item  container direction="row"  >
              <Grid item xs={12} sm={2}  md={1} lg={1}>
                <Typography   color="primary"  variant="body2" className={classes.percentage}>
                  20% 
                </Typography> 
              </Grid> 
              <Grid item xs={12} sm={10}  md={11} lg={11}>
                <Typography  variant="body2" className={classes.decription}>
                Get wines for our creators and team. 
               </Typography> 
              </Grid> 
            </Grid> 
            <Grid item  container direction="row"   >
              <Grid item xs={12} sm={2}  md={1} lg={1}>
                <Typography   color="primary"  variant="body2" className={classes.percentage}>
                  30% 
                </Typography> 
              </Grid> 
              <Grid item xs={12} sm={10}  md={11} lg={11}>
                <Typography  variant="body2" className={classes.decription}>
                Discord Villa Devendome Club unlocked and open to all Paris ELK holders.
                 </Typography> 
              </Grid> 
            </Grid>  
            <Grid item  container direction="row"   >
              <Grid item xs={12} sm={2}  md={1} lg={1}>
                <Typography   color="primary"  variant="body2" className={classes.percentage}>
                  50% 
                </Typography> 
              </Grid> 
              <Grid item xs={12} sm={10}  md={11} lg={11}>
                <Typography  variant="body2" className={classes.decription}>
                Copyright fund is initiated
               </Typography> 
              </Grid> 
            </Grid>
            <Grid item  container direction="row"    >
              <Grid item xs={12} sm={2}  md={1} lg={1}>
                <Typography   color="primary"  variant="body2" className={classes.percentage}>
                  60% 
                </Typography> 
              </Grid> 
              <Grid item xs={12} sm={10}  md={11} lg={11}>
                <Typography  variant="body2" className={classes.decription}>
                La Barbe Bleue Smithy gets unlocked.
               </Typography> 
              </Grid> 
            </Grid> 
            <Grid item  container direction="row"   >
              <Grid item xs={12} sm={2}  md={1} lg={1}>
                <Typography   color="primary"  variant="body2" className={classes.percentage}>
                  80% 
                </Typography> 
              </Grid> 
              <Grid item xs={12} sm={10}  md={11} lg={11}>
                <Typography  variant="body2" className={classes.decription}>
                Initiate the Villa Devendome liquidity pool.
                 </Typography> 
              </Grid> 
            </Grid>
            <Grid item  container direction="row"   >
              <Grid item xs={12} sm={2}  md={1} lg={1}>
                <Typography   color="primary"  variant="body2" className={classes.percentage}>
                  90% 
                </Typography> 
              </Grid> 
              <Grid item xs={12} sm={10}  md={11} lg={11}>
                <Typography  variant="body2" className={classes.decription}>
                Store gets unlocked and derivative products will be available. </Typography> 
              </Grid> 
            </Grid>
            <Grid item  container direction="row"   >
              <Grid item xs={12} sm={2}  md={1} lg={1}>
                <Typography   color="primary"  variant="body2" className={classes.percentage}>
                  100% 
                </Typography> 
              </Grid> 
              <Grid item xs={12} sm={10}  md={11} lg={11}>
                <Typography  variant="body2" className={classes.decription}>
                NFT exhibition in London/Paris /New York and all Villa Devendome Paris ELK holders get free entrance !
               
                </Typography> 
              </Grid> 
            </Grid>
            <Grid item  container direction="row"   > 
              <Grid item xs={12} sm={12}  md={12} lg={12}>
                <Typography  variant="body2" className={classes.decription}>
                New roadmap is on the way…
                </Typography> 
              </Grid> 
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}  md={4} lg={4}  container>
               <Grid item   className = {classes.imageBlock}   >
                   <img src = {exteriorImage} className = {classes.image}></img>
              </Grid> 
           </Grid> 
        </Grid>
      </Paper>
      </div>
  );
}

TeamSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
}; 
export default withWidth()( withStyles(styles, { withTheme: true })(TeamSection));
 