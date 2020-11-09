import React from "react"
import { Grid, Typography, Paper } from "@material-ui/core"
import { useStyles } from "./style"

import Table from './Table'
import TableManto from './TableManto'

import { ExitCondition } from '../../Common/Calculators/ExitCondition'

import perfildesgaste1 from "../../../assets/img/fake/perfildesgaste1.png"
import perfildesgaste2 from "../../../assets/img/fake/perfildesgaste2.png"


const CondicionSalidaModal = props => {
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
          <Typography variant="h3">Condicion de salida</Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={10} >
              <ExitCondition />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h4" className={classes.subTitle}>Espesores de cóncavas</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <img
                  src={perfildesgaste1}
                  alt={"perfildesgaste1"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <Table />
              </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
            <Typography variant="h4" className={classes.subTitle} >Espesores de manto 112,5”</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <img
                  src={perfildesgaste2}
                  alt={"perfildesgaste2"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <TableManto />
              </Grid>
            </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { CondicionSalidaModal }
