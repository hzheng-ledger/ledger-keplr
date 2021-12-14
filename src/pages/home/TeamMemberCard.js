import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  memberPhotoWrapper: {
    borderRadius: theme.shape.borderRadius, 
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center", 
    padding: "55px" 
  },
  memberPhoto:{
     width : '100%',
     "&:hover" :{
      opacity: "0.5" 
    }
  },
  memberName :{
     marginBottom : "0"
  }
}); 

function TeamMemberCard(props) {
  const { classes, Image,  headline, text } = props;
  return (
    <Fragment>
      <div 
        className={classes.memberPhotoWrapper} 
      >
       <img src = {Image} className = {classes.memberPhoto}>
       </img>
      </div>
      <Typography variant="h6" paragraph align="center" className = {classes.memberName}>
        {headline}
      </Typography>
      <Typography variant="body1" align="center"> 
        {text}
      </Typography>
    </Fragment>
  );
}

TeamMemberCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Image: PropTypes.string.isRequired, 
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(TeamMemberCard);
