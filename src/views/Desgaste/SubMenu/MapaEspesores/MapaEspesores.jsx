import React, { Component } from "react";

import { MapaEspesores as CMapaEspesores } from "../../../../components";

class MapaEspesores extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false;
  }

  render() {
    return (
      <div className="content MapaEspesores">
        <CMapaEspesores />
      </div>
    );
  }
}

export { MapaEspesores };
