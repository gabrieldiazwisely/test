import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, TextField, Button, Grid, Paper, Typography, Link } from '@material-ui/core'
import { useStyles } from './style'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const SignInForm = props => {
  const classes = useStyles()
  const { userNameError, username, passwordError, password } = props
  return (
    <React.Fragment>
      <Grid container direction='row' justify='center' alignItems='baseline' >
        <Grid item xs={12} md={5}>
            
          <Paper className={classes.formContainer}>
            <Typography variant="h4" className={classes.title}>
              ¡Bienvenido/a!
            </Typography>
            
              <AccountCircleIcon className={classes.iconAccount} />
            
            <form
              onSubmit={props.handleSubmit}
              noValidate
              autoComplete='off'
              className={classes.form}  
            >
              <FormGroup row>
                <TextField
                  className={classes.textInput}
                  placeholder='Usuario'
                  error={userNameError}
                  id='user-name'
                  label='Usuario'
                  name='username'
                  type='text'
                  variant='filled'
                  value={username}
                  onChange={props.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup row>
                <TextField
                  className={classes.textInput}
                  placeholder='Contraseña'
                  error={passwordError}
                  id='outlined-password-input'
                  label='Contraseña'
                  name='password'
                  type='password'
                  variant='filled'
                  value={password}
                  onChange={props.handleChange}
                  required
                />
              </FormGroup>
              <Typography variant="p" align='right'>
                <Link href="#"  className={classes.forgotPass}>
                  ¿Olvidó su contraseña? 
                </Link>
              </Typography>
              <FormGroup row>
                <Button
                  className={classes.submitButton}
                  type='submit'
                  variant='contained'
                >
                  Ingresar
                </Button>
              </FormGroup>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

SignInForm.propTypes = {
  checked: PropTypes.bool.isRequired,
  userNameError: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  passwordError: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheckBoxChange: PropTypes.func.isRequired,
  handleRedirect: PropTypes.func.isRequired
}

export default SignInForm
