import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Typography} from '@material-ui/core'
import { useStyles } from './style'
import InfoIcon from '@material-ui/icons/Info';

const Information = props => {
  const classes = useStyles()
  const {items } = props
  return(
    <React.Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={1} className={classes.icon}>
          <InfoIcon fontSize="large" />
        </Grid>
        <Grid item xs={11} className={classes.items}>
          {items.map((item,i) => <Typography className={classes.item} key={i}>{item}</Typography>)}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

Information.propTypes = {
  items: PropTypes.array.isRequired
}

export {Information}