import {
  List,
  ListItem,
  //   ListItemIcon,
  ListItemText,
  Drawer,
  Button,
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
      <Drawer anchor="top" open={open} onClose={closeHandler}>
        <List>
          {itemLists.map(({ text, link }, index) => (
            <Link to={`/${link}`} key={text}>
              <ListItem button onClick={closeHandler}>
                {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}

                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default NavigationDrawer;
