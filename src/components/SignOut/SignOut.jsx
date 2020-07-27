import { Component } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../../redux/actions'

class SignOut extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(userActions.signout())
  }
  render() {
    return null
  }
}

const connected = connect()(SignOut)
export { connected as SignOut }
