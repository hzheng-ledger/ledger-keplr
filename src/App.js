import './App.css';
import Home from './pages/home/Home';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import theme from "./theme";
import React from 'react';
import GlobalStyles from "./GlobalStyles";


function App() { 
  return (
    <BrowserRouter>
    <MuiThemeProvider theme={theme}> 
      <CssBaseline /> 
      <GlobalStyles />
        <Switch> 
          <Route path='/home' component={Home}/>
          <Redirect to='/home'/>
        </Switch>
    </MuiThemeProvider>
  </BrowserRouter>
  );
}

export default App;
