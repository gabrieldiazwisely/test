import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {};
  }
  static childContextTypes = {
    authorize: PropTypes.func,
    user: PropTypes.object
  };
  componentDidMount() {
    this.setState({ user: this.props.user });
  }
  getChildContext() {
    const { user, authorize } = this.props;
    return {
      user,
      authorize
    };
  }
  render() {
    return this.props.children;
  }
}

AuthProvider.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  authorize: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

const connected = connect(mapStateToProps)(AuthProvider);
export { connected as AuthProvider };
