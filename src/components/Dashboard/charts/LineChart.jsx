import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import 'chartjs-plugin-annotation';
import { connect } from 'react-redux'



const LineChart = (props) => {
  
  return (
    <div>
      <Line data={props.data.data[0]} options={props.data.options}/>
    </div>
  )
}

export { LineChart };


// class LineChart extends Component {
//   constructor(props) { 
//     state
//   }

//   render() {
//     return (
//       <div>
//         <Line data={dashboard.mto_height_recommendation.data} options={dashboard.mto_height_recommendation.options}/>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//   const { dashboard } = state
//   return { dashboard }
// }

// const connected = connect(mapStateToProps)(LineChart)
// export { connected as LineChart }
