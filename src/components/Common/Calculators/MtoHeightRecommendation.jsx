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

  const [linkDate, setLinkDate] = React.useState(classes.active);
  const [linkTpd, setLinkTpd] = React.useState("");

  const [metrica, setMetrica] = React.useState('d');

  const clickActiveDate = () => {
    setLinkDate(classes.active);
    setLinkTpd("");
    setMetrica('d')
  }

  const clickActiveTonelaje = () => {
    setLinkDate("");
    setLinkTpd(classes.active);
    setMetrica('t')
  }

  const handleChangeSetting = event => {
    setSetting(event.target.value);
  }

  const clickUpdate = () => {
    dispatch(dashboardActions.mtoHeightRecommendation(metrica))
  }


  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.root}>
        <Grid container  spacing={2}>
            <Grid item xs={12} sm={12} className={classes.InputContent}>
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
            <Grid item xs={12} sm={12} className={classes.SelectContent}>
              <Link className={clsx(classes.Link, classes.LinkSelectRight, linkDate)} onClick={clickActiveDate}>Fecha</Link>
              <Link className={clsx(classes.Link, classes.LinkSelectLeft, linkTpd)} onClick={clickActiveTonelaje}>Tonelaje</Link>
            </Grid>
            <Grid item xs={12} sm={12} className={classes.InputContent}>
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
            <Grid item xs={12} sm={12} style={{display: 'flex'}}>
              <Button onClick={clickUpdate} variant="contained" size="medium" color="primary"  className={clsx(classes.Button, classes.MarginTopCero)} style={{width: '100%'}}>
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
