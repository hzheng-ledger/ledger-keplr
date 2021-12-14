import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
import concept_img01 from "./../../assets/concept_img01.jpg"
import concept_img02 from "./../../assets/concept_img02.jpg"
import concept_img03 from "./../../assets/concept_img03.jpg"
import concept_img04 from "./../../assets/concept_img04.jpg"
import concept_img05 from "./../../assets/concept_img05.jpg"
import concept_img06 from "./../../assets/concept_img06.jpg"
const styles = (theme) => ({
  card: {
    borderRadius: "0",
    boxShadow: "none",
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.background.default,
    paddingTop : "15px",
    paddingBottom : "15px",
  },
  media: {
    width: window.innerWidth,
    [theme.breakpoints.down('sm')]: {
      height: window.innerWidth * 70 / 81,
    },
    [theme.breakpoints.up('md')]: {
      height: window.innerWidth * 54 / 81,
    },
    backgroundPosition: 'center'
  },
  conceptPhotoBlock: {
    color: "white",
    maxHeight : "400px !important",
    "&:hover" :{
      opacity: "0.5" 
    }
    
  },
  conceptPhoto: {
    width: "100%",
    "&:hover" :{
      opacity: "0.5" 
    }
  },
  conceptPhotoDescription: {
    [theme.breakpoints.up('md')]: {
      padding: "20px",
      marginTop: "20px",
      width: "90%",
      "& .MuiTypography-h6" :{
        fontSize:"1.6rem !important",
        textTransform: "uppercase" 
      } ,
      textAlign: "center",
    }, 
    [theme.breakpoints.down('md')]: { 
      textAlign: "center",
      padding: "50px",
      "& .MuiTypography-h6" :{
        fontSize:"1.6rem",
        textTransform: "uppercase" 
      },
      "& .MuiTypography-body2" :{
        fontSize:"1.2rem"
      } 
    }, 
    margin: "0 auto",
    
  },
  title :{
    fontStyle: "italic"  
  }
});

function ConceptSection(props) {
  const { classes, theme, width } = props;
  return (
    <div id="concept" className={classes.root}>
      <Card className={classes.card}  >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2"> 
             <span className ="capitalFontTitle"> C</span>ONCEPT 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className="container-fluid">

        <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>  
          <Grid container    >
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img01} className={classes.conceptPhoto} />
            </Grid> 
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img02} className={classes.conceptPhoto} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
              container 
            >
              <Box className={classes.conceptPhotoDescription} >
                <Typography variant="h6" component="p">
                 <span className =""> F</span>rontalism & <span className ="">M</span>ystery 
                </Typography>
                <Typography variant="body2" component="p">
                  Fowling in the marshes: fragment of wall painting from the tomb of Nebamun, from Thebes, Egypt, 1350 BC, British Museum, London
                </Typography>
              </Box>
            </Grid>
           
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img03} className={classes.conceptPhoto} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img04} className={classes.conceptPhoto} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock} 
            >
              <Box className={classes.conceptPhotoDescription}>
                <Typography variant="h6" component="p">
                <span className =""> P</span>eace & <span className =""> F</span>reedom 
                </Typography>
                <Typography variant="body2" component="p">
                 <span className={classes.title}>Man in Bowler Hat</span>, Rene Magritte,1964, Oil on canvas, Private collection.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img05} className={classes.conceptPhoto} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img06} className={classes.conceptPhoto} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <Box className={classes.conceptPhotoDescription}>
                <Typography variant="h6" component="p">
                <span className =""> V</span>ision & <span className =""> R</span>esilience 
                </Typography>
                <Typography variant="body2" component="p">
                <span className={classes.title}>Wanderer above the Sea of Fog</span>, Caspar David Friedrich, 1818, Oil on canvas, Kunsthalle Hamburg, Hamburg
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box display={{ xs: 'none', sm: 'none', md: 'block' }} >  
          <Grid container  alignItems="center"
     justifyContent="center">
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img01} className={classes.conceptPhoto} />
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
             
            >
              <Box className={classes.conceptPhotoDescription}>
                <Typography variant="h6" component="p">
                <span className =""> F</span>rontalism & <span className =""> M</span>ystery 
                </Typography>
                <Typography variant="body2" component="p">
                  Fowling in the marshes: fragment of wall painting from the tomb of Nebamun, from Thebes, Egypt, 1350 BC, British Museum, London
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img02} className={classes.conceptPhoto} />
            </Grid>

            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <Box className={classes.conceptPhotoDescription}>
                <Typography variant="h6" component="p"> 
                  <span className =""> P</span>eace & <span className =""> F</span>reedom 
                </Typography>
                <Typography variant="body2" component="p">
                <span className={classes.title}>Man in Bowler Hat</span>, Rene Magritte,1964, Oil on canvas, Private collection.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img03} className={classes.conceptPhoto} />
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img04} className={classes.conceptPhoto} />
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img05} className={classes.conceptPhoto} />
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <img src={concept_img06} className={classes.conceptPhoto} />
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              className={classes.conceptPhotoBlock}
            >
              <Box className={classes.conceptPhotoDescription}>
                <Typography variant="h6" component="p"> 
                <span className =""> V</span>ision & <span className =""> R</span>esilience 
                </Typography>
                <Typography variant="body2" component="p">
                <span className={classes.title}>Wanderer above the Sea of Fog</span>, Caspar David Friedrich, 1818, Oil on canvas, Kunsthalle Hamburg, Hamburg
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

ConceptSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};
export default withWidth()(withStyles(styles, { withTheme: true })(ConceptSection));
