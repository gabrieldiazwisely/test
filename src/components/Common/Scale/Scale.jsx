import React from "react";
import PropTypes from "prop-types";
import { Button, Menu, MenuItem, Box } from "@material-ui/core";

import { useStyles } from "./style";

import AspectRatioIcon from "@material-ui/icons/AspectRatio";

const Scale = props => {
  const classes = useStyles();

  const [anchor, setAnchor] = React.useState(null);

  const handleClick = event => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <React.Fragment>
      <Box>
        <Button
          className={classes.options}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <AspectRatioIcon style={{ marginRight: "5px" }} /> CENTIMETRO
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchor}
          keepMounted
          open={Boolean(anchor)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>CENTIMETRO</MenuItem>
          <MenuItem onClick={handleClose}>PULGADA</MenuItem>
        </Menu>
      </Box>
    </React.Fragment>
  );
};

Scale.propTypes = {
  items: PropTypes.array.isRequired
};

export { Scale };
