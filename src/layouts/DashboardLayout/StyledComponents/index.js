import { styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export const DashboardLayoutRoot = styled("div")(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  })
);

export const DashboardLayoutWrapper = styled("div")(
  ({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      // paddingLeft: 200
    },
  })
);

export const DashboardLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

export const DashboardLayoutContent = styled("div")(
  ({ theme }) => ({
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
    padding: theme.spacing(3),
    background: "#F9FAFA",
  })
);

// Drawer & AppBar Components
const drawerWidth = 270;



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  visibility: "visible !important",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  visibility: "visible !important",
  width: `calc(${theme.spacing(8)} + 1px)`,
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",
  padding: theme.spacing(0, 1),
  marginTop: "64px",
  minHeight: "48px !important",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  // width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  [theme.breakpoints.down("lg")]: {
    zIndex: theme.zIndex.drawer - 1,
  },
}));
