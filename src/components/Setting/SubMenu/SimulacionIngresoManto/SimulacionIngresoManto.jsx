import React from 'react'
import { Equipment } from '../../../Common'
import {Grid } from '@material-ui/core'
import { useStyles } from '../../style'

const SUBMENU = [
  {id: 1, title: 'Resumen', path: '/setting'}, 
  {id: 2, title: 'Calculo de setting', path: '/setting/setting-calculation'}, 
  {id: 3, title: 'Incremento poste', path: '/setting/incremento-poste'},
  {id: 4, title: 'Simulación ingreso manto', path: '/setting/simulacion-ingreso-manto'}
]

const SimulacionIngresoManto = props => {
  const classes = useStyles()
  return(
    <React.Fragment>
      <Grid container className={classes.root} direction="row" justify="center" spacing={2}>
        <Grid item xs={12}>
          <Equipment  submenu={SUBMENU}/>
        </Grid>
        <Grid item xs={12}>
            SimulacionIngresoManto
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { SimulacionIngresoManto }