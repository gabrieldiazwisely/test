import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { machinesActions } from '../../../redux/actions'

import {
  Grid,
  FormControl,
  Typography,
  Select,
  MenuItem,
  Hidden,
  Tooltip
} from "@material-ui/core";
import { useStyles } from "./style"

import { withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'


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

const Search = props => {

  const dispatch = useDispatch()
  
  const machines = useSelector(state => {
    return state.machines.data
  })

  const selectedMachine = useSelector(state => {
    return state.selectedMachine.data
  })

  const [equipment, setEquipment] = useState(4)
  const [campaign, setCampaign] = useState(3)
  const [measurement, setMeasurement] = useState(2)

  const [flag, setFlag] = useState(true) 
  const [flagSelected, setFlagSelected] = useState(true) 

  useEffect(() => {
    if ( flag || machines.length === 0 ) {
      dispatch(machinesActions.getAll())
      setFlag(false)
    }

    if ( flagSelected || selectedMachine.length === 0 ) {
      dispatch(machinesActions.getSelectedMachine(equipment))
      setFlagSelected(false)
    }
  }, [selectedMachine])

  const classes = useStyles();

  const handleChangeEquipment = event => {
    setEquipment(event.target.value)
    setCampaign(3)

    dispatch(machinesActions.getSelectedMachine(event.target.value))
    renderCampaigns()
    renderMeasurements()
  }

  const handleChangeCampaign = event => {
    setCampaign(event.target.value);
  }

  const handleChangeMeasurement = event => {
    setMeasurement(event.target.value);
  }

  const renderEquipments = () => {
    if ( machines ) {
      return machines.map((value, index) => {
        return <MenuItem value={index}>{value.name}</MenuItem>
      })
    }
  }

  const renderCampaigns = () => {
    if (  typeof selectedMachine != 'undefined' &&  selectedMachine.campaigns.length > 0 ) {
      return selectedMachine.campaigns.map((value, index) => {
        return <MenuItem value={index}>{value.name}</MenuItem>
      })
    }
  }

  const renderMeasurements = () => {
    if ( typeof selectedMachine != 'undefined' && selectedMachine.campaigns[campaign].measurements.length > 0 ) {
      return selectedMachine.campaigns[campaign].measurements.map((value, index) => {
        return <MenuItem value={index}>{value.name}</MenuItem>
      })
    }
  }


  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={0} direction="row" justify="left" alignItems="center">
        <Grid item xs={4} sm={3}>
          <FormControl fullWidth variant="outlined" className={classes.formControl} >
            <Tooltip title="Equipo" arrow> 
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={equipment}
                onChange={handleChangeEquipment}
                input={<BootstrapInput />}
                inputProps={{
                  classes: {
                      icon: classes.icon,
                  },
                }}
              >
                { renderEquipments() }
              </Select>
            </Tooltip>
          </FormControl>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} sm={1} className={classes.label}>
            <Typography variant="h6">Campaña:</Typography>
          </Grid>
        </Hidden>
        <Grid item xs={4} sm={3}>
          <FormControl fullWidth variant="outlined" className={classes.formControl}>
            <Tooltip title="Campaña" arrow> 
              <Select
                disabled = {props.searchDisabled}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={campaign}
                onChange={handleChangeCampaign}
                input={<BootstrapInput />}
                inputProps={{
                  classes: {
                      icon: classes.icon,
                  },
                }}
              >
                {renderCampaigns()} 
              </Select>
            </Tooltip>
          </FormControl>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} sm={1} className={classes.label} >
            <Typography variant="h6">Medición:</Typography>
          </Grid>
        </Hidden>
        <Grid item xs={4} sm={3}>
          <FormControl fullWidth variant="outlined" className={classes.formControl}>
            <Tooltip title="Medición" arrow>
              <Select
                disabled = {props.searchDisabled}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={measurement}
                onChange={handleChangeMeasurement}
                input={<BootstrapInput />}
                inputProps={{
                  classes: {
                      icon: classes.icon,
                  },
                }}
              >
                {renderMeasurements()}
              </Select>
            </Tooltip>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { Search };
