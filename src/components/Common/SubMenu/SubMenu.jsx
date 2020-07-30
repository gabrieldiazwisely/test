import React from "react";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "./style";
import clsx from "clsx";

const SubMenu = props => {
  const classes = useStyles();
  const pathname = window.location.pathname;

  const { items } = props;

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        className={classes.root}
      >
        {items.map((item, key) => {
          return (
            <NavLink
              to={item.path}
              key={key}
              className={clsx(
                classes.navLink,
                item.path === pathname ? classes.active : ""
              )}
            >
              {item.title}
            </NavLink>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export { SubMenu };
