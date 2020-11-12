import React from "react"
import { Information } from "../../../Common"
import { SettingVariation } from "../../../Common/Calculators/SettingVariation"
import { Grid, Typography, Paper, Box } from "@material-ui/core"
import { useStyles } from "../../style"

import { LineChart } from "../../charts/LineChart"

import { CanvasImg } from '../../../Common/Canvas/CanvasImg'

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
        <Grid item xs={12} sm={5}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Box p={2}>
              <Typography variant="h3" className={classes.defaultTitle} >Zona de setting</Typography>
              {/* <CanvasImg /> */}
              <img
                src={settingcalculation2}
                alt={"settingcalculation2"}
                style={{ height: "100%" }}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Box p={2}>
              <Typography variant="h3" className={classes.defaultTitle} >Setting v/s Altura de poste</Typography>
              <LineChart />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { SettingCalculation }
