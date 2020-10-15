import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import NavigationDrawer from "./NavigationDrawer";

function Navigation() {
  const [open, setOpen] = useState(false);

  const closeHandler = () => {
    setOpen((prevOpen) => false);
  };
  const openHandler = () => {
    setOpen((prevOpen) => true);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={openHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Anshu Opinion
          </Typography>
        </Toolbar>
        <NavigationDrawer
          open={open}
          openHandler={openHandler}
          closeHandler={closeHandler}
        />
      </AppBar>
    </>
  );
}

export default Navigation;
