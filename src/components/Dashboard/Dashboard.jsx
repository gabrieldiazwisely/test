import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { useStyles } from "./style";
import { Information } from "../Common/";
// import Bar from "./charts/Historico" 
import { BarChart } from "./charts/BarChart"

import dashboard1 from "../../assets/img/fake/dashboard1.png";
import dashboard2 from "../../assets/img/fake/dashboard2.png";
import dashboard3 from "../../assets/img/fake/dashboard3.png";
import { connect, useDispatch } from "react-redux";
import { machineActions } from '../../redux/actions'
import _ from 'lodash'

const Dashboard = props => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [ machineBackground, setMachineBackground ] = useState({})
  const { data } = props.machine
  if ( !_.isEqual( machineBackground, data ) ) {
    setMachineBackground( data )
  }

  useEffect( () => {
    getMachineBackground()
  }, [machineBackground] )

  const getMachineBackground = () => {
    //TODO: pending get machine data to send to getMachineBackground api.
    const body = { 
      'machine': '*machine*',
      'campaign': '*campaign*',
      'measurement': '*measurement*'
    }
    dispatch( machineActions.getMachineBackground(body) )
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
            machineBackground={ machineBackground }
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

const mapStateToProps = state => {
  const { machine } = state
  return { machine }
}

const connected = connect( mapStateToProps )( Dashboard )
export { connected as Dashboard }