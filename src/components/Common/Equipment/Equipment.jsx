import React from 'react'
import {Grid} from '@material-ui/core'
import { useStyles } from './style'
import { Search, SubMenu } from '../'

const Equipment = props => {
  const classes = useStyles()
  // const {items } = props
  return(
    <React.Fragment>
      <Grid container className={classes.root} xs={12}>
        <Grid item xs={12} sm={4}>
          <Search />
        </Grid>
        <Grid item xs={12} sm={8} style={{paddingRight: 0}}>
          <SubMenu items={[{id: 1, title: 'Resumen', path: '/resumen'}, {id: 1, title: 'Deformaciones', path: '/deformaciones'}, {id: 1, title: 'Angulo Camara', path: '/angulo_camara'}]}/>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export {Equipment}