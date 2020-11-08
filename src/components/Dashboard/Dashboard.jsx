import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

import { useStyles } from "./style";
import { Information } from "../Common/";
import { MtoHeightRecommendation } from "../Common/Calculators/";
import { BarChart } from "./charts/BarChart"
import { LineChart } from './charts/LineChart'

import { connect, useDispatch, useSelector } from "react-redux";
import { machineActions, dashboardActions } from '../../redux/actions'



import _ from 'lodash'


import dashboard1 from "../../assets/img/fake/dashboard1.png";

const Dashboard = props => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const [flag, setFlag] = React.useState(true)

  const dashboardCharts = useSelector(state => {
    return state.dashboard
  })

  useEffect(() => {
    if(flag || !dashboardCharts) {
      dispatch(dashboardActions.mtoHeightRecommendation())
      setFlag(false)
    }
  }, [dashboardCharts])


  const [ machineBackground, setMachineBackground ] = useState({})
  const { data } = props.machine
  if ( !_.isEqual( machineBackground, data ) ) {
    setMachineBackground( data )
  }

  

  const getMachineBackground = () => {
    //TODO: pending get machine data to send to getMachineBackground api.
    const body = { 
      'machine': '*machine*',
      'campaign': '*campaign*',
      'measurement': '*measurement*'
    }
    dispatch( machineActions.getMachineBackground(body) )
  }

  const renderMtoHeightRecommendation = () => {
    if(dashboardCharts) {

      return (
        <Grid container>
          <Grid item xs={12} sm={10}>
            <LineChart data = { dashboardCharts.mto_height_recommendation } />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <MtoHeightRecommendation />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Paper elevation={3} className={classes.recomendationInfo}>
                  <Typography variant="button" display="block" gutterBottom>HOY</Typography>
                  <Typography variant="h4" className={classes.recomendationInfoDescription} gutterBottom>{dashboardCharts.mto_height_recommendation.box.date}</Typography>
                  
                  <Typography variant="button" display="block" gutterBottom>Altura de poste recomendada:</Typography>
                  <Typography variant="h4" className={classes.recomendationInfoDescription} gutterBottom>{dashboardCharts.mto_height_recommendation.box.ton} mm</Typography>
                  
                  <Typography variant="button" display="block" gutterBottom>Setting obetivo:</Typography>
                  <Typography variant="h4" className={classes.recomendationInfoDescription} gutterBottom>{dashboardCharts.mto_height_recommendation.box.mtoHeight}"</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )
    }
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
          />
        </Grid>
        <Grid item xs={10} mt={2}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3" className={classes.defaultTitle}>Proyecciones</Typography>
            <img src={dashboard1} alt={"Dashboard1"} style={{ width: "70%" }} />
          </Paper>
        </Grid>
        <Grid item xs={10}>
        <Paper elevation={3} className={classes.imgCenter}>
          <Typography variant="h3" className={classes.defaultTitle}>Recomendación altura de manto</Typography>
          { renderMtoHeightRecommendation() }      
        </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3" className={classes.defaultTitle}>
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