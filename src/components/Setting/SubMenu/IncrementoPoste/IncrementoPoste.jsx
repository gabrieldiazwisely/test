import React, { useEffect, useState } from "react"
import { Information } from "../../../Common"
import { PostIncreaseRecommendation } from '../../../Common/Calculators/PostIncreaseRecommendation'
import LineChartSettingPoleIncrement from '../../charts/LineChartSettingPoleIncrement'
import PoleIncrementSimulationTable from './PoleIncrementSimulationTable'
import { useSelector} from "react-redux"

import { 
  Grid, 
  Typography, 
  Paper, 
  Box } from "@material-ui/core"

import { useStyles } from "../../style"

const IncrementoPoste = () => {

  const classes = useStyles()

  //settingPoleIncrement api data
  const [settingPoleIncrementData, setSettingPoleIncrementData] = useState({})

  const settingsPoleIncrement = useSelector(state => {
    return state.settingsPoleIncrement.data
  })
  useEffect(() => {
    setSettingPoleIncrementData(settingsPoleIncrement)
  }, [settingsPoleIncrement])

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
        <Grid item xs={12} sm={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Box p={2}>
              <Typography variant="h3" className={classes.defaultTitle} >
                Recomendación incremento de poste
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <PostIncreaseRecommendation />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Box p={2}>
              <Typography variant="h3" className={classes.defaultTitle} >
                Recomendación de altura del poste del manto
              </Typography>
              <Grid item xs={12}>
                <LineChartSettingPoleIncrement 
                  settingPoleIncrementData={ settingPoleIncrementData }/>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        {settingPoleIncrementData && 
          Object.keys(settingPoleIncrementData).length > 0 
          && (
          <PoleIncrementSimulationTable
            settingPoleIncrementData={ settingPoleIncrementData } />
        )}
      </Grid>
    </React.Fragment>
  )
}

export { IncrementoPoste }
