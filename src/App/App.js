/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { makeStyles, CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import dashboard from '../pages/dashboard/dashboard';
import Login from '../pages/Authticate/Login';
import Transfer from '../pages/logistic/transfer/Transfer';
import Transaction from '../pages/logistic/Transaction';
import Acknowledge from '../pages/logistic/acknowledge/Acknowledge';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1cabe2",
      light: '#d2f6ff'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    
  }
})

function App() {
  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className={classes.appMain}>
            <Switch>
            {/* <Route path="/unifrontendweb" exact component={ Login } /> */}
              <Route path="/unifrontendweb" exact component={ dashboard } />
              <Route path="/transfer" exact component={ Transfer } />
              <Route path="/transaction" exact component={ Transaction } />
              <Route path="/acknowledge" exact component={ Acknowledge } />
            </Switch>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
