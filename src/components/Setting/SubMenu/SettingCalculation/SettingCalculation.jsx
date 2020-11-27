import React, { useEffect, useState } from "react"
import {  useDispatch, useSelector} from "react-redux"
import { settingActions, settingsDistributionActions } from '../../../../redux/actions'
import { Information } from "../../../Common"
import { SettingVariation } from "../../../Common/Calculators/SettingVariation"
import { Grid, Typography, Paper, Box, Hidden } from "@material-ui/core"
import { useStyles } from "../../style"

import { LineChart } from "../../charts/LineChart"

import { CanvasImg } from '../../../Common/Canvas/CanvasImg'
import { CanvasPercent } from '../../../Common/Canvas/CanvasPercent'


const SettingCalculation = props => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [flag, setFlag] = React.useState(true)

  const settingCanvas = useSelector(state => {
    return state.setting.canvas
  })

  useEffect(() => {
    if(flag || !settingCanvas) {
      dispatch(settingActions.canvas())
      setFlag(false)
    }
  }, [settingCanvas])


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
        <Grid item xs={12} sm={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Box p={2}> 
              <Typography variant="h3" className={classes.defaultTitle} >Variación del Setting</Typography>
              <Grid container spacing={2} align={'left'}>
                <Grid item xs={12} sm={12}>
                  <SettingVariation />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10} md={4}>
          <Paper elevation={3} className={classes.imgCenter, classes.fixHeight}>
            <Box p={2}>
              <Grid container style={{overflowX: 'auto'}}>
                <Grid item xs={10}>
                  <Box pt={1} pb={3}>
                    <CanvasImg canvas = { settingCanvas } OSS={settingCanvas.OSS}/>
                  </Box>
                </Grid>
                <Grid item xs={2} disableColumnResize={true} >
                  <Box pt={1}>
                    <CanvasPercent  points = {{min: settingCanvas.height.min, max:settingCanvas.height.max, altura:settingCanvas.height.midium }}/>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Hidden smDown >
          <Grid item xs={12} sm={5} md={6}>
            <Paper elevation={3} className={classes.imgCenter, classes.fixHeight}>
              <Box p={2}>
                <Typography variant="h3" className={classes.defaultTitle} >Setting v/s Altura de poste</Typography>
              </Box>
              <Box>
                <LineChart/>
              </Box>
            </Paper>
          </Grid>
        </Hidden>
      </Grid>
    </React.Fragment>
  )
}

export { SettingCalculation }
