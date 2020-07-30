import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./style";
import { Search, SubMenu } from "../";

const Equipment = props => {
  const classes = useStyles();
  const { submenu = [] } = props;
  return (
    <React.Fragment>
      <Grid container className={classes.root} xs={12}>
        <Grid item xs={12} sm={4}>
          <Search />
        </Grid>
        <Grid item xs={12} sm={8} style={{ paddingRight: 0 }}>
          {submenu.length > 0 && <SubMenu items={submenu} />}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { Equipment };
