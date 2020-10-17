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
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import Other from "./pages/Other";
function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/mobile/:id">
              <ProductPage type="mobiles" />
            </Route>
            <Route exact path="/mobile">
              <Mobile />
            </Route>
            <Route path="/laptop/:id">
              <ProductPage type="laptops" />
            </Route>
            <Route exact path="/laptop">
              <Laptop />
            </Route>
            <Route path="/tv/:id">
              <ProductPage type="tvs" />
            </Route>
            <Route path="/tv">
              <TV />
            </Route>
            <Route path="/other/:id">
              <ProductPage type="others" />
            </Route>
            <Route path="/other">
              <Other />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Redirect to="/">
              <Home />
            </Redirect>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
