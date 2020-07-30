import React, { Component } from "react";

import { SettingCalculation as CSettingCalculation } from "../../../../components";

class SettingCalculation extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false;
  }

  render() {
    return (
      <div className="content SettingCalculation">
        <CSettingCalculation />
      </div>
    );
  }
}

export { SettingCalculation };
