import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { useStyles } from "./style";
import { Search, SubMenu } from "../";

const Equipment = props => {

  const { DASH_ROUTES } = props
  
  const pathname = window.location.pathname.split('/')[1]
  
  var submenu =  DASH_ROUTES.filter(function(hero) {
    return hero.path === '/' + pathname;
  });
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.root} xs={12}>
        <Grid item xs={12} sm={7}>
          <Search />
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} sm={5} style={{ paddingRight: 0 }}>
            {submenu.length > 0 && <SubMenu items={submenu[0].subMenu} />}
          </Grid>
        </Hidden>
      </Grid>
    </React.Fragment>
  );
};

export { Equipment };
