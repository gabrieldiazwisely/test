import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { useStyles } from "../../style";
import { Information } from "../../../Common";

import Table from "./Table";
import TableGrado from "./TableGrado";

import angulocamara1 from "../../../../assets/img/fake/angulocamara1.png"

const AnguloCamara = props => {
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
        <Grid item xs={10} sm={12}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Ángulo NIP</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <img
                  src={angulocamara1}
                  alt={"angulocamara1"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                  <Grid item  xs={12} sm={12}>
                    <Paper>
                      <Table />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Paper>
                      <TableGrado />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.Dinformation}>
                    <Information
                      items={[
                        "Para el cálculo del NIP Angle (ángulo NIP) como para las dimensiones interiores de la cámara de chancado, se utilizaron las curvas promedio tanto para cóncavo como para manto. Se realiza la medida en la condición de OSS y CSS."
                      ]}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { AnguloCamara };
