import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { multiLanguageActions } from '../../../redux/actions'
import { languageResults } from "../../../redux/selectors";

import PropTypes from "prop-types";
import { Button, Menu, MenuItem, Box } from "@material-ui/core";

import { useStyles } from "./style";

import TranslateIcon from "@material-ui/icons/Translate";

const MultiLanguage = props => {
  const dispatch = useDispatch(); // remover dispatch en handleClick!!!

  const language = useSelector(state => languageResults(state));

  const classes = useStyles();

  const [anchor, setAnchor] = React.useState(null);
  const [selectLanguage, setSelectLanguage] = React.useState(language);

  useEffect(() => {
    // if(!language || selectLanguage) {
    //   dispatch(multiLanguageActions.getSelectedLanguage(selectLanguage))
    // }
  }, [selectLanguage]);

  const handleClick = event => {
    dispatch();
    setAnchor(event.currentTarget);
  };

  const onClickSelect = data => {
    setSelectLanguage(data);
    handleClose();
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
          <TranslateIcon style={{ marginRight: "5px" }} /> {selectLanguage}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchor}
          keepMounted
          open={Boolean(anchor)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              onClickSelect("es");
            }}
          >
            ESPAÑOL
          </MenuItem>
          <MenuItem
            onClick={() => {
              onClickSelect("en");
            }}
          >
            ENGLISH
          </MenuItem>
        </Menu>
      </Box>
    </React.Fragment>
  );
};

MultiLanguage.propTypes = {
  items: PropTypes.array.isRequired
};

export { MultiLanguage };
