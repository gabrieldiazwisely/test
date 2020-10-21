import React, { useState } from "react"
import { Grid, Typography, Paper, Button, TextField, Link,FormControl,
  Select,
  MenuItem,
  InputBase } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from "./style"
import clsx from "clsx";
import {  useDispatch} from "react-redux";
import { dashboardActions } from '../../../redux/actions'



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

const MtoHeightRecommendation = props => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [setting, setSetting] = useState(1)
  const [tonelaje, setTonelaje] = useState("")

  const [date, setDate] = React.useState(1);
  const [tpd, setTpd] = React.useState("");

  const handleChangeDate = event => {
    setDate(event.target.value);
  }

  const handleChangeTonelaje = event => {
    setTonelaje(event.target.value);
  }

  const handleChangeSetting = event => {
    debugger
    setSetting(event.target.value);
  }

  const handleChangeTpd = event => {
    setTpd(event.target.value);
  }

  const clickUpdate = () => {
    dispatch(dashboardActions.mtoHeightRecommendation())
  }


  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.root}>
        <Grid container  spacing={2}>
            <Grid item xs={12} sm={2} className={classes.InputContent}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                title="Setting"
                value={setting}
                onChange={handleChangeSetting}
                input={<BootstrapInput />}
                inputProps={{
                  classes: {
                      icon: classes.iconRecommendation,
                      marginTop: '5px'
                  },
                }}
                style={{width: '100%', paddingTop: '8px'}}
              >
                <MenuItem value={1}>Setting 1</MenuItem>
                <MenuItem  value={2}>Setting 2</MenuItem>
                <MenuItem  value={3}>Setting 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={2} className={classes.InputContent}>
              <Select
                labelId="demo-simple-select-label"
                title="Fecha"
                id="demo-simple-select"
                value={date}
                onChange={handleChangeDate}
                input={<BootstrapInput />}
                inputProps={{
                  classes: {
                      icon: classes.iconRecommendation,
                  },
                }}
                style={{width: '100%', paddingTop: '8px'}}
              >
                <MenuItem value={1}>01-10-2020</MenuItem>
                <MenuItem value={2}>02-10-2020</MenuItem>
                <MenuItem value={3}>03-10-2020</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={2} className={classes.InputContent}>
              <TextField
                placeholder="Tonelaje"
                fullWidth
                margin="normal"
                className={classes.InputText}
                InputProps={{
                  className: classes.input,
                }} 
              />
            </Grid>
            <Grid item xs={12} sm={2} className={classes.InputContent}>
              <TextField
                placeholder="TPD"
                fullWidth
                margin="normal"
                className={classes.InputText}
                InputProps={{
                  className: classes.input,
                }} 
              />
            </Grid>
            <Grid item xs={12} sm={4} align={'right'}>
              <Button onClick={clickUpdate} variant="contained" size="medium" color="primary"  className={clsx(classes.Button, classes.MarginTopCero)}>
                Actualizar
              </Button>
            </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

MtoHeightRecommendation.propTypes = {
  
}

export  {MtoHeightRecommendation} 
