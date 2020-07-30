import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import { useStyles } from './style'
import {Information, Equipment} from '../Common/'

import setting1 from '../../assets/img/fake/setting1.png'
import setting2 from '../../assets/img/fake/setting2.png'

const SUBMENU = [
  {id: 1, title: 'Resumen', path: '/setting'}, 
  {id: 2, title: 'Calculo de setting', path: '/setting/setting-calculation'}, 
  {id: 3, title: 'Incremento poste', path: '/setting/incremento-poste'},
]

const Setting = props => {
  const classes = useStyles()
  return(
    <React.Fragment>
      <Grid container className={classes.root} direction="row" justify="center" spacing={2}>
        <Grid item xs={12}>
          <Equipment  submenu={SUBMENU}/>
        </Grid>
        <Grid item xs={9}>
          <Information icon={'i'} items={['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ', 'Tempor incididunt ut labore et dolore magna aliqua. ', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']}/>
        </Grid>
        <Grid item xs={5} mt={2}>
          <Paper elevation={3}  className={classes.imgCenter}>
            <img src={setting1} alt={'setting1'} style={{width: '70%'}}/>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper elevation={3}  className={classes.imgCenter}>
            <img src={setting2} alt={'setting2'} style={{width: '70%'}} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { Setting }
