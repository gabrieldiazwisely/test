import React, { Component } from "react";

import { Setting as CSetting } from "../../components";

class Setting extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false;
  }

  render() {
    return (
      <div className="content Setting">
        <CSetting />
      </div>
    );
  }
}

export { Setting };
