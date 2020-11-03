import React from 'react'
import { Line } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const LineChartSettingsDistributionHeight = ({ heightData }) => {

  console.log(heightData)

  const data = {
    labels: ['7,00', '7,25', '7,50', '7,75', '8,00', '8,25', '8,50', '8,75', '9,00', '9,25'],
    // labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10'],
    datasets: [
      {
        label: 'Remanente ',
        fill: true,
        showLine: false,
        backgroundColor: 'rgba(75,134,200,0)',
        borderColor: 'rgba(75,134,200,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,134,200,1)',
        pointBackgroundColor: 'rgba(75,134,200,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,134,200,1)',
        pointHoverBorderColor: 'rgba(75,134,200,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 1,
        data: [...heightData.green_line]
      },
      {
        label: 'Sep. de ccv ',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(#838383,0.nino4)',
        borderColor: 'rgba(#838383,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(#838383,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        // pointHoverBackgroundColor: 'rgba(#838383,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      },
      {
        label: 'Promedio ',
        fill: true,
        showLine: true,
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
        // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 1,
        data: [...heightData.green_line]
      },
    ]
  }

  const getVerticalLines = () => {
    const { vertical_lines } = heightData
    return vertical_lines.map( x => {
      return ({
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: x,
        borderColor: '#838383',
        borderWidth: 1
      })
    })
  }
  
  const options = {
    annotation: {
      annotations: [...getVerticalLines()]
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
        labelString: 'Angulo (deg)',
        // fontSize: 21,
        // fontColor: '#0057B8'
      }
    }],
    yAxes: [{
      stacked: true,
      scaleLabel: {
        display: true,
        labelString: 'Remanente [mm]',
        // fontSize: 21,
        // fontColor: '#0057B8'
      }
    }],
    },
    responsive: true,
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#91929b',
          padding: 20
        }
      }
    }

  return (
    <div>
     <Line data={cloneDeep(data)} options={options}/>
    </div>
  )

}

export { LineChartSettingsDistributionHeight }