import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, Hidden } from '@material-ui/core'
import { userActions, notificationActions } from '../../redux/actions'
import SignInForm from './SignInForm'
import LogoElecmetal from '../../assets/img/logo-elecmetal-login.png'
import LogoCrushing from '../../assets/img/logo-crushing.png'

const initialState = {
  username: '',
  password: ''
}

class SignIn extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      ...this.props,
      passwordError: false,
      userNameError: false,
      checked: false,
      height: window.innerHeight
    }
  }

  componentDidMount() {
    this.props.dispatch(notificationActions.clear())
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    const { dispatch } = this.props
    dispatch(notificationActions.clear())
  }

  handleCheckBoxChange = () => {
    this.setState({ checked: !this.state.checked })
  }

  handleRedirect = () => {
    console.log('should redirect')
  }


  handleSubmit = event => {
    event.preventDefault()
    const { dispatch } = this.props
    const { username, password } = this.state
    if (this.state.username.length === 0) {
      dispatch(notificationActions.error({ message: 'Invalid Username' }))
      this.setState({ userNameError: true })
      return
    } else {
      this.setState({ userNameError: false })
    }
    if (this.state.password.length === 0) {
      dispatch(notificationActions.error({ message: 'Wrong Password' }))
      this.setState({ passwordError: true })
      return
    } else {
      this.setState({ passwordError: false })
    }

    dispatch(userActions.signin(username, password))
      .then(() => {
        
      })
      .catch(error => {
        console.log(error)
      })
    this.setState(initialState)
  }

  render() {
    return (
      <React.Fragment>
        <Grid container direction='row' justify='center'>
        <Hidden smDown>
          <Grid item md={3} style={{height: this.state.height - 90, position: 'relative'}}> 
            <img className={'logo-crushing'} src={LogoCrushing} alt='Crushing' /> 
          </Grid>
        </Hidden>
          <Grid
            item
            container
            xs={12}
            md={6}
            direction='row'
            justify='center'
            alignItems='baseline'
          >
            
            <img className={'logo-elecmetal'} src={LogoElecmetal} alt='Elecmetal' />
              
            <SignInForm
              checked={this.state.checked}
              userNameError={this.state.userNameError}
              username={this.state.username}
              passwordError={this.state.passwordError}
              password={this.state.password}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              handleCheckBoxChange={this.handleCheckBoxChange}
              handleRedirect={this.handleRedirect}
            />
          </Grid>
          <Hidden smDown>
            <Grid item md={3}>  </Grid>
          </Hidden>
        </Grid>
      </React.Fragment>
    )
  }
}

SignIn.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

SignIn.defaultProps = {
  ...initialState
}

const connected = connect()(SignIn)
export { connected as SignIn }
