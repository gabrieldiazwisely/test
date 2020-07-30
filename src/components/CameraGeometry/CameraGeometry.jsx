import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "./style";
import { Information, Equipment } from "../Common/";
import Table from "./Table";

const SUBMENU = [
  { id: 1, title: "Resumen", path: "/camera-geometry" },
  { id: 2, title: "Deformaciones", path: "/camera-geometry/deformaciones" },
  { id: 3, title: "Ángulo cámara", path: "/camera-geometry/angulo-camara" }
];

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
        <Grid item xs={12}>
          <Equipment submenu={SUBMENU} />
        </Grid>
        <Grid item xs={9}>
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
        <Grid item xs={9} mt={2}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Table />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { CameraGeometry };
