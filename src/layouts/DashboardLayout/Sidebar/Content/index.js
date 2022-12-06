import { Box, Hidden, List, Stack } from "@mui/material";
// import Logo from "components/Logo";
import CloseIcon from "@mui/icons-material/Close";
import { sideBarStyles } from "../../../layout.style";
import { areaSalesManagerSideBarRoutes } from "../Routes";
import NavItem from "../../../NavItem";



const SideBarContent = ({ isDrawerOpen, closeDrawer }) => {
  const classes = sideBarStyles();
  return (
    <Box className={classes.root}>
      <Hidden lgUp>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "8%", pb: "12px" }}
        >
                  <img src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23161105/39.png" style={{width:80,height:40}} />
          <CloseIcon sx={{ color: "#655ad6" }} onClick={closeDrawer} />
        </Stack>
      </Hidden>
      <Box sx={{ p: 0, pt: 0 }}>
        <List
          sx={{
            pt: 0,
          }}
        >
          {areaSalesManagerSideBarRoutes.map((item) => (
                <NavItem
                  key={item.title}
                  href={item.href}
                  title={item.title}
                  icon={item.icon}
                  isDrawerOpen={isDrawerOpen}
                />
              ))
          }
        </List>
      </Box>
    </Box>
  );
};

export default SideBarContent;
