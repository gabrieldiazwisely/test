import React from "react";
import { Information, Equipment } from "../../../Common";
import { Grid, Typography, Paper } from "@material-ui/core";
import { useStyles } from "../../style";

import deformaciones1 from "../../../../assets/img/fake/deformaciones1.png";
import deformaciones2 from "../../../../assets/img/fake/deformaciones2.png";
import deformaciones3 from "../../../../assets/img/fake/deformaciones3.png";

const SUBMENU = [
  { id: 1, title: "Resumen", path: "/camera-geometry" },
  { id: 2, title: "Deformaciones", path: "/camera-geometry/deformaciones" },
  { id: 3, title: "Ángulo cámara", path: "/camera-geometry/angulo-camara" }
];

const Deformaciones = props => {
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
        <Grid item xs={12} style={{ textAlign: "right" }}>
          <img
            src={deformaciones1}
            alt={"deformaciones1"}
            style={{ height: "100%" }}
          />
        </Grid>
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Deformación de cóncava</Typography>
            <Grid container spacing={2} direction="row" justify="center">
              <Grid item xs={8} mt={12} className={classes.Dinformation}>
                <Information
                  title={"Antecedentes del equipo"}
                  icon={"i"}
                  items={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
                    "Tempor incididunt ut labore et dolore magna aliqua. ",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  ]}
                />
              </Grid>
              <Grid item xs={12} mt={12}>
                <img
                  src={deformaciones2}
                  alt={"deformaciones2"}
                  style={{ width: "90%" }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Deformación de manto</Typography>
            <Grid container spacing={2} direction="row" justify="center">
              <Grid item xs={12} mt={12}>
                <img
                  src={deformaciones3}
                  alt={"deformaciones3"}
                  style={{ width: "90%" }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { Deformaciones };
