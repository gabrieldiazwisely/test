import React, { Component } from "react";

import { Dashboard as CDashboard } from "../../components";

class Dashboard extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false;
  }

  render() {
    return (
      <div className="content Dashboard">
        <CDashboard />
      </div>
    );
  }
}

export { Dashboard };
