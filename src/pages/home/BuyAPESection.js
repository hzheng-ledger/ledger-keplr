import React, { Fragment, memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Web3 from "web3";
import exteriorImage from "./../../assets/Gif_Villa Devendome.gif"
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BigNumber from "bignumber.js";
import {
  Grid,
  Typography, 
  Button, 
  Box,
  withStyles,
  withWidth, 
  Paper,
  Dialog,
  DialogActions,
  DialogContent, 
  DialogTitle,
  TextField, 
  CircularProgress,
  Snackbar, 
  FormControlLabel,
  Checkbox 
 
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import MuiAlert from '@material-ui/lab/Alert';
import Constants from "../../constants";
import TermsConditions from "./TermsConditions";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10px",
    "& .MuiInputBase-input":{
      fontSize : "20px !important",
      color :  "#613D59 !important"
    }
  },
  paper: {
    padding: "15px 40px",
    margin: 'auto',
    borderRadius: "0",
    boxShadow: "none",
    color: theme.palette.secondary.light,
    backgroundColor: "#FDC1BB"
  },
  buyAPEtxt: {
    textAlign: "center",
    fontFamily: "AvenirLTStd-Black !important",
    fontSize: '40px',

    [theme.breakpoints.up('lg')]: {
      marginTop: "20px",
      fontSize: '60px',
    }
  }

  , button: {
    fontSize: "1.6rem",

  },
  buyAPEtxtDescription: {
    textAlign: "center"
  },
  dialogTitle: {
    backgroundColor: theme.palette.background.default,
    color: "#fff",
    textAlign: "center",
    fontFamily: 'AvenirLTStd-Black' 
  },
  purchaseDialog: {
    "& .MuiDialog-paper": {
      [theme.breakpoints.up('lg')]: {
        width: "600px"
      },
      [theme.breakpoints.down('sm')]: {
        width: "600px"
      }
    }
  },
  image: {
    width: '100%',
    height: 'auto',
    marginTop: "20px"
  },
  imageBlock: {
    padding: "45px"
  },
  termsCondition :{
    fontSize : "12px !important",
    color :  "#000 !important",
    marginTop: "7px",
    lineBreak: "anywhere",

  },
  totalPrice:{
    marginTop : "8px"
  },
  totalPriceValue :{
    color :  "#613D59 !important",
  }

});
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function BuyAPESection(props) {
  const { classes, theme, width } = props;
  const [web3, setWeb3] = useState(null);
  const [connected, setConnected] = React.useState(false);
  const [address, setAddress] = React.useState("");

  const [openDialog, setOpenDialog] = React.useState(false);
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [totalPrice, setTotalPrice] = React.useState(Constants.UNIT_PRICE.toString());
  const [isChecked, setIsChecked] = React.useState(false);
 

  const [snackerMsg, setSnackerMsg] = React.useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [openTermsDialog, setOpenTermsDialog] = React.useState(false);   

  useEffect(async () => {
    if (Constants.ENABLE_NFT && !isMobile) {
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
      if (instance) {
        if (window.ethereum) {
          try {
            await window.ethereum.enable();
            instance.eth.getAccounts().then(accounts => {
              setAddress(accounts[0]);
              setConnected(true);
            });
          } catch (error) {
            console.error(error);
          }
        } else if (window.web3) {
          await window.web3.enable();
          instance.eth.getAccounts().then(accounts => {
            setAddress(accounts[0]);
            setConnected(true);
          });
        }
      }
    }
  
  }, []); 

  const NFT_ABI = [
    {
      "inputs": [
        {
        "internalType": "address",
        "name": "_to",
        "type": "address"
        },
        {
        "internalType": "uint256",
        "name": "_nb",
        "type": "uint256"
        }
      ],
      "name": "mintVdv",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ];


  const openPurchaseDialog = () => {
    if (Constants.ENABLE_NFT  && !isMobile) {
      if (web3 && address.length>0){
        setOpenDialog(true);
        setShowSpinner(false);
      }
      else{
          onOpenSnackbar();
          setSnackerMsg("Please connect to your wallet");
      }
    }
  };
  const handlePurchaseDialogClose = () => {
    setOpenDialog(false);
    resetForm();
  }
  const onPurchaseCancel = () => {
    setOpenDialog(false);
    onShowSpinner();
  }
  const onPurchaseConfirm = () => {
    //setOpenDialog(false);

  }
  const handleTextFieldChange = (e) => {
     const t = e;
     if (e.target.value == "") {
      setQuantity(e.target.value);
       const total = Number(0 * Constants.UNIT_PRICE).toFixed(2).toString();
      setTotalPrice(total)
     } 
     if ((e.target.value >= 0) && (e.target.value <= 20)){
      setQuantity(e.target.value);
      const total = Number(e.target.value * Constants.UNIT_PRICE).toFixed(2).toString();
      setTotalPrice(total);
     } 
  }
  const onShowSpinner = () => {
    setShowSpinner(true);
    //simulate purchase success
    setTimeout(() => {
      setShowSpinner(false);
      setOpenDialog(false);
      onPurchaseSuccess();
    }, 6000);

  }
  const handleSpinnerClose = () => {
    setShowSpinner(false);
  }
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  }
  const onOpenSnackbar = () => {
    setOpenSnackbar(true);
  }
  const onSubmit = async () => {
    //console.log(quantity);
    //console.log(address);
    //console.log(connected);
   if(isChecked){
      if(totalPrice !== "0.00"){
        setShowSpinner(true);
        //const network = "rinkeby";
        const NFT_CONTRACT_ADDRESS = Constants.NFT_CONTRACT_ADDRESS;
        //const NFT_CONTRACT_ADDRESS = "0x5b4430070Fa9618F8948886CaB2364A91dAFA9DE";
        //const network = "mainnet";
        /*
        const provider = new HDWalletProvider(
          MNEMONIC,
          isInfura
            ? "https://" + network + ".infura.io/v3/" + NODE_API_KEY
            : "https://eth-" + network + ".alchemyapi.io/v2/" + NODE_API_KEY
        );
        const web3Instance = new web3(provider);*/
        const web3Instance = web3;
        const nftContract = new web3Instance.eth.Contract(
          NFT_ABI,
          NFT_CONTRACT_ADDRESS,
          {
            gasLimit: "3000000"
          }
        );
        const networkresult = await web3Instance.eth.net.getNetworkType();
        if (networkresult != "main"){
          onOpenSnackbar();
          setSnackerMsg("Please switch to mainnet");
          return;
        }
        try{
          const bigvalue=new BigNumber(1000000000000000000);
          let gas=80000;
          gas=gas+quantity*126315;
          const result = await nftContract.methods.mintVdv(address, quantity).send({ from: address, gas, value: BigNumber(quantity*Constants.UNIT_PRICE).multipliedBy(bigvalue)});
          if (result.status===true){
            onOpenSnackbar();
            setSnackerMsg("Your purchase has been confirmed");
          }
        }
        catch(e){
          onOpenSnackbar();
          setSnackerMsg("Your purchase failed , please try again later");
        }
        setShowSpinner(false);
        setOpenDialog(false);
      }else{
        onOpenSnackbar();
        setSnackerMsg("Please enter the valid quantity");
      }
        
   }else{
    onOpenSnackbar();
    setSnackerMsg("Please read and accept the terms & conditions");
   }
   
  }

  const onPurchaseFail = () => {
    onOpenSnackbar();
    setSnackerMsg("Your purchase failed , please try");
  }
  const onPurchaseSuccess = () => {
    onOpenSnackbar();
    setSnackerMsg("Your purchase has been confirmed");

  }
  const resetForm = () => {
     setIsChecked(false);
     setQuantity(1);
     setTotalPrice(Constants.UNIT_PRICE.toString()); 
  }

  const openTermsConditionDialog = ()=>{
    setOpenTermsDialog(true); 
  }
  const closeTermsConditionDialog = ()=>{
    setOpenTermsDialog(false); 
  }




  return (

    <div id="buy-a-cerf" className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} justifyContent="center"
          alignItems="center">
          <Grid item xs={12} sm={4} container  >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4" className={classes.buyAPEtxt}>
                  <span className="capitalFontBanner1">P</span>ARIS <span className="capitalFontBanner">É</span>LK
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} container >
            <Grid item xs container direction="column" spacing={2} >
              <Grid item xs  >
                <Box component="div"  >
                  <Typography gutterBottom variant="h6" className={classes.buyAPEtxtDescription}>
                     INITIAL SALES START AT 17:00H(EU/Paris) 7th AUGUST
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} container>
            <Grid item xs container direction="column" spacing={2} justifyContent="center"
              alignItems="center">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                onClick={openPurchaseDialog}
              >
                {(() => {
                    if (Constants.ENABLE_NFT && !isMobile){ 
                      return <span> Buy A PARIS ELK </span>
                    }else{
                       if( isMobile)
                       return <span> Please use desktop version to buy</span>
                       else
                      return <span> 17:00（EU/Paris）7th AUG</span>
                    }
               })()} 
              </Button>

            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Dialog open={openDialog} onClose={handlePurchaseDialogClose} className={classes.purchaseDialog} aria-labelledby="customized-dialog-title" >
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          <DialogTitle id="form-dialog-title" className={classes.dialogTitle}  >  BUY A PARIS ELK </DialogTitle>
          <DialogContent>
            {showSpinner && <CircularProgress />}
            <Grid container spacing={2} justifyContent="center"
              alignItems="center">
              <Grid item xs={12} sm={6} container  >
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item className={classes.imageBlock}   >
                    <img src={exteriorImage} className={classes.image}></img>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} container >
                <Grid item xs container direction="column" spacing={2} > 
                  <Grid item xs container direction="column" spacing={3} >
                    <Typography variant="body2" component="p">
                      Buy a PARIS ELK at  {Constants.UNIT_PRICE}ETH per Unit (Maximum 20 units)
                    </Typography>
                    <TextField
                      required
                      autoFocus
                      margin="dense"
                      id="quantity"
                      label= "Quantity"
                      type="number"
                      value={quantity}
                      InputLabelProps={{
                        shrink: true,
                      }}  
                      InputProps={{ 
                        inputProps: { 
                          min: 1, max: 20,
                        },
                      }}
                      onChange={handleTextFieldChange}
                      fullWidth 
                      error={totalPrice === "0.00"}
                      helperText={totalPrice === "0.00" ? 'Invalid quantity' : ' '}
                    /> 
                  </Grid>  
                  <Grid item xs container direction="column" spacing={2} >
                       <Typography variant="body2" component="p" className={classes.totalPrice} >
                        Total Price: <span className={classes.totalPriceValue}>{totalPrice}ETH</span>
                      </Typography>
                    </Grid>
                  <Grid item xs container direction="column" spacing={2} >
                   <Typography variant="body2" className={classes.termsCondition}  component="p"   >
                      Please read carefully the Terms & Conditions before purchasing: 
                    </Typography> 
                  </Grid>
                  <Grid item xs container direction="column" spacing={2} > 
                  <FormControlLabel
                    value="end"
                    control={<Checkbox checked = {isChecked} color="primary"
                    onChange={e => { 
                      setIsChecked(e.target.checked);
                    }}
                     />}
                    label= {   <Typography variant="body2" onClick = {openTermsConditionDialog}  className={classes.termsCondition}   component="p">
                    I acknowledge and accept Villadevendome.com <a href = "#" className={classes.termsCondition} >Terms & Conditions</a>.
                 </Typography>}
                    labelPlacement="end"
                  /> 
                  </Grid>
                </Grid>

              </Grid>
            </Grid>

          </DialogContent>
          <DialogActions>
            <Button onClick={handlePurchaseDialogClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" type="submit" >
              Confirm
            </Button>
          </DialogActions>
        </form>

      </Dialog>
      <Snackbar anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }} open={openSnackbar} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackerMsg}
        </Alert>
      </Snackbar>
      <TermsConditions open = {openTermsDialog} onClose =  {closeTermsConditionDialog} />    
    </div>
  );
}

BuyAPESection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};
export default withWidth()(withStyles(styles, { withTheme: true })(BuyAPESection));
