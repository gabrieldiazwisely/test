import React from "react"
import { Information } from "../../../Common"
import { Grid, Typography, Paper } from "@material-ui/core"
import { useStyles } from "../../style"

import perfildesgaste0 from "../../../../assets/img/fake/perfildesgaste0.png"
import perfildesgaste1 from "../../../../assets/img/fake/perfildesgaste1.png"
import perfildesgastetable1 from "../../../../assets/img/fake/perfildesgastetable1.png"
import perfildesgaste2 from "../../../../assets/img/fake/perfildesgaste2.png"
import perfildesgastetable2 from "../../../../assets/img/fake/perfildesgastetable2.png"


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
        <Grid item xs={12} style={{ textAlign: "right" }}>
          <img
            src={perfildesgaste0}
            alt={"perfildesgaste0"}
            style={{ height: "100%" }}
          />
        </Grid>
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Espesores de cóncavas</Typography>
            <Grid container spacing={2}>
              <Grid item xs={3} mt={12}>
                <img
                  src={perfildesgaste1}
                  alt={"perfildesgaste1"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={9} mt={12}>
                <img
                  src={perfildesgastetable1}
                  alt={"perfildesgastetable1"}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Espesores de manto 112,5”</Typography>
            <Grid container spacing={2}>
              <Grid item xs={3} mt={12}>
                <img
                  src={perfildesgaste2}
                  alt={"perfildesgaste2"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={9} mt={12}>
                <img
                  src={perfildesgastetable2}
                  alt={"perfildesgastetable2"}
                  style={{ width: "100%" }}
                />
                <div className={classes.PDinformation}>
                  <Information
                    title={"Antecedentes del equipo"}
                    icon={"i"}
                    items={[
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
                      "Tempor incididunt ut labore et dolore magna aliqua. ",
                      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    ]}
                  />
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { PerfilDesgaste }
