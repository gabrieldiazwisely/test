import React, { Component } from 'react'
import PropTypes from 'prop-types'

function withAuthorization(requirements, configs = {}) {
  return function applyAuthFor(WrappableComponent) {
    return class ComponentWithAuthorization extends Component {
      static contextTypes = {
        user: PropTypes.object,
        authorize: PropTypes.func,
        loggedOutRole: PropTypes.oneOfType([PropTypes.string, PropTypes.symbol])
      }
      render() {
        const { unauthorized } = configs
        const { user, authorize } = this.context

        if (user && user.isAuthed && authorize(requirements, user)) {
          return <WrappableComponent {...this.props} />
        }

        if (unauthorized) {
          return unauthorized
        }

        return null
      }
    }
  }
}

export { withAuthorization }
