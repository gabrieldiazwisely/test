import React from "react"
import { Grid, Typography, Paper, Button, TextField, Link, useMediaQuery } from "@material-ui/core"
import { useStyles } from "./style"
import clsx from "clsx";

const SettingVariation = props => {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:1380px)')

  const [linkOSS, setLinkOSS] = React.useState(classes.active);
  const [linkCSS, setLinkCSS] = React.useState("");

  const[valueAP, setValueAP] = React.useState('')
  const[valueAPS, setValueAPS] = React.useState('')
  const[valuePH, setValuePH] = React.useState('')
  const[valuePHS, setValuePHS] = React.useState('')


  const changeAP = event => {
    setValueAP(event.target.value)
  }

  const changeAPS = event => {
    setValueAPS(event.target.value)
  }

  const changePH = event => {
    setValuePH(event.target.value)
  }

  const changePHS = event => {
    setValuePHS(event.target.value)
  }

  const clickActiveOSS = () => {
    setLinkOSS(classes.active)
    setLinkCSS("")
  }

  const clickActiveCSS = () => {
    setLinkOSS("");
    setLinkCSS(classes.active);
  }

  const clickCalcularAP = (event) => {
    if(valueAP === '') {
      setValueAP(valueAPS * 4)
    } else {
      setValueAPS(valueAP * 2)
    }
  }

  const clickCalcularPH = () => {
    if(valuePH === '') {
      setValuePH(valuePHS * 5)
    } else {
      setValuePHS(valuePH * 3)
    }
  }

  

  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.root}>
        <Grid container  spacing={2}>
            <Grid item xs={12} sm={12}>
              <Link className={clsx(classes.Link, linkOSS)} onClick={clickActiveOSS} >OSS</Link>
              <Link className={clsx(classes.Link, linkCSS)} onClick={clickActiveCSS} >CSS</Link>
            </Grid>
            <Grid item xs={12} sm={(matches)? 6 : 12 } className={classes.separationCalculatorHorizontal} >
              <Grid container  spacing={2}  className={classes.separationCalculatorLeft}>
                <Grid item xs={12} sm={4} className={classes.InputContent}>
                  <Typography className={classes.InputLabel}>Altura de poste:</Typography>
                  <TextField
                    placeholder=""
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                    value={valueAP}
                    onChange={changeAP}
                  />
                </Grid>
                <Grid item xs={12} sm={4} align={'center'}>
                  <Button variant="contained" size="medium" color="primary"  className={classes.Button} onClick={clickCalcularAP}>
                    Calcular
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography className={classes.InputLabel}>Setting:</Typography>
                  <TextField
                    placeholder=""
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                    value={valueAPS}
                    onChange={changeAPS}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={(matches)? 6 : 12 }  >
              <Grid container  spacing={2} className={classes.separationCalculatorRight}>
                <Grid item xs={12} sm={4}>
                  <Typography className={classes.InputLabel}>Setting:</Typography>
                  <TextField
                    placeholder=""
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                    value={valuePHS}
                    onChange={changePHS}
                  />
                </Grid>
                <Grid item xs={12} sm={4}  align={'center'}>
                  <Button variant="contained" size="medium" color="primary" className={classes.Button} onClick={clickCalcularPH}>
                    Calcular
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography className={classes.InputLabel}>Pole height:</Typography>
                  <TextField
                    placeholder=""
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                    value={valuePH}
                    onChange={changePH}
                  />
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

SettingVariation.propTypes = {
  
}

export { SettingVariation }
