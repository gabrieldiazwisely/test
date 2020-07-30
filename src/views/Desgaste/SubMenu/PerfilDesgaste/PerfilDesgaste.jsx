import React, { Component } from 'react'

import { PerfilDesgaste as CPerfilDesgaste } from '../../../../components'

class PerfilDesgaste extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false
  }

  render() {
    return (
      <div className='content PerfilDesgaste'>
        <CPerfilDesgaste />
      </div>
    )
  }
}

export { PerfilDesgaste }
