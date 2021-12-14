import React, { memo } from "react"; 
import Constants from "../constants"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles,
  Container,
  Grid,
  withTheme
} from "@material-ui/core";  
import twitter from "./../assets/twitter.svg";
import discord from "./../assets/discord.svg";  
import medium from "./../assets/medium.svg"; 
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({ 
  root:{
    height:'30px',
    minHeight: '30px!important'
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    height:'30px',
    minHeight: '30px!important',
    paddingTop : '5px'
  } ,
  socialIcon: {
    fill: theme.palette.common.white,  
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    } ,
    paddingRight : '5px',
    paddingLeft : '5px',
    paddingTop: '5px'
  },
});

function TopNavBar(props) {
  const {
    classes 
  } = props;
 
  return (
    <div className={classes.root}> 
      <Toolbar className={classes.toolbar}>   
        <Grid item xs={12} md={3}  >
                <Grid
                  container
                  className={classes.social}
                  direction="row" 
                  justifyContent="flex-end"
                  alignItems="center"
                > 
                  <Grid item   className={classes.socialIcon}>
                    <a
                      href= { Constants.TWITTER_LINK}
                      target="blank" 
                      style={{ textAlign: "left" }}
                    >
                      <Tooltip title="Twitter" aria-label="Twitter">
                        <img src={twitter} width="20px" alt="Twitter" /> 
                      </Tooltip> 
                    </a>
                  </Grid>
                  <Grid item   className={classes.socialIcon}>
                    <a
                      href= { Constants.DISCORD_LINK}
                      target="blank"
                      style={{ textAlign: "left" }}
                    >
                        <Tooltip title="Discord" aria-label="Discord">
                        <img src={discord} width="20px" alt="Discord" />
                        </Tooltip>
                     
                    </a>
                  </Grid> 
                  <Grid item   className={classes.socialIcon}>
                    <a
                      href= { Constants.MEDIUM_LINK}
                      target="blank"
                      style={{ textAlign: "left" }}
                    >
                        <Tooltip title="Medium" aria-label="Medium">
                        <img src={medium} width="20px" alt="Medium" />
                        </Tooltip>
                     
                    </a>
                  </Grid> 
                </Grid>
                </Grid>
      </Toolbar> 
  </div>
  );
} 

export default withStyles(styles, { withTheme: true })(memo(TopNavBar));
