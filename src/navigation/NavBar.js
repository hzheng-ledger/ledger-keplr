import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types"; 
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
  withTheme,
  Tooltip,
  Box
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"; 
import NavigationDrawer from "./NavigationDrawer";
import logo from '../assets/logo.png' 
import TopNavBar from "./TopNavBar";  
import {Link} from 'react-scroll'
import Web3 from "web3"; 
import Constants from "../constants";
import twitter from "./../assets/twitter.svg";
import discord from "./../assets/discord.svg";
import medium from "./../assets/medium.svg"; 

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      
    }
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
   
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    color : theme.palette.secondary.light,
    '&:hover': {
      textDecoration: 'underline #fff', 
    }
  }, 
  noDecoration: {
    textDecoration: 'none',
  }, 
  logo :{
    height: "60px"
  },
  socialIcon :{
    minWidth : "40px"
  }, 
});

function NavBar(props) {
  const {
    classes, 
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [ 
    {
      link: "villadevendome",
      name: "VILLA DEVENDOME" 
    },
    
    {
      link: "fair-distribution",
      name: "BUY A PARIS ELK" 
    },
    {
      link: "concept",
      name: "CONCEPT" 
    },
    {
      link: "roadmap",
      name: "ROADMAP" 
    },
    {
      link: "team",
      name: "TEAM" 
    }  
   
  ];
  if(Constants.ENABLE_NFT && !isMobile){ 
    menuItems.push(
      {  
        link: "",
        name: "CONNECT WALLET"
      }
    );
  } 

  const duration = 800;
  const offset  = -60;

  const [web3, setWeb3] = useState(null);
  const [connected, setConnected] = React.useState(false);
  const [address, setAddress] = React.useState("");

 
  // get user account on button click
  const getUserAccount = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        web3.eth.getAccounts().then(accounts => {
          setAddress(accounts[0]);
          setConnected(true);
        });
      } catch (error) {
        console.error(error);
      }
    } else if (window.web3){
      await window.web3.enable();
        web3.eth.getAccounts().then(accounts => {
          setAddress(accounts[0]);
          setConnected(true);
        });
    }
    else {
      alert("Metamask extensions not detected!");
    }
  };

  useEffect(() => {
    var instance = null;
    if (window.ethereum) {
      try {
        instance = new Web3(window.ethereum);
      } catch (error) {
        console.error(error);
      }
    } else if (window.web3) {
      instance = new Web3(window.web3);
    }
    setWeb3(instance);
  }, []);


  return (
    <div className={classes.root}>   
      <AppBar position="fixed" className={classes.appBar}> 
      <Container maxWidth="lg">  
      <Hidden mdUp> 
         <TopNavBar/>
      </Hidden> 
      <Toolbar className={classes.toolbar}> 
          <div>
          <img src= {logo} alt="logo" className={classes.logo} /> 
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map(element => {
                if (element.link && element.link != "") {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      duration = {duration}
                      offset = {offset}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose }
                    >
                      <Button 
                        size="large"
                        classes={{ text: classes.menuButtonText }} 
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                // wallet button
                if ((connected)&&(address.length>0)) {
                  return (
                    <Link style={{textAlign:"right"}}>
                      {`  Wallet: ${address.substr(0,4)}...${address.substr(-4)}  connected`}
                    </Link>
                  );
                }
                else{ 
                    return (
                      <Button
                      color="secondary"
                      size="large"
                      onClick={() => getUserAccount()}
                      classes={{ text: classes.menuButtonText }}
                      key={element.name} 
                    >
                      {element.name}
                    </Button>
                   ); 
                }
              })} 
            </Hidden>
            <Hidden smDown > 
                  <Button href= { Constants.TWITTER_LINK}
                      target="blank" className={classes.socialIcon}> 
                      <Tooltip title="Twitter" aria-label="Twitter">
                        <img src={twitter} width="20px" alt="Twitter" /> 
                      </Tooltip> 
                   
                  </Button>
                  <Button     href= { Constants.DISCORD_LINK}
                      target="blank" className={classes.socialIcon}> 
                        <Tooltip title="Discord" aria-label="Discord">
                        <img src={discord} width="20px" alt="Discord" />
                        </Tooltip>  
                  </Button>  
                  <Button     href= { Constants.MEDIUM_LINK}
                      target="blank" className={classes.socialIcon}> 
                        <Tooltip title="Medium" aria-label="Medium">
                        <img src={medium} width="20px" alt="Medium" />
                        </Tooltip>  
                  </Button> 
            </Hidden>
          </div>  
        </Toolbar>
    </Container>
       
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool  
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
