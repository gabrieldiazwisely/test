import React from "react";
import { Information, Equipment } from "../../../Common";
import { Grid, Typography, Paper } from "@material-ui/core";
import { useStyles } from "../../style";

import settingcalculation1 from "../../../../assets/img/fake/settingcalculation1.png";
import settingcalculation2 from "../../../../assets/img/fake/settingcalculation2.png";
import settingcalculation3 from "../../../../assets/img/fake/settingcalculation3.png";

const SUBMENU = [
  { id: 1, title: "Resumen", path: "/setting" },
  { id: 2, title: "Calculo de setting", path: "/setting/setting-calculation" },
  { id: 3, title: "Incremento poste", path: "/setting/incremento-poste" }
];

const SettingCalculation = props => {
  const classes = useStyles();
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
          <Equipment submenu={SUBMENU} />
        </Grid>
        <Grid item xs={10} mt={12}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Variación del Setting</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} mt={12}>
                <img
                  src={settingcalculation1}
                  alt={"settingcalculation1"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6} mt={12} className={classes.CSinformation}>
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
        <Grid item xs={5} mt={12}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Zona de setting</Typography>
            <img
              src={settingcalculation2}
              alt={"settingcalculation2"}
              style={{ width: "90%" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Setting v/s Altura de poste</Typography>
            <img
              src={settingcalculation3}
              alt={"settingcalculation3"}
              style={{ width: "90%" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { SettingCalculation };
