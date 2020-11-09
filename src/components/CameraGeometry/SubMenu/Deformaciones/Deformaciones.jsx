import React from "react";
import { Information } from "../../../Common";
import { Grid, Typography, Paper, Box } from "@material-ui/core";
import { useStyles } from "../../style";

import deformaciones2 from "../../../../assets/img/fake/deformaciones2.png";
import deformaciones3 from "../../../../assets/img/fake/deformaciones3.png";

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
        <Grid item xs={10}>
          <Information
            title={"Antecedentes del equipo"}
            icon={"i"}
          />
        </Grid>
        {/* <Hidden smDown>
        <Grid item xs={12} sm={12} style={{ textAlign: "right" }}>
          <img
            src={deformaciones1}
            alt={"deformaciones1"}
            style={{ height: "100%" }}
          />
        </Grid>
        </Hidden> */}
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Box p={2}>
              <Typography variant="h3" className={classes.defaultTitle} >Deformación de cóncava</Typography>
              <Grid container spacing={2} direction="row" justify="center">
                
                <Grid item xs={12} mt={12}>
                  <img
                    src={deformaciones2}
                    alt={"deformaciones2"}
                    style={{ width: "90%" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Box p={2}>
              <Typography variant="h3" className={classes.defaultTitle} >Deformación de manto</Typography>
              <Grid container spacing={2} direction="row" justify="center">
                <Grid item xs={12} mt={12}>
                  <img
                    src={deformaciones3}
                    alt={"deformaciones3"}
                    style={{ width: "90%" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { Deformaciones };
