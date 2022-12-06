import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DifferenceIcon from '@mui/icons-material/Difference';
import LogoIcon from "../../../assets/LogoIcon.svg"
import {
  // AppBar,
  Box,
  Hidden,
  Toolbar,
  IconButton,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";
import { AppBar } from "../StyledComponents";
import { Menu as MenuIcon } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PopOverMenu from "./PopOver";
import { topNavBarStyles } from "../../layout.style";
const TopAppBar = ({ onMobileNavOpen, ...rest }) => {
  const classes = topNavBarStyles();
  const matches = useMediaQuery("(max-width:1200px)");

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);


  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        elevation={0}
        style={{ boxShadow: "none" }}
        className={classes.root}
        {...rest}
      >
        <Toolbar>
          <RouterLink
            style={{
              marginLeft: matches ? "10px" : "16px",
              display:"flex",
              gap:"10px"
            }}
          >
            <img src={LogoIcon} style={{width:30,height:25}}/>
            <Typography sx={{fontSize:"25px",color:"#fff"}}>density</Typography>
          </RouterLink>
          <RouterLink style={{marginLeft:8,color:'#fff'}} to='/onboarding' sx={{color:'red'}}>Onboarding</RouterLink >
          <RouterLink style={{marginLeft:8,color:'#fff'}} to='/deposit' sx={{color:'red'}}>Deposit</RouterLink >
          <RouterLink style={{marginLeft:8,color:'#fff'}} to='/withdraw' sx={{color:'red'}}>Withdraw</RouterLink >
          <RouterLink style={{marginLeft:8,color:'#fff'}} to='/margin' sx={{color:'red'}}>Margin</RouterLink >
          <Box sx={{ flexGrow: 1 }} />
          <Hidden lgDown>
            <Box
              display="flex"
              alignItems="center"
              
              padding="4px 8px"
              sx={{gap:2}}
            >
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  fontSize: 14,
                  background: "#56565D",
                  color: "#fff",
                }}
                src="/static/images/avatar/1.jpg"
              >
                <DifferenceIcon/>
              </Avatar>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  fontSize: 14,
                  background: "#56565D",
                  color: "#fff",
                }}
                src="/static/images/avatar/1.jpg"
              >
                <AccountBalanceWalletIcon/>
              </Avatar>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  fontSize: 14,
                  background: "#56565D",
                  color: "#fff",
                }}
                src="/static/images/avatar/1.jpg"
              >
                <PersonIcon/>
              </Avatar>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  fontSize: 14,
                  background: "#56565D",
                  color: "#fff",
                }}
                src="/static/images/avatar/1.jpg"
              >
                <NotificationsIcon/>
              </Avatar>
            </Box>
          </Hidden>
          <Hidden lgUp>
            <IconButton size="large" color="primary" onClick={onMobileNavOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Divider />
      </AppBar>
      <PopOverMenu
        anchorEl={anchorEl}
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
      />
    </>
  );
};

export default TopAppBar;
