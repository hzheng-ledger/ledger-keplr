import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Typography,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
  CardActionArea,
  CardContent,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import privacyPolicyImage1 from "./../../assets/privacy_policy_image1.png";
import privacyPolicyImage2 from "./../../assets/privacy_policy_image2.png";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  bold :{
    fontWeight : "bold"
  },
  contentImage :{
    width : "100%"
  }
  
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
function PrivacyPolicy(props) {
  const {
    open,
    onClose
  } = props;
  useEffect(() => {

  }, [open, onClose]);

  const { classes, theme, width } = props;
  return (
    <div id="termsCondition" className={classes.root}>
      <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
           Privacy Policy
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom variant="h5" component="h2">
            COOKIES VILLADEVENDOME.com
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
          Our privacy policy will be updated soon. 
          By clicking on “Accept all cookies”, you agree to the use of Cookies essential for the operation of the site, for personalization, statistics, including third-party cookies
          </Typography>
          <Typography variant="body2" component="p" gutterBottom> 
           Cookie Settings      |     Accept all cookies
          </Typography>
          <Typography variant="body2" component="p" gutterBottom> 
          <span className = {classes.bold}> Example:   </span> 
          </Typography> 
          <img className = {classes.contentImage}  src = {privacyPolicyImage1} /> 
          <Typography variant="body2" component="p" gutterBottom>
            Please review carefully these Terms &amp; Conditions, by accessing and using
            this website, you are deemed to have read, accepted and agreed to these
            NFT terms.   </Typography>
          <Box m="2rem">
          </Box> 
          <Typography gutterBottom variant="h5" component="h2">
             Privacy preference center 
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
          When you visit a website, data may be stored in or retrieved from your browser, usually in the form of cookies. A cookie is a small data file (text file) that a website, when viewed by a user, asks your browser to store on your device in order to remember information about you, such as your language preferences or login information. These cookies are kept for a maximum of 13 months. You have the option of not allowing certain types of cookies. Click on the different categories to get more details on each of them and change the default settings. However, if you block certain types of cookies,
          These cookies are necessary for the website to function and cannot be disabled in our systems. They are usually set as a response to actions you have taken that constitute a request for services, such as setting your privacy preferences, logging in with metamask. You can configure your browser to block or be notified of the existence of these cookies, but parts of the website may be affected.

          </Typography>
          <Typography variant="body2" component="p" gutterBottom> 
          <span className = {classes.bold}>Strictly necessary cookies</span>  
          </Typography> 
          <Typography variant="body2" component="p" gutterBottom>
            These cookies are necessary for the website to function and cannot be disabled in our systems. They are usually set as a response to actions you have taken that constitute a request for services, such as setting your privacy preferences, logging in with metamask. You can configure your browser to block or be notified of the existence of these cookies, but parts of the website may be affected.
          </Typography> 
          <Typography variant="body2" component="p" gutterBottom> 
             <span className = {classes.bold}>Statistics cookies</span>   
          </Typography> 
          <Typography variant="body2" component="p" gutterBottom>
          These cookies allow us to determine the number of visits and the sources of traffic, in order to measure and improve the performance of our website. They also help us identify the most / least visited pages and assess how visitors navigate the website. All the information collected by these cookies is aggregated and therefore anonymized.
          </Typography> 
          <Typography variant="body2" component="p" gutterBottom> 
           <span className = {classes.bold}> Example:   </span>    
          </Typography> 
          <img className = {classes.contentImage}  src = {privacyPolicyImage2} /> 
        </DialogContent>
      </Dialog>
    </div>
  );
}

PrivacyPolicy.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default withWidth()(withStyles(styles, { withTheme: true })(PrivacyPolicy));
