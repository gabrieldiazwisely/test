import React from "react"
import { Information } from "../../../Common"
import { Grid, Typography, Paper } from "@material-ui/core"
import { useStyles } from "../../style"

import Table from './Table'
import TableManto from './TableManto'

import perfildesgaste0 from "../../../../assets/img/fake/perfildesgaste0.png"
import perfildesgaste1 from "../../../../assets/img/fake/perfildesgaste1.png"
import perfildesgaste2 from "../../../../assets/img/fake/perfildesgaste2.png"


const PerfilDesgaste = props => {
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
        <Grid item xs={10}>
          <Information
            title={"Antecedentes del equipo"}
            icon={"i"}
          />
        </Grid>
        {/* <Grid item xs={12} sm={12} style={{ textAlign: "right" }}>
          <img
            src={perfildesgaste0}
            alt={"perfildesgaste0"}
            style={{ height: "100%" }}
          />
        </Grid> */}
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3" className={classes.defaultTitle} >Espesores de cóncavas</Typography>
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3" className={classes.defaultTitle} >Espesores de manto 112,5”</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <img
                  src={perfildesgaste2}
                  alt={"perfildesgaste2"}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { PerfilDesgaste }
