import React, { Component } from 'react'

import { AnguloCamara as CAnguloCamara } from '../../../../components'

class AnguloCamara extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false
  }

  render() {
    return (
      <div className='content AnguloCamara'>
        <CAnguloCamara />
      </div>
    )
  }
}

export { AnguloCamara }
