import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector} from "react-redux";
import { settingActions, settingsDistributionActions } from '../../redux/actions'

import { Grid, Paper, Typography } from "@material-ui/core"
import { useStyles } from "./style"
import { Information } from "../Common/"

import { BarChart } from "./charts/BarChart"
import { CanvasImg } from '../Common/CanvasImg/CanvasImg'
import { BarChartSettingsDistributionHistogram } from  './charts/BarChartSettingsDistributionHistogram'
import { LineChartSettingsDistributionHeight } from './charts/LineChartSettingsDistributionHeight'


const Setting = props => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [flag, setFlag] = React.useState(true)
  const [flag2, setFlag2] = React.useState(true)

  const settingCanvas = useSelector(state => {
    return state.setting.canvas
  })

  useEffect(() => {
    if(flag || !settingCanvas) {
      dispatch(settingActions.canvas())
      setFlag(false)
    }
  }, [settingCanvas])

  const settingsDistribution = useSelector(state => {
    return state.settingsDistribution.data
  })

  useEffect(() => {
    if (flag2 || !settingsDistribution) {
      dispatch(settingsDistributionActions.getSettingsDistribution())
      setFlag2(false)
    }
  }, [settingsDistribution])

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
          <Information
            icon={"i"}
            title={'Antecedentes del equipo'}
            items={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
              "Tempor incididunt ut labore et dolore magna aliqua. ",
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ]}
          /> 
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} className={classes.imgCenter}>
            <CanvasImg canvas = { settingCanvas } />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.imgCenter}>
            <BarChart />
            {/* <img src={setting2} alt={"setting2"} style={{ width: "70%" }} /> */}
          </Paper>
        </Grid>

        {settingsDistribution && Object.keys(settingsDistribution).length > 0 && (
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
              <Grid item xs={12} sm={6} mt={2}><BarChartSettingsDistributionHistogram histogramData = { settingsDistribution.setting_histogram } /></Grid>
              <Grid item xs={12} sm={6} mt={2}><LineChartSettingsDistributionHeight heightData = { settingsDistribution.settings_vs_height } /></Grid>
            </Grid>
          </Paper>
        </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};

export { Setting };
