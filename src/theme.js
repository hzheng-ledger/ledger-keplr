import { createTheme ,responsiveFontSizes} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
// colors
const primary = "#613D59";
const secondary = "#048B9A"; 
const background = "#ffffff";
const light = "#ffffff";

const warningLight = "rgba(253, 200, 69, .3)";
const warningMain = "rgba(253, 200, 69, .5)";
const warningDark = "rgba(253, 200, 69, .7)"; 

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;
 
const theme = createTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  },
  palette: {
    primary: { main: primary },
    secondary: { 
      light: light,
      main: secondary }, 
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark
    },
   
    background: {
      default: background
    } 
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xl,
      lg,
      md,
      sm,
      xs
    }
  },
  typography: { 
  }
 
});

export default responsiveFontSizes(theme);