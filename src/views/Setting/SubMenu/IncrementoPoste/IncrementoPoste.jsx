import React, { Component } from "react";

import { IncrementoPoste as CIncrementoPoste } from "../../../../components";

class IncrementoPoste extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false;
  }

  render() {
    return (
      <div className="content IncrementoPoste">
        <CIncrementoPoste />
      </div>
    );
  }
}

export { IncrementoPoste };
