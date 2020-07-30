import React, { Component } from "react";

import { Deformaciones as CDeformaciones } from "../../../../components";

class Deformaciones extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false;
  }

  render() {
    return (
      <div className="content Deformaciones">
        <CDeformaciones />
      </div>
    );
  }
}

export { Deformaciones };
