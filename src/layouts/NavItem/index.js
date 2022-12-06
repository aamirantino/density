import React from "react";
import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";
import { ListItem, Hidden } from "@mui/material";
import { navStyles } from "../layout.style";


const NavItem = ({
  href,
  icon: Icon,
  title,
  isDrawerOpen,
  ...rest
}) => {
  const classes = navStyles();
  const location = useLocation();

  const active = href
    ? !!matchPath(
        {
          path: href,
          end: false,
        },
        location.pathname
      )
    : false;

  return (
    <ListItem
      disableGutters
      className={active ? classes.navRootActive : classes.navRoot}
      {...rest}
    >
  
    </ListItem>
  );
};



export default NavItem;
