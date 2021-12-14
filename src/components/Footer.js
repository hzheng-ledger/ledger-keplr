import React , { useEffect }  from "react";
import PropTypes from "prop-types";
import Constants from "../constants"; 
import {
  Grid,
  Typography,
  Box,
  IconButton,
  SvgIcon,
  Hidden,
  withStyles,
  withWidth,
  isWidthUp,
  TextField,
  AppBar,
  Container,
  Tooltip,
  Link,
   
} from "@material-ui/core"; 
import transitions from "@material-ui/core/styles/transitions";  
import logo from './../assets/logo.png'
import twitter from "./../assets/twitter.svg";
import discord from "./../assets/discord.svg";
import medium from "./../assets/medium.svg";
import TermsConditions from "../pages/home/TermsConditions";
import { useHistory, useLocation } from 'react-router-dom'
import PrivacyPolicy from "../pages/home/PrivacyPolicy";

const styles = theme => ({ 

  footer :{
    paddingTop : "30px",
    paddingBottom: "30px"
  },
  infoIcon: {
    color: `${theme.palette.common.white} !important`,
    backgroundColor: "#33383b !important"
  },
  socialIcon: {
    fill: theme.palette.common.white,  
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    } ,
    paddingRight : '5px',
    paddingLeft : '5px',
  },
  link: {
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn
    }),
    "&:hover": {
      color: theme.palette.primary.light
    }
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white
  },
  
  copyRights:{
    color: theme.palette.common.white,
    fontSize : "14px !important",
    textAlign : "center"
  },
  footerInfo :{
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center', 
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft :'100px'
    }, 
  },
  termsCondition : {
    color: theme.palette.common.white,
    textDecoration : "underline"
  },
  footerLogo :{
    width: "80px !important"
  },
  footerLogoBlock :{
    textAlign : "center"
  }
 });
 
function Footer(props) {
  const { classes, theme, width } = props;
  const [openTermsCondition, setOpenTermsConditionDialog] = React.useState(false); 
  const [openPrivacyPolicy, setOpenPrivacyPolicy] = React.useState(false);
  const location = useLocation()
  const history = useHistory()
  useEffect( () => { 
    let isOpen = (new URLSearchParams(window.location.search)).get("openPrivacyPolicy") 
    if(isOpen)
    setOpenPrivacyPolicy(true);  
  }, []);  

  const openTermsConditionDialog = ()=>{
    setOpenTermsConditionDialog(true); 
  }
  const closeTermsConditionDialog = ()=>{
    setOpenTermsConditionDialog(false);   
  } 
  const closePrivacyPolicy = ()=>{
    setOpenPrivacyPolicy(false);  
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.has('openPrivacyPolicy')) { 
      queryParams.delete('openPrivacyPolicy');  
      history.replace({
        search: queryParams.toString(),
      })
    } 
  }  
  return ( 
    <div className={classes.footer}>
    <Container maxWidth="lg">
      {/* <Divider variant="middle" className="footer-divider" /> */}
      <Grid container direction="row" alignItems="center"    justifyContent="center" > 
        <Hidden smDown> 
          <Grid item xs={12} md={4} > 
        </Grid>
        </Hidden>
        <Grid item xs={5}  sm={4} md={4}   className= {classes.footerLogoBlock} 
            >
          <img src={logo} width="80px"  alt="" className= {classes.footerLogo}   />
        </Grid>
        <Grid item xs={12} md={4} className={classes.footerInfo} >
          <Grid
            container
            className={classes.social} 
            justifyContent="center"
            alignItems="center"
          > 
            <Grid item   className={classes.socialIcon}  >
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
            <Grid item  className={classes.socialIcon}>
              <a
                href={ Constants.DISCORD_LINK}
                target="blank"
                style={{ textAlign: "left" }}
              >
                 <Tooltip title="Discord" aria-label="Discord">
                        <img src={discord} width="20px" alt="Discord" />
                 </Tooltip>
              </a>
            </Grid> 
            <Grid item  className={classes.socialIcon}>
              <a
                href={ Constants.MEDIUM_LINK}
                target="blank"
                style={{ textAlign: "left" }}
              >
                 <Tooltip title="Medium" aria-label="Medium">
                        <img src={medium} width="20px" alt="Medium" />
                 </Tooltip>
              </a>
            </Grid> 
          </Grid>
          <Grid
            container   
            direction="row" 
            justifyContent="flex-end"
            alignItems="center"
          > 
            <Grid item xs={12}   >
            <Box component="div"  >
               <Typography   variant="body2"  component="p" className={classes.copyRights}  >
                  © 2021 Villa Devendome
               </Typography>
            </Box> 
            <Box component="div"   >  
                  <Link href="#" onClick = {openTermsConditionDialog}  className={classes.termsCondition}>
                     Terms & Conditions
                 </Link>
            </Box> 
            </Grid> 
          </Grid>
        </Grid>
      </Grid>
      <TermsConditions open = {openTermsCondition} onClose =  {closeTermsConditionDialog} />  
      <PrivacyPolicy open = {openPrivacyPolicy} onClose =  {closePrivacyPolicy} />    
    </Container>
  </div>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));
