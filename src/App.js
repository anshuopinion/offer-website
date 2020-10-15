import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import NavigationBar from "./components/navigation/NavigationBar";
import theme from "./theme/theme";
import { StylesProvider } from "@material-ui/core/styles";
import Home from "./pages/Home";
import Mobile from "./pages/Mobile";
import TV from "./pages/TV";
import Laptop from "./pages/Laptop";

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        
        <Router>
          <NavigationBar/>
          <Switch>
            <Route path="/mobile">
              <Mobile />
            </Route>
            <Route path="/laptop">
              <Laptop />
            </Route>
            <Route path="/tv">
              <TV />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Redirect to="/">
              <Home />
            </Redirect>
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
