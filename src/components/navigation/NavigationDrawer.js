import {
  List,
  ListItem,
  //   ListItemIcon,
  ListItemText,
  Drawer,
  ListItemIcon,
} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MobileIcon from "@material-ui/icons/PhoneAndroid";
import LaptopIcon from "@material-ui/icons/Laptop";
import TvIcon from "@material-ui/icons/LiveTv";
import OtherIcon from "@material-ui/icons/DonutLarge";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled(List)`
  color: ${(props) => props.theme.color.mainDark};
  .MuiSvgIcon-root {
    color: ${(props) => props.theme.color.mainDark};
  }
`;
function NavigationDrawer({ openHandler, closeHandler, open }) {
  const itemLists = [
    { text: "Home", link: "", icon: <HomeIcon /> },
    { text: "TV Offers", link: "tv", icon: <TvIcon /> },
    { text: "Mobile Offers", link: "mobile", icon: <MobileIcon /> },
    { text: "Laptop Offers", link: "laptop", icon: <LaptopIcon /> },
    { text: "Other Offers", link: "other", icon: <OtherIcon /> },
  ];

  return (
    <>
      <Drawer anchor="top" open={open} onClose={closeHandler}>
        <StyledList>
          {itemLists.map(({ text, link, icon }, index) => (
            <Link to={`/${link}`} key={text}>
              <ListItem button onClick={closeHandler}>
                <ListItemIcon>{icon}</ListItemIcon>

                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </StyledList>
      </Drawer>
    </>
  );
}

export default NavigationDrawer;
