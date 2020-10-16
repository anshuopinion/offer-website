import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import NavigationDrawer from "./NavigationDrawer";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.color.mainDark};
`;

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
      <StyledAppBar position="sticky">
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
      </StyledAppBar>
    </>
  );
}

export default Navigation;
