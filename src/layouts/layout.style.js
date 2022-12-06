import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const navStyles = makeStyles((theme) => ({
  navRoot: {
    display: "flex",
    padding: 0,
  },
  navRootActive: {
    display: "flex",
    padding: 0,
    background: "rgba(101, 90, 214, 0.08)",
    // borderLeft: '4px solid #655AD6',
    "&:before": {
      content: "' '",
      position: "absolute",
      top: "1.67%",
      background: "#655AD6",
      borderRadius: "0px 50px 50px 0px",
      width: "4px",
      height: "100%",
    },
  },
  routerBtn: {
    fontWeight: "500",
    // justifyContent: "flex-start",
    letterSpacing: 0,
    padding: theme.spacing(1.2, 0.5),
    textTransform: "none",
    width: "100%",
    // paddingLeft: "8%",
    minHeight: 64,
  },
}));

export const sideBarStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  userBtn: {
    background: "rgba(13, 128, 159, 0.05)",
    border: "1px solid #0D809F",
    borderRadius: "4px",
    padding: "8px 12px",
    color: "#000",
    textTransform: "capitalize",
    fontSize: 14,
    justifyContent: "space-around",
    "&:hover": {
      background: "rgba(13, 128, 159, 0.05)",
    },
  },
  collapseBtn: {
    background: "rgba(101, 90, 214, 0.9)",
    color: "#fff",
    transition: "0.3s all ease-in-out",
    "&:hover": {
      background: "rgba(101, 90, 214)",
    },
  },
}));

export const topNavBarStyles = makeStyles(() => ({
  root: {
    background: "#1F1F24",
    boxShadow: "0px 0px 25px 4px rgba(0, 0, 0, 0.1)",
  },
  avatar: {
    width: 60,
    height: 60,
  },
  navBtn: {
    borderRadius: "8px",
    textTransform: "capitalize",
    padding: "9px 18px",
  },
  navBtnText: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  },
  navBtnAva: {
    width: 25,
    height: 25,
    margin: "0px 10px",
  },
}));

export const popOverStyles = makeStyles((theme) => ({
  popOverMenu: {
    // padding: theme.spacing(2)
  },
  menuItem: {
    padding: theme.spacing(1, 1),
  },
  menuText: {
    color: theme.palette.text.secondary,
    fontSize: 12,
  },
  menuLink: {
    display: "flex",
    alignItems: "center",
    // fontWeight: 'bold'
  },
  menuAva: {
    fontSize: 14,
    width: 35,
    height: 35,
  },
}));
