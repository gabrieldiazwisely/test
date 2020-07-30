import React, { Component } from 'react'

import { Desgaste as CDesgaste } from '../../components'

class Desgaste extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false
  }

  render() {
    return (
      <div className='content desgaste'>
        <CDesgaste />
      </div>
    )
  }
}

export { Desgaste }
