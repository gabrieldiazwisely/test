import React from 'react'
import { Bar } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const BarChartSettingsDistributionHistogram = ({ histogramData }) => {

  console.log(histogramData)

  //HARDCODED AVERAGE LINE
  const average_line = { x: "7.45" }

  const data = {
    labels: [...histogramData.x],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(178, 204, 234)',
        // borderColor: 'rgba(178, 204, 234)',
        borderWidth: 1,
        stack: 1,
        hoverBackgroundColor: 'rgba(178, 204, 234)',
        // hoverBorderColor: 'rgba(178, 204, 234)',
        data: [...histogramData.x],
      }, {
        label: 'Promedio',
        fill: true,
        showLine: true,
        type: 'line',
        lineTension: 0.1,

        backgroundColor: 'rgba(75,192,192,0)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',

        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 1,

        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 1,

        borderWidth: 2,

        data: [...histogramData.curve.map(p => p.y)],
      }
    ]
  }

  const getAverageLine = () => {
    const { x } = average_line
    return ({
      type: 'line',
      mode: 'vertical',
      scaleID: 'x-axis-0',
      value: x,
      pointBackgroundColor: 'rgba(75,192,192,1)',
      borderWidth: 3
    })
  }
  
  const options = {
    annotation: {
      annotations: [getAverageLine()]
    },
    layout: {
      padding: {
        bottom: 0,
        top: 0
      }
    },
    scales: {
      
    xAxes: [{
      // barPercentage: 1.0,
      // categoryPercentage: 1.0,
      stacked: false,
      gridLines: {
        display: false
      },
      scaleLabel: {
        display: true,
        labelString: histogramData.xlabel
      }
    }],
    yAxes: [{
      stacked: true,
      scaleLabel: {
        display: false,
        // labelString: 'Procesamiento Mton'
      }
    }],
    },
    responsive: true,
    legend: {
      display: false,
      position: 'bottom',
      labels: {
        fontColor: '#91929b',
        padding: 20
      }
    }
  }

  return (
    <div>
      <Bar data={cloneDeep(data)} options={options}/>
    </div>
  )
}

export { BarChartSettingsDistributionHistogram }