import React from "react";
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

const Search = () => {
  const classes = useStyles();

  const [equipment, setEquipment] = React.useState(1)
  const [campaign, setCampaign] = React.useState(7)
  const [measurement, setMeasurement] = React.useState(7)

  const handleChangeEquipment = event => {
    setEquipment(event.target.value);
  }

  const handleChangeCampaign = event => {
    setCampaign(event.target.value);
  }

  const handleChangeMeasurement = event => {
    setMeasurement(event.target.value);
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
                <MenuItem value={1}>Equipo 1</MenuItem>
                <MenuItem value={2}>Equipo 2</MenuItem>
                <MenuItem value={3}>Equipo 3</MenuItem>
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
                <MenuItem value={7}>Julio - 2019</MenuItem>
                <MenuItem value={6}>Junio - 2019</MenuItem>
                <MenuItem value={5}>Mayo - 2019</MenuItem>
                <MenuItem value={4}>Abril - 2019</MenuItem>
                <MenuItem value={3}>Marzo - 2019</MenuItem>
                <MenuItem value={2}>Febrero - 2019</MenuItem>
                <MenuItem value={1}>Enero - 2019</MenuItem>
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
                <MenuItem value={7}>Julio - 2019</MenuItem>
                <MenuItem value={6}>Junio - 2019</MenuItem>
                <MenuItem value={5}>Mayo - 2019</MenuItem>
                <MenuItem value={4}>Abril - 2019</MenuItem>
                <MenuItem value={3}>Marzo - 2019</MenuItem>
                <MenuItem value={2}>Febrero - 2019</MenuItem>
                <MenuItem value={1}>Enero - 2019</MenuItem>
              </Select>
            </Tooltip>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { Search };
