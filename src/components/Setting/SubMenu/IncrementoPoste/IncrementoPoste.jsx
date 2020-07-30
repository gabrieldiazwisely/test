import React from 'react'
import { Information,Equipment } from '../../../Common'
import { Grid, Typography, Paper } from '@material-ui/core'
import { useStyles } from '../../style'

import incrementoposte0 from '../../../../assets/img/fake/incrementoposte0.png'
import incrementoposte1 from '../../../../assets/img/fake/incrementoposte1.png'
import incrementoposte2 from '../../../../assets/img/fake/incrementoposte2.png'

const SUBMENU = [
  {id: 1, title: 'Resumen', path: '/setting'}, 
  {id: 2, title: 'Calculo de setting', path: '/setting/setting-calculation'}, 
  {id: 3, title: 'Incremento poste', path: '/setting/incremento-poste'},
]

const IncrementoPoste = props => {
  const classes = useStyles()
  return(
    <React.Fragment>
      <Grid container className={classes.root} direction="row" justify="center" spacing={2}>
        <Grid item xs={12}>
          <Equipment  submenu={SUBMENU}/>
        </Grid>
        <Grid item xs={10} mt={12}>
          <Paper elevation={3}  className={classes.imgCenter}>
            <Typography  variant="h3" >Recomendación incremento de poste</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} mt={12}>
                <img src={incrementoposte0} alt={'incrementoposte0'} style={{width: '100%'}}/>
              </Grid>
              <Grid item xs={6} mt={12} className={classes.CSinformation}>
                <Information title={'Antecedentes del equipo'} icon={'i'} items={['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ', 'Tempor incididunt ut labore et dolore magna aliqua. ', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']}/>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={10} mt={12}>
          <Paper elevation={3}  className={classes.imgCenter}>
            <Typography  variant="h3" >Recomendación de altura del poste del manto</Typography>
            <img src={incrementoposte1} alt={'incrementoposte1'} style={{width: '90%'}}/>
          </Paper>
        </Grid>
        <Grid item xs={4} mt={12}>
          <Paper elevation={3}  className={classes.imgCenter}>
            <img src={incrementoposte2} alt={'incrementoposte2'} style={{width: '100%'}} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { IncrementoPoste }