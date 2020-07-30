import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "./style";
import { Information, Equipment } from "../Common/";

import simmanto1 from "../../assets/img/fake/simmanto1.png";
import simmanto2 from "../../assets/img/fake/simmanto2.png";
import simmanto3 from "../../assets/img/fake/simmanto3.png";

const SimManto = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        className={classes.root}
        direction="row"
        justify="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Equipment />
        </Grid>
        <Grid item xs={2} mt={2}></Grid>
        <Grid item xs={8} mt={2}>
          <Paper elevation={3} className={classes.imgCenter}>
            <img src={simmanto1} alt={"simmanto1"} style={{ width: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={2} mt={2}></Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className={classes.imgCenter}>
            <img src={simmanto2} alt={"simmanto2"} style={{ width: "70%" }} />
          </Paper>
          <Paper elevation={0} className={classes.solution}>
            <Information
              title={"Solución"}
              items={[
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
              ]}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.imgCenter}>
            <img src={simmanto3} alt={"simmanto3"} style={{ width: "70%" }} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { SimManto };
