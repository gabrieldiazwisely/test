import React, { useEffect, useState } from "react"
import { Information } from "../../../Common"
import { PostIncreaseRecommendation } from '../../../Common/Calculators/PostIncreaseRecommendation'
import LineChartSettingPoleIncrement from '../../charts/LineChartSettingPoleIncrement'
import { useSelector} from "react-redux"

import { 
  Grid, 
  Typography, 
  Paper, 
  Box,
  FormControl,
  Select,
  MenuItem,
  InputBase } from "@material-ui/core"

import { withStyles } from '@material-ui/core/styles';
import { useStyles } from "../../style"

import Table from "./Table";

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },

  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: theme.spacing(1, 3, 1, 2),
    '&:focus': {
      background: '#efeded'
    }
    
  },
}))(InputBase);

const IncrementoPoste = props => {

  const classes = useStyles()

  //settingPoleIncrement api data
  const [settingPoleIncrementData, setSettingPoleIncrementData] = useState({})

  const settingsPoleIncrement = useSelector(state => {
    return state.settingsPoleIncrement.data
  })
  useEffect(() => {
    setSettingPoleIncrementData(settingsPoleIncrement)
  }, [settingsPoleIncrement])

  const [simulation, setSimulation] = React.useState(1);

  const handleChangeSimulation = event => {
    setSimulation(event.target.value);
  }

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
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Box p={2}>
              <Box  className={classes.boxRight}>
                <FormControl variant="outlined" className={classes.formControl} >
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={simulation}
                    onChange={handleChangeSimulation}
                    input={<BootstrapInput />}
                    inputProps={{
                      classes: {
                          icon: classes.icon
                      },
                    }}
                  >
                    <MenuItem value={1}>Simulación 1</MenuItem>
                    <MenuItem value={2}>Simulación 2</MenuItem>
                    <MenuItem value={3}>Simulación 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Table />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { IncrementoPoste }
