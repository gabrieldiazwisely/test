import React, { useState } from "react"
import { Grid, Typography, Paper, Button, TextField, Link } from "@material-ui/core"
import { useStyles } from "./style"
import clsx from "clsx";
import PropTypes from 'prop-types'

const PostIncreaseRecommendation = ({ setPoleIncrementCalculate }) => {

  const classes = useStyles()

  const [tpd, setTpd] = useState('')
  const [obj, setObj] = useState('')
  const [type, setType] = useState('OSS')

  const onHandleSubmit = e => {
    e.preventDefault()
    
    //validate form data stored in state
    if (tpd.trim().length === 0 || obj.trim().length === 0) 
      return alert('Por favor, complete todos los campos!')

      setPoleIncrementCalculate({
        tpd,
        obj,
        type
      })
  }

  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.root}>
        <form onSubmit={ onHandleSubmit }>
          <Grid container  spacing={2}>
            <Grid item xs={12} sm={4} className={classes.InputContent}>
              <Typography className={classes.InputLabel}>TPD:</Typography>
              <TextField
                placeholder=""
                fullWidth
                margin="normal"
                className={classes.InputText}
                InputProps={{
                  className: classes.input,
                }}
                onChange={ e => setTpd(e.target.value) }
              />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.InputContent}>
              <Typography className={classes.InputLabel}>Setting obj.:</Typography>
              <TextField
                placeholder=""
                fullWidth
                margin="normal"
                className={classes.InputText}
                InputProps={{
                  className: classes.input,
                }}
                onChange={ e => setObj(e.target.value) }
              />
            </Grid>
            <Grid item xs={12} sm={4} align={'left'} className={classes.MarginTop}>
              <Link 
                className={ clsx({[classes.Link]: true, [classes.active]: type === 'OSS' })}
                onClick={ () => setType('OSS') }
                >OSS
              </Link>
              <Link 
                className={ clsx({[classes.Link]: true, [classes.active]: type === 'CSS' })}
                onClick={ () => setType('CSS') }
                >CSS
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} align={'right'}>
              <Button 
                variant="contained" 
                size="medium" 
                color="primary"  
                className={clsx(classes.Button, classes.MarginTopCero)}
                type='submit'
                >Calcular
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </React.Fragment>
  )
}

PostIncreaseRecommendation.propTypes = {
  setPoleIncrementCalculate: PropTypes.func.isRequired
}

export { PostIncreaseRecommendation }
