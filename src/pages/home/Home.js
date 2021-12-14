import { Fragment, useEffect ,useState,useCallback} from "react"; 
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
  Container,
  isWidthUp,
} from "@material-ui/core"; 
import NavBar from "../../navigation/NavBar"; 
import ExteriorSection from "./ExteriorSection";
import BuyAPESection from "./BuyAPESection"; 
import InteriorSection from "./InteriorSection";
import ConceptSection from "./ConceptSection";
import RoadmapSection from "./RoadmapSection";
import TeamSection from "./TeamSection";
import Footer from "../../components/Footer";  
import { CookieBanner } from '@palmabit/react-cookie-law';
import Constants from "../../constants"
import ReactGA from 'react-ga';  
import { useLocation } from 'react-router';

const styles = ( theme) => ({  
});  
function Home(props) { 
 
  const { classes } = props; 
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false); 



  const demo = async () => {
    if (!window.keplr) {
        //alert("Please install keplr extension");
    } else {
      await window.keplr.experimentalSuggestChain({
        chainId: "ledger-1",
        chainName: "ledger chain",
        rpc: "http://localhost:26657",
        rest: "http://localhost:1317",
        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: "ledger",
            bech32PrefixAccPub: "ledger" + "pub",
            bech32PrefixValAddr: "ledger" + "valoper",
            bech32PrefixValPub: "ledger" + "valoperpub",
            bech32PrefixConsAddr: "ledger" + "valcons",
            bech32PrefixConsPub: "ledger" + "valconspub",
        },
        currencies: [ 
            { 
                coinDenom: "ldgr", 
                coinMinimalDenom: "ldgr", 
                coinDecimals: 6, 
                //coinGeckoId: "ledger", 
            }, 
        ],
        feeCurrencies: [
            {
                coinDenom: "ldgr",
                coinMinimalDenom: "ldgr",
                coinDecimals: 6,
                //coinGeckoId: "ledger",
            },
        ],
        stakeCurrency: {
            coinDenom: "ldgr",
            coinMinimalDenom: "ldgr",
            coinDecimals: 6,
            //coinGeckoId: "ledger",
        },
        coinType: 118,
        gasPriceStep: {
            low: 0.01,
            average: 0.025,
            high: 0.03,
        },
    });
    }
  }

  useEffect(() => {
    //alert("chain demo");
  }, []);

  return (
    <Container maxWidth="lg">  
       Ledger Chain!
       <div/>
       <Button onClick={demo }>         
        {"Connect to Ledger chain"}
       </Button>
    </Container>
  );
}

export default withWidth()( withStyles(styles, { withTheme: true })(Home));



