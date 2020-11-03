import React, { useEffect } from "react";
import { useSelector } from 'react-redux'
import PropTypes from "prop-types";
import { Button, Menu, MenuItem, Box } from "@material-ui/core";

import { useStyles } from "./style";

import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import { scaleResults } from "../../../redux/selectors";


const Scale = props => {

  const scale = useSelector(state => scaleResults(state));

  const classes = useStyles();

  const [anchor, setAnchor] = React.useState(null);
  const [selectScale, setSelectScale] = React.useState(scale);

  useEffect(() => {

  }, [selectScale])

  const handleClick = event => {
    setAnchor(event.currentTarget);
  };

  const onClickSelect = data => {
    setSelectScale(data)
    handleClose()
  }

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
          <AspectRatioIcon style={{ marginRight: "5px" }} /> {selectScale}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchor}
          keepMounted
          open={Boolean(anchor)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => onClickSelect('CENTIMETRO')}>CENTIMETRO</MenuItem>
          <MenuItem onClick={() => onClickSelect('PULGADA')}>PULGADA</MenuItem>
        </Menu>
      </Box>
    </React.Fragment>
  );
};

Scale.propTypes = {
  items: PropTypes.array.isRequired
};

export { Scale };
