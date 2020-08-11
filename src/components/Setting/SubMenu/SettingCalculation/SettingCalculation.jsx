import React from "react"
import { Information } from "../../../Common"
import { SettingVariation } from "../../../Common/Calculators/SettingVariation"
import { Grid, Typography, Paper } from "@material-ui/core"
import { useStyles } from "../../style"

import { LineChart } from "../../charts/LineChart"

import settingcalculation1 from "../../../../assets/img/fake/settingcalculation1.png"
import settingcalculation2 from "../../../../assets/img/fake/settingcalculation2.png"
import settingcalculation3 from "../../../../assets/img/fake/settingcalculation3.png"

const SettingCalculation = props => {
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
        <Grid item xs={12} sm={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Variación del Setting</Typography>
            <Grid container spacing={2} align={'left'}>
              <Grid item xs={12} sm={6}>
                <SettingVariation />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.CSinformation}>
                <Information
                  title={"Antecedentes del equipo"}
                  icon={"i"}
                  items={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
                    "Tempor incididunt ut labore et dolore magna aliqua. ",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  ]}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Zona de setting</Typography>
            <img
              src={settingcalculation2}
              alt={"settingcalculation2"}
              style={{ width: "90%" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Setting v/s Altura de poste</Typography>
            <LineChart />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { SettingCalculation }
