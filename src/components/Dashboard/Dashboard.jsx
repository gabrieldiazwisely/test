import React from 'react'
import {Grid, Typography, Paper} from '@material-ui/core'
import { useStyles } from './style'
import {Information, Equipment} from '../Common/'

import dashboard1 from '../../assets/img/fake/dashboard1.png'
import dashboard2 from '../../assets/img/fake/dashboard2.png'

const Dashboard = props => {
  const classes = useStyles()
  return(
    <React.Fragment>
      <Grid container className={classes.root} direction="row" justify="center" spacing={2}>
        <Grid item xs={12}>
          <Equipment submenu={false}/>
        </Grid>
        <Grid item xs={9}>
          <Information items={['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ', 'Tempor incididunt ut labore et dolore magna aliqua. ', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']}/>
        </Grid>
        <Grid item xs={10} mt={2}>
          <Paper elevation={3}  className={classes.imgCenter}>
            <Typography  variant="h3" >Proyecciones</Typography>
            <img src={dashboard1} alt={'Dashboard1'} style={{width: '70%'}}/>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper elevation={3}  className={classes.imgCenter}>
            <Typography  variant="h3" >Recomendación altura de manto</Typography>
            <img src={dashboard2} alt={'Dashboard2'} style={{width: '70%'}} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { Dashboard }
