import {useState} from 'react'
import { ThemeProvider } from "@material-ui/core/styles";
import overrideTheme from "./theme/theme";
import { Provider } from "react-redux";

import { BrowserRouter, Route,Router, Switch } from 'react-router-dom';
import InLayout from './component/InLayout'
import store from "./store";

function App() {
 
  return (
    <ThemeProvider theme={overrideTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <InLayout/>        
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
