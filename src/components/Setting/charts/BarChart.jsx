import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const data = {
  labels: ['7,75"', '8,0"', '9,25"'],
  datasets: [
  {
      label: "Porciento",
      backgroundColor: ["#55982F", "#EFE163", "#C03622"],
      strokeColor: "rgba(220,220,220,0.8)", 
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [30, 60, 90]
  }]
}

const options = {
  layout: {
    padding: {
      bottom: 0,
      top: 0
    }
  },
  scales: {
    xAxes: [{
      stacked: false,
      gridLines: {
        display: false
      },
      scaleLabel: {
        display: true,
        labelString: 'Setting',
      },
    }],
    yAxes: [{
      stacked: false,
      scaleLabel: {
        display: true,
        labelString: 'Altura de poste en porcentaje y mm',
      },
      ticks: {
        min: 0,
        max: 100,
        callback: function(value, index, values) {
          return (value / 100 * 100).toFixed(0) + '%'; 
        }
      },
      
        }],
  },
      responsive: true,
        legend: {
          display: false,
          position: 'right',
          labels: {
            fontColor: '#91929b',
            padding: 20
          }
        }
      };

class BarChart extends Component {
  constructor(props) {
    super(props)

    
  }

  render() {
    return (
      <div>
        <Bar data={cloneDeep(data)} options={options}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { dashboard } = state
  return { dashboard }
}

const connected = connect(mapStateToProps)(BarChart)
export { connected as BarChart }
