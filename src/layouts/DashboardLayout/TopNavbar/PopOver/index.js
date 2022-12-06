import { useState } from "react";
import { ExitToApp } from "@mui/icons-material";
import {
  Menu,
  MenuItem,
  Box,
  Typography,
  ListItemIcon,
  Divider,
  Avatar,
  Stack,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { popOverStyles } from "../../../layout.style";


const PopOverMenu = ({
  anchorEl,
  isOpen,
  onClose,
  onLogOut,
  user,
}) => {
  const classes = popOverStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        elevation={8}
        onClose={onClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 5,
            borderRadius: "8px",
            p: 1.5,
            minWidth: 275,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <Box className={classes.popOverMenu}>
          {/* <Typography variant="h6" className={classes.menuText}>
            You're viewing your personal profile
          </Typography> */}
          <Stack flexDirection="row" sx={{ ml: 1 }}>
            <Avatar
              style={{
                width: 40,
                height: 40,
                background: "#EEEDFA",
                color: "#655AD6",
              }}
              // alt={user && user.name}
              src="/static/images/avatar/1.jpg"
            />
            <Box ml={1}>
              <Typography variant="h5" color="text.primary" sx={{ mb: -0.5 }}>
                {/* {user && user.name} */}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textTransform: "capitalize" }}
              >
                {/* {user && user.user_role.replace(/_/g, " ")} */}
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Divider sx={{ mt: 1 }} />
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            window.open(`mailto:nykaad-disha@nykaa.com`);
            onClose();
          }}
        >
          <ListItemIcon>
            <HelpOutlineIcon fontSize="small" />
          </ListItemIcon>
          <Typography
            variant="h6"
            className={classes.menuLink}
            // onClick={() => window.open(`mailto:nykaad-disha@nykaa.com`)}
          >
            Help
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setOpen(true)} className={classes.menuItem}>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <Typography variant="h6" className={classes.menuLink}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default PopOverMenu;
