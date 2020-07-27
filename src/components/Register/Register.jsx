import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

import { userActions, notificationActions } from '../../redux/actions'



const initialState = {
  username: '',
  password: '',
  repeatPassword: '',
  email: '',
  name: '',
  lastname: ''
}

class Register extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.usernameInput.focus()
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const { dispatch } = this.props
    if (this.state.username.length < 1) {
      dispatch(
        notificationActions.error({
          message: 'Missing required parameters: User name'
        })
      )
      this.usernameInput.focus()
      return
    }
    if (this.state.password.length < 1) {
      dispatch(
        notificationActions.error({
          message: 'Missing required parameters: Password'
        })
      )
      this.passwordInput.focus()
      return
    }
    if (this.state.repeatPassword.length < 1) {
      dispatch(
        notificationActions.error({
          message: 'Missing required parameters: Repeat Password'
        })
      )
      this.repeatPasswordInput.focus()
      return
    }
    if (this.state.email.length < 1) {
      dispatch(
        notificationActions.error({
          message: 'Missing required parameters: Email'
        })
      )
      this.emailInput.focus()
      return
    }
    if (this.state.name.length < 1) {
      dispatch(
        notificationActions.error({
          message: 'Missing required parameters: Name'
        })
      )
      this.nameInput.focus()
      return
    }
    if (this.state.lastname.length < 1) {
      dispatch(
        notificationActions.error({
          message: 'Missing required parameters: Last Name'
        })
      )
      this.lastnameInput.focus()
      return
    }
    dispatch(userActions.signup({ ...this.state }))
    this.setState(initialState)
  }
  render() {
    return (
      <Container fluid className='bg-login'>
        <Row>
          <Col
            className='mt-5 card-login'
            sm='12'
            md={{ size: 6, offset: 3 }}
            lg={{ size: 4, offset: 4 }}
          >
            <Card body inverse color='primary' className='no-radius'>
              <CardTitle>CREATE A NEW USER</CardTitle>
              <CardText>
                You can use your Email or a Username to access the system
              </CardText>
              <div className='icon-register'>
                <i className='material-icons'>how_to_reg</i>
              </div>
            </Card>
            <Card className='no-radius'>
              <CardBody>
                <CardTitle>Register form</CardTitle>
                <div className='icon-intel-register'>
                 
                </div>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for='userName'>Username</Label>
                    <Input
                      type='text'
                      name='username'
                      id='userName'
                      innerRef={input => {
                        this.usernameInput = input
                      }}
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Row>
                    <Col sm='12' md='6'>
                      <FormGroup>
                        <Label for='userPassword'>Password</Label>
                        <Input
                          type='password'
                          name='password'
                          id='userPassword'
                          innerRef={input => {
                            this.passwordInput = input
                          }}
                          value={this.state.password}
                          onChange={this.handleChange}
                          autoComplete='true'
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='12' md='6'>
                      <FormGroup>
                        <Label for='userRepeatPassword'>Repeat Password</Label>
                        <Input
                          type='password'
                          name='repeatPassword'
                          id='userRepeatPassword'
                          innerRef={input => {
                            this.repeatPasswordInput = input
                          }}
                          value={this.state.repeatPassword}
                          onChange={this.handleChange}
                          autoComplete='true'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for='Email'>Email</Label>
                    <Input
                      type='email'
                      name='email'
                      id='Email'
                      innerRef={input => {
                        this.emailInput = input
                      }}
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Row>
                    <Col sm='12' md='6'>
                      <FormGroup>
                        <Label for='name'>Name</Label>
                        <Input
                          type='text'
                          name='name'
                          id='name'
                          innerRef={input => {
                            this.nameInput = input
                          }}
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='12' md='6'>
                      <FormGroup>
                        <Label for='lastName'>Last Name</Label>
                        <Input
                          type='text'
                          name='lastname'
                          id='lastName'
                          innerRef={input => {
                            this.lastnameInput = input
                          }}
                          value={this.state.lastname}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button className='mt-3' size='lg' block>
                    Sign Up
                  </Button>
                </Form>
              </CardBody>
            </Card>
            <p className='text-right mt-3'>
              <em>
                Already have an account?{' '}
                <Link to='/signin' replace>
                  Sign In
                </Link>
              </em>
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

const connected = connect()(Register)
export { connected as Register }
