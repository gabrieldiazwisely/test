import React from "react"
import { Grid, Typography, Paper, Box, TextField } from "@material-ui/core"
import { useStyles } from "./style"
import clsx from "clsx";

const ExitCondition = props => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.root}>
        <Grid container  spacing={2}>
            <Grid item xs={12} sm={12} >
              <Grid container  spacing={2} >
                <Grid item xs={12} sm={4} className={classes.InputContent}>
                  <Typography className={classes.InputLabel}>Dias operacion:</Typography>
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
                <Grid item xs={12} sm={4}>
                  <Typography className={classes.InputLabel}>Fecha:</Typography>
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
                <Grid item xs={12} sm={4}>
                  <Typography className={classes.InputLabel}>Tonelaje por cada:</Typography>
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

ExitCondition.propTypes = {
  
}

export { ExitCondition }
