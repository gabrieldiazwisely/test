import React, { useState } from 'react'
import { 
  Grid, 
  Paper, 
  Box,
  FormControl,
  Select,
  MenuItem,
  InputBase
} from "@material-ui/core"
import Table from "./Table"
import { useStyles } from "../../style"
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

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


const PoleIncrementSimulationTable = ({ settingPoleIncrementData }) => {

  const { curves }  = settingPoleIncrementData
  const curve = curves[0]
  const curveName = Object.keys(curve)[0]

  const classes = useStyles()
  const [simulation, setSimulation] = useState( curveName );

  const handleChangeSimulation = event => {
    setSimulation(event.target.value);
  }

  return  (
    <Grid item xs={12} sm={6}>
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
                <MenuItem value={ curveName }>{ curveName }</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Table 
            frecuencyDays={ [1, 2, 3, 4, 5] }
            x={ curve[curveName].x }
            y={ curve[curveName].y }/>
        </Box>
      </Paper>
    </Grid>
  )
}

PoleIncrementSimulationTable.propTypes = {
  settingPoleIncrementData: PropTypes.object.isRequired
}

export default PoleIncrementSimulationTable