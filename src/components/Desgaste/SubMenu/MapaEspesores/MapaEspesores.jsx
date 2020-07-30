import React from 'react'
import { Equipment } from '../../../Common'
import { Grid, Typography, Paper } from '@material-ui/core'
import { useStyles } from '../../style'

import mapaespesores1 from '../../../../assets/img/fake/mapaespesores1.png'

const SUBMENU = [
  {id: 1, title: 'Resumen', path: '/wear'}, 
  {id: 2, title: 'Perfil de desgaste', path: '/wear/perfil-desgaste'}, 
  {id: 3, title: 'Mapa de espesores', path: '/wear/mapa-espesores'}
]

const MapaEspesores = props => {
  const classes = useStyles()
  return(
    <React.Fragment>
      <Grid container className={classes.root} direction="row" justify="center" spacing={2}>
        <Grid item xs={12}>
          <Equipment  submenu={SUBMENU}/>
        </Grid>
        <Grid item xs={10} mt={2}>
          <Paper elevation={3}  className={classes.imgCenter}>
            <Typography  variant="h3" >Mapa de espesores remanentes</Typography>
            <img src={mapaespesores1} alt={'mapaespesores1'} style={{width: '70%'}}/>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { MapaEspesores }