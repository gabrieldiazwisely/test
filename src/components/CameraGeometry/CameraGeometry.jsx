import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "./style";
import { Information } from "../Common/";
import Table from "./Table";

const CameraGeometry = props => {
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
        <Grid item xs={10}>
          <Information
            icon={"i"}
            title={"Antecedentes del equipo"}
            items={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
              "Tempor incididunt ut labore et dolore magna aliqua. ",
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ]}
          />
        </Grid>
        <Grid item xs={10} mt={2}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Table />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { CameraGeometry };
