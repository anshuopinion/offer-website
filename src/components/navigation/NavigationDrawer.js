import {
  List,
  ListItem,
  //   ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import React from "react";

import { Link } from "react-router-dom";
function NavigationDrawer({ openHandler, closeHandler, open }) {
  const itemLists = [
    { text: "Home", link: "" },
    { text: "TV", link: "tv" },
    { text: "Mobile", link: "mobile" },
    { text: "Laptop", link: "laptop" },
  ];

  return (
    <>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={closeHandler}
        onOpen={openHandler}
      >
        <List>
          {itemLists.map(({ text, link }, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <Link to={`/${link}`}>
                <ListItemText primary={text} onClick={closeHandler} />
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );
}

export default NavigationDrawer;
