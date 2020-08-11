import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const data = {
  labels: ['Campaña 1 05-03-2011 19.07', 'Campaña 2 14-10-2011 13.96', 'Campaña 3 24-03-2012 15.04', 'Campaña 5 06-11-2012 11.82'],
  datasets: [
    {
      label: 'manto 107" Mton',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132)',
      borderWidth: 1,
      stack: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.2)',
      hoverBorderColor: 'rgba(255,99,132)',
      data: [7.50, 6.76, 9.70, 9.00]
    },
    {
      label: 'manto 110" Mton',
      backgroundColor: 'rgba(155,231,91,0.2)',
      borderColor: 'rgba(155,231,91,1)',
      borderWidth: 1,
      stack: 1,
      hoverBackgroundColor: 'rgba(155,231,91,0.4)',
      hoverBorderColor: 'rgba(155,231,91,1)',
      data: [0, 7.21, 5.30, 4.32]
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
    labelString: 'N° campaña. Duración Mton'
  }
}],
yAxes: [{
  stacked: true,
  scaleLabel: {
    display: true,
    labelString: 'Procesamiento Mton'
  }
}],
},
responsive: true,
  legend: {
    display: true,
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
