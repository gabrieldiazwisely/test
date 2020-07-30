import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Typography,Avatar} from '@material-ui/core'
import { useStyles } from './style'

const Information = props => {
  const classes = useStyles()
  const {title = '', items, icon = '' } = props
  return(
    <React.Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={1}>
        {icon !== '' && <Avatar className={classes.icon}>{ icon }</Avatar>}
        </Grid>
        <Grid item xs={11} className={classes.items}>
          {title !== '' && <Typography className={classes.title} variant={'h4'}>{title}</Typography>}
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