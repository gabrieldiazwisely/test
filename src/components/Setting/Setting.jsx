import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import { useStyles } from "./style"
import { Information } from "../Common/"

import { BarChart } from "./charts/BarChart"
import { CanvasImg } from '../Common/CanvasImg/CanvasImg'
import { BarChartDistribucionSetting } from "./charts/BarChartDistribucionSetting"
import { LineChartDistribucionSetting } from "./charts/LineChartDistribucionSetting"


import desgaste1 from "../../assets/img/fake/desgaste1.png";

const Setting = props => {
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
          {/* <Information
            icon={"i"}
            title={'Antecedentes del equipo'}
            items={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
              "Tempor incididunt ut labore et dolore magna aliqua. ",
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ]}
          /> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} className={classes.imgCenter}>
            <CanvasImg />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.imgCenter}>
            <BarChart />
            {/* <img src={setting2} alt={"setting2"} style={{ width: "70%" }} /> */}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={10} mt={2}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Distribucion de setting</Typography>
            <Grid
              container
              className={classes.root}
              direction="row"
              justify="center"
              spacing={2}
            >
              <Grid item xs={12} sm={6} mt={2}><BarChartDistribucionSetting /></Grid>
              <Grid item xs={12} sm={6} mt={2}><LineChartDistribucionSetting/></Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { Setting };
