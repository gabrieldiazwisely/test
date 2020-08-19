import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import 'chartjs-plugin-annotation';
import { connect } from 'react-redux'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'

const data = {
  labels: ['7,00', '7,25', '7,50', '7,75', '8,00', '8,25', '8,50', '8,75', '9,00', '9,25'],
  datasets: [
    {
      label: 'OSS ',
      fill: true,
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
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [260, 245, 180, 159, 143, 120, 99, 80,40,1]
    }
  ]
}

const options = {
  annotation: {
    annotations: [{
      type: 'line',
      mode: 'vertical',
      scaleID: 'x-axis-0',
      value: '7.5',
      borderColor: '#838383',
      borderWidth: 1,
      label: {
        enabled: true,
        position: "top",
        content: '7.5'
     }
    },{
      type: 'line',
      mode: 'vertical',
      scaleID: 'x-axis-0',
      value: '6.25',
      borderColor: '#838383',
      borderWidth: 1,
    },{
      type: 'line',
      mode: 'vertical',
      scaleID: 'x-axis-0',
      value: '3.75',
      borderColor: '#838383',
      borderWidth: 1,
    },{
      type: 'line',
      mode: 'vertical',
      scaleID: 'x-axis-0',
      value: '1.5',
      borderColor: '#838383',
      borderWidth: 1,
    }],
},
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
      fontSize: 21,
      fontColor: '#0057B8'
    }
  }],
  yAxes: [{
    stacked: true,
    scaleLabel: {
      display: true,
      labelString: 'Recorrido del poste [mm]',
      fontSize: 21,
      fontColor: '#0057B8'
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

class LineChartDistribucionSetting extends Component {
  constructor(props) {
    super(props)

    
  }

  render() {
    return (
      <div>
        <Line data={cloneDeep(data)} options={options}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { dashboard } = state
  return { dashboard }
}

const connected = connect(mapStateToProps)(LineChartDistribucionSetting)
export { connected as LineChartDistribucionSetting }
