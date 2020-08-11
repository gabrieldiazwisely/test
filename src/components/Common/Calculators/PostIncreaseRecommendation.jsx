import React from "react"
import { Grid, Typography, Paper, Button, TextField, Link } from "@material-ui/core"
import { useStyles } from "./style"
import clsx from "clsx";

const PostIncreaseRecommendation = props => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.root}>
        <Grid container  spacing={2}>
            <Grid item xs={12} sm={4} className={classes.InputContent}>
              <Typography className={classes.InputLabel}>TPD:</Typography>
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
            <Grid item xs={12} sm={4} className={classes.InputContent}>
              <Typography className={classes.InputLabel}>Setting obj.:</Typography>
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
            <Grid item xs={12} sm={4} align={'left'} className={classes.MarginTop}>
              <Link className={clsx(classes.Link, classes.active)}>OSS</Link>
              <Link className={clsx(classes.Link)}>CSS</Link>
            </Grid>
            <Grid item xs={12} sm={12} align={'right'}>
              <Button variant="contained" size="medium" color="primary"  className={clsx(classes.Button, classes.MarginTopCero)}>
                Calcular
              </Button>
            </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

PostIncreaseRecommendation.propTypes = {
  
}

export { PostIncreaseRecommendation }
