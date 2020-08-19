import React from "react";
import { NavLink } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { Typography, Menu, Avatar, Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";

import { useStyles } from "./style";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {}
}))(MenuItem);

export default function PersonalMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Avatar
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      >
        G
      </Avatar>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Grid container spacing={2}>
            <Grid item>
              <Avatar>G</Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h6">Guest</Typography>
              {/* <Typography color='secondary'>View profile</Typography> */}
            </Grid>
          </Grid>
        </MenuItem>
        <NavLink to="/account" className={classes.navMenuItem}>
          <StyledMenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </StyledMenuItem>
        </NavLink>
        <NavLink to="/signout" className={classes.navMenuItem}>
          <StyledMenuItem>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </StyledMenuItem>
        </NavLink>
      </StyledMenu>
    </React.Fragment>
  );
}
