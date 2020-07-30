import React, { Component } from "react";

import { SimManto as CSimManto } from "../../components";

class SimManto extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    return false;
  }

  render() {
    return (
      <div className="content SimManto">
        <CSimManto />
      </div>
    );
  }
}

export { SimManto };
