import React from "react"
import { Information } from "../../../Common"
import { SettingVariation } from "../../../Common/Calculators/SettingVariation"
import { Grid, Typography, Paper } from "@material-ui/core"
import { useStyles } from "../../style"

import { LineChart } from "../../charts/LineChart"

import { CanvasImg } from '../../../Common/CanvasImg/CanvasImg'

import settingcalculation2 from '../../../../assets/img/fake/settingcalculation2.png'


const SettingCalculation = props => {
  const classes = useStyles()
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
            <Typography variant="h3">Variación del Setting</Typography>
            <Grid container spacing={2} align={'left'}>
              <Grid item xs={12} sm={12}>
                <SettingVariation />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Zona de setting</Typography>
            {/* <CanvasImg /> */}
            <img
              src={settingcalculation2}
              alt={"settingcalculation2"}
              style={{ height: "100%" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Setting v/s Altura de poste</Typography>
            <LineChart />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { SettingCalculation }
