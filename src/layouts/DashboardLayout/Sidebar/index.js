import React from "react";
import { useLocation } from "react-router-dom";
import {
  Hidden,
  Drawer as MobileDrawer,
} from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import SideBarContent from "./Content";


const SideBar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  React.useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  return (
    <>
      <Hidden lgUp>
        <MobileDrawer
          anchor="left"
          variant="temporary"
          PaperProps={{
            sx: {
              width: 300,
            },
          }}
          open={openMobile}
          onClose={onMobileClose}
        >
          <SideBarContent closeDrawer={onMobileClose} />
        </MobileDrawer>
      </Hidden>
      <Hidden lgDown>
     
      </Hidden>
    </>
  );
};


SideBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default SideBar;
