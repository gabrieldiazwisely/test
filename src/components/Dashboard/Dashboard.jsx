import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper, Hidden, useMediaQuery, Box } from "@material-ui/core";

import { useStyles } from "./style";
import { Information } from "../Common/";
import { MtoHeightRecommendation } from "../Common/Calculators/";
import { BarChart } from "./charts/BarChart"
import { LineChart } from './charts/LineChart'
import ProyeccionesChartCCV from './charts/ProyeccionesChartCCV'
import ProyeccionesChartManto from './charts/ProyeccionesChartManto'
import ProyeccionesChartSetting from './charts/ProyeccionesChartSetting'
import ProyeccionesChart from './charts/ProyeccionesChart'
import clsx from "clsx";
import { connect, useDispatch, useSelector } from "react-redux";
import { machineActions, dashboardActions, settingActions } from '../../redux/actions'



import _ from 'lodash'


const Dashboard = props => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const [flag, setFlag] = React.useState(true)

  const matches = useMediaQuery('(min-width:1760px)');
  const matches2 = useMediaQuery('(min-width:960px)');


  const dashboardCharts = useSelector(state => {
    return state.dashboard
  })

  useEffect(() => {
    if(flag || !dashboardCharts) {
      dispatch(dashboardActions.mtoHeightRecommendation('d'))
      dispatch(settingActions.canvas())
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
          <Hidden smDown>
            <Grid item xs={12} sm={(matches)? 10 : 9 }>
              <LineChart data = { dashboardCharts.mto_height_recommendation } />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={(matches)? 2 : (matches2)? 3 : 12 }>
            <Grid container>
              <Hidden xsDown>
                <Grid item xs={12} sm={12}>
                  <MtoHeightRecommendation />
                </Grid>
              </Hidden>
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
            <Box p={2}> 
              <Typography variant="h3" className={classes.defaultTitle}>Proyecciones</Typography>
              <Hidden mdDown>
                <Grid container>
                  <Grid item xs={11} style={{height: '450px'}}>
                    <ProyeccionesChart />

                  </Grid>
                  <Grid item xs={1}>
                    <Paper className={clsx(classes.paperDesk, classes.paperDesk1)}>
                      <Typography variant="h6" className={classes.paperDeskDate} >15-09-2020</Typography>
                      <Typography variant="h5" className={classes.paperDeskMton} >14.98 Mton</Typography>
                    </Paper>
                    <Paper className={clsx(classes.paperDesk, classes.paperDesk2)} >
                      <Typography variant="h6" className={classes.paperDeskDate} >15-09-2020</Typography>
                      <Typography variant="h5" className={classes.paperDeskMton} >14.98 Mton</Typography>
                    </Paper>
                    <Paper className={clsx(classes.paperDesk, classes.paperDesk3)} >
                      <Typography variant="h6" className={classes.paperDeskDate} >15-09-2020</Typography>
                      <Typography variant="h5" className={classes.paperDeskMton} >14.98 Mton</Typography>
                    </Paper>
                  </Grid>
                </Grid>
                
              </Hidden>
              <Hidden lgUp>
                <Grid container direction="row" justify="center" spacing={2}>
                  <Grid item>
                    <Paper className={classes.paper}  >
                      <Typography variant="h6">Desgaste ccv</Typography>
                      <Typography variant="h6">15-09-2020</Typography>
                      <Typography variant="h5" style={{fontWeight: 'bold'}}>14.98 Mton</Typography>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper}  >
                      <Typography variant="h6">Desgaste de manto</Typography>
                      <Typography variant="h6">15-09-2020</Typography>
                      <Typography variant="h5" style={{fontWeight: 'bold'}}>14.98 Mton</Typography>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper}  >
                      <Typography variant="h6">Perdida de setting</Typography>
                      <Typography variant="h6">15-09-2020</Typography>
                      <Typography variant="h5" style={{fontWeight: 'bold'}}>14.98 Mton</Typography>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paperBlue}  >
                      <Typography variant="h6">Manto Actual</Typography>
                      <Typography variant="h5" style={{fontWeight: 'bold'}}>117"</Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Hidden>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={10}>
        <Paper elevation={3} className={classes.imgCenter}>
          <Box p={2}> 
            <Typography variant="h3" className={classes.defaultTitle}>Recomendación altura de manto</Typography>
            { renderMtoHeightRecommendation() }      
          </Box>
        </Paper>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} sm={10}>
            <Paper elevation={3} className={classes.imgCenter}>
              <Box p={2}> 
                <Typography variant="h3" className={classes.defaultTitle}>
                  Resumen histórico de procesamiento por campaña
                </Typography>
                <BarChart />
                {/* <img src={dashboard3} alt={"Dashboard3"} style={{ width: "70%" }} /> */}
              </Box>
            </Paper>
          </Grid>
        </Hidden>
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