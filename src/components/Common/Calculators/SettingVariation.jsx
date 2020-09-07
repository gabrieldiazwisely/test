import React from "react"
import { Grid, Typography, Paper, Button, TextField, Link } from "@material-ui/core"
import { useStyles } from "./style"
import clsx from "clsx";

const SettingVariation = props => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.root}>
        <Grid container  spacing={2}>
            <Grid item xs={12} sm={12}>
              <Link className={clsx(classes.Link, classes.active)}>OSS</Link>
              <Link className={clsx(classes.Link)}>CSS</Link>
            </Grid>
            <Grid item xs={12} sm={6} >
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
                  />
                </Grid>
                <Grid item xs={12} sm={4} align={'center'}>
                  <Button variant="contained" size="medium" color="primary"  className={classes.Button}>
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
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
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
                  />
                </Grid>
                <Grid item xs={12} sm={4}  align={'center'}>
                  <Button variant="contained" size="medium" color="primary" className={classes.Button}>
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
