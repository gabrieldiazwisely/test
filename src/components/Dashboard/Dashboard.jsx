import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { useStyles } from "./style";
import { Information } from "../Common/";
// import Bar from "./charts/Historico" 
import { BarChart } from "./charts/BarChart"

import dashboard1 from "../../assets/img/fake/dashboard1.png";
import dashboard2 from "../../assets/img/fake/dashboard2.png";
import dashboard3 from "../../assets/img/fake/dashboard3.png";

const Dashboard = props => {
  const classes = useStyles();
  const data = {
    'marca_diseno': 'FLSmith – Fuller Traylor 60”x110” Tc',
    'instalacion_concava': '10-04-2020',
    'instalacion_manto': '03-06-2020',
    'ton_concava': '8.9 Mton',
    'ton_manto': '4.5 Mton',
    'setting_objetivo': '7.5',
    'manto_instalado': '112.5',
    'altura_manto': '50 mm',
    'recorrido': '210 mm'
  }
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
            items={ data }
          />
        </Grid>
        <Grid item xs={10} mt={2}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Proyecciones</Typography>
            <img src={dashboard1} alt={"Dashboard1"} style={{ width: "70%" }} />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">Recomendación altura de manto</Typography>
            <img src={dashboard2} alt={"Dashboard2"} style={{ width: "70%" }} />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">
              Resumen histórico de procesamiento por campaña
            </Typography>
            <BarChart />
            {/* <img src={dashboard3} alt={"Dashboard3"} style={{ width: "70%" }} /> */}
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { Dashboard };
