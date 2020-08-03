import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Equipment } from "../Common/";

import PersonalMenu from "./PersonalMenu";
import { SubMenuMobil } from "./SubMenuMobil";

import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Grid
} from "@material-ui/core";

import MoreIcon from "@material-ui/icons/MoreVert";

import { useStyles } from "./style";
import logo from "../../assets/img/logo-elecmetal.png";
import logo_small from "../../assets/img/logo-elecmetal_small.png";

const Sidebar = (props) => {

  const { DASH_ROUTES } = props
  const classes = useStyles();
  const pathname = window.location.pathname.split("/");

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = event => {
    console.log("event.currentTarget", event.currentTarget);
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {DASH_ROUTES.map((prop, key) => {
        return (
          <MenuItem key={key}>
              <SubMenuMobil items={prop} handleMobileMenuClose={handleMobileMenuClose}/>
          </MenuItem>
        );
      })}
    </Menu>
  );

  return (
    <AppBar className={clsx(classes.root)}>
      <Toolbar>
        <Grid container className={classes.NavAll}>
          <Grid item xs={4} sm={2}>
            <NavLink to="/projects">
              <Hidden smDown>
                <img alt="Logo" src={logo} className={classes.logo} />
              </Hidden>
              <Hidden mdUp>
                <img
                  alt="Logo"
                  src={logo_small}
                  className={classes.logo_small}
                />
              </Hidden>
            </NavLink>
          </Grid>
          <Grid item xs={5} sm={9} className={classes.NavList}>
            <div className={classes.flexGrow} />
            <Hidden smDown>
              {DASH_ROUTES.map((prop, key) => {
                return (
                  <Tooltip title={prop.name} key={key}>
                    <NavLink
                      to={prop.path}
                      key={key}
                      className={classes.NavLink}
                    >
                      <IconButton
                        disableRipple
                        color="primary"
                        className={clsx(
                          classes.NavButton,
                          "/" + pathname[1] === prop.path ? "active" : ""
                        )}
                      >
                        {prop.name}
                      </IconButton>
                    </NavLink>
                  </Tooltip>
                );
              })}
            </Hidden>
          </Grid>
          <Grid item xs={3} sm={1} className={classes.NavPersonalConfig}>
            <PersonalMenu />
          </Grid>
        </Grid>

        <Hidden mdUp>
          <IconButton
            aria-controls={mobileMenuId}
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMobileMenuOpen}
          >
            <MoreIcon />
          </IconButton>
        </Hidden>

        {renderMobileMenu}
      </Toolbar>
      <Equipment DASH_ROUTES = {DASH_ROUTES} />
    </AppBar>
  );
};

const connected = connect()(Sidebar);
export { connected as Sidebar };
