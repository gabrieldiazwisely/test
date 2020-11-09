import React from "react"
import { Grid, Typography, Paper } from "@material-ui/core"
import { useStyles } from "../../style"

import mapaespesores1 from "../../../../assets/img/fake/mapaespesores1.png"

const MapaEspesores = props => {
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
        <Grid item xs={12} sm={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3" className={classes.defaultTitle} >Mapa de espesores remanentes</Typography>
            <img
              src={mapaespesores1}
              alt={"mapaespesores1"}
              style={{ width: "70%" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { MapaEspesores };
