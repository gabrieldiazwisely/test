import React from "react"
import { Grid } from "@material-ui/core"
import { useStyles } from "../../style"

const SimulacionIngresoManto = props => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid
        container
        className={classes.root}
        direction="row"
        justify="center"
        spacing={2}
      >
        <Grid item xs={12}>
          SimulacionIngresoManto
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { SimulacionIngresoManto }
