import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { useStyles } from "./style";
import { Information } from "../Common/";
import { SimManto as SimMantoCalculator } from "../Common/Calculators/SimManto"
import { CanvasImg } from '../Common/Canvas/CanvasImg'

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
        <Grid item xs={10} mt={2}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Box p={2}>
              <SimMantoCalculator />
            </Box>
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={4}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Box p={2}>
              <img src={simmanto2} alt={"simmanto2"} style={{ width: "70%" }} />
            </Box>
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
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.imgCenter}>
            {/* <CanvasImg /> */}
            <Box p={2}>
              <img
                src={simmanto3}
                alt={"simmanto3"}
                style={{ height: "100%" }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { SimManto };
