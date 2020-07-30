import React, { Component } from "react";

import { SimulacionIngresoManto as CSimulacionIngresoManto } from "../../../../components";

class SimulacionIngresoManto extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false;
  }

  render() {
    return (
      <div className="content SimulacionIngresoManto">
        <CSimulacionIngresoManto />
      </div>
    );
  }
}

export { SimulacionIngresoManto };
