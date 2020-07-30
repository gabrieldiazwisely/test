import React, { Component } from 'react'

import { CameraGeometry as CCameraGeometry } from '../../components'

class CameraGeometry extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false
  }

  render() {
    return (
      <div className='content CameraGeometry'>
        <CCameraGeometry />
      </div>
    )
  }
}

export { CameraGeometry }
