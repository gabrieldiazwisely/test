import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'

const min = 10
const max = 300
const data = {
  labels: ['7,00', '7,25', '7,50', '7,75', '8,00', '8,25', '8,50', '8,75', '9,00', '9,25'],
  datasets: [
    {
      label: 'OSS ',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min,Math.random() * (max - min) + min,Math.random() * (max - min) + min]
    }
  ]
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
    stacked: true,
    gridLines: {
      display: false
    },
    scaleLabel: {
      display: true,
      labelString: 'OSS [in]',
    }
  }],
  yAxes: [{
    stacked: true,
    scaleLabel: {
      display: true,
      labelString: 'Recorrido del poste [mm]',
    }
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

class LineChart extends Component {
  constructor(props) {
    super(props)

    
  }

  render() {
    return (
      <div>
        <Line data={cloneDeep(data)} options={options} height={125}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { dashboard } = state
  return { dashboard }
}

const connected = connect(mapStateToProps)(LineChart)
export { connected as LineChart }
