import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { useStyles } from "../../style";

import angulocamara1 from "../../../../assets/img/fake/angulocamara1.png";
import angulocamara2 from "../../../../assets/img/fake/angulocamara2.png";

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
        <Grid item xs={10} mt={12}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Ángulo NIP</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} mt={12}>
                <img
                  src={angulocamara1}
                  alt={"angulocamara1"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6} mt={12}>
                <img
                  src={angulocamara2}
                  alt={"angulocamara2"}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { AnguloCamara };
