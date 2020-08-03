import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";

import { useStyles } from "./style";

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const SubMenuMobil = props => {
  const classes = useStyles();
 
  const { items, handleMobileMenuClose } = props
//   debugger

  const [anchor, setAnchor] = React.useState(null);

  const handleClick = event => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
    handleMobileMenuClose()
  };

  const handleClickCloseAll = () => {
    setAnchor(null);
    if (items.subMenu.length === 0 )
        handleMobileMenuClose()
  }

  return (
    <React.Fragment>
        <Button
          className={clsx(classes.NavButton, classes.NabButtonMobile)}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          transformOrigin={{ vertical: "left", horizontal: "left" }}
        >
            <NavLink to={ items.path } onClick={handleClickCloseAll}>
                { items.name }
                { items.subMenu.length > 0 && <ArrowRightIcon /> }
            </NavLink>
        </Button>
        {items.subMenu.length > 0 && <Menu
          id="simple-menu"
          anchorEl={anchor}
          keepMounted
          open={Boolean(anchor)}
          onClose={handleClose}
        >

            {items.subMenu.map((prop, key) => {
                return (
                <MenuItem key={key}>
                    <NavLink to={prop.path} onClick={handleClose} >
                    {" "}
                    <IconButton
                        disableRipple
                        className={clsx(classes.NavButton, classes.NabButtonMobile)}
                        color="primary"
                    >
                        {prop.title}
                    </IconButton>
                    </NavLink>
                </MenuItem>
                );
            })}
        </Menu>}
    </React.Fragment>
  );
};

SubMenuMobil.propTypes = {
  items: PropTypes.array.isRequired
};

export { SubMenuMobil };
