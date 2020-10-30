import React from 'react'
import { Bar } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const BarChartSettingsDistributionHistogram = ({ histogramData }) => {

  console.log(histogramData)

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
        data: [...histogramData.x]
      }, {
        label: '',
        color: 'rgba(178, 204, 234)',

        data: [...histogramData.curve.map(p => p.y)],
        type: 'line',
        order: 2
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
    stacked: false,
    gridLines: {
      display: false
    },
    scaleLabel: {
      display: false,
      labelString: histogramData.xlabel
    }
  }],
  yAxes: [{
    stacked: true,
    scaleLabel: {
      display: false,
      labelString: 'Procesamiento Mton'
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
  }









  // const data = {
  //   labels: [7.50, 6.76, 9.70, 9.00],
  //   datasets: [
  //     {
  //       label: '',
  //       backgroundColor: 'rgba(178, 204, 234,0.2)',
  //       borderColor: 'rgba(178, 204, 234)',
  //       borderWidth: 1,
  //       stack: 1,
  //       hoverBackgroundColor: 'rgba(178, 204, 234,0.2)',
  //       hoverBorderColor: 'rgba(178, 204, 234)',
  //       data: [7.50, 6.76, 9.70, 9.00]
  //     }, {
  //       label: '',
  //       data: [7.50, 6.76, 9.70, 9.00],
  //       type: 'line',
  //       order: 2
  //       }
  //   ]
  // }
  
  // const options = {
  // layout: {
  //   padding: {
  //     bottom: 0,
  //     top: 0
  //   }
  // },
  // scales: {
  // xAxes: [{
  //   stacked: true,
  //   gridLines: {
  //     display: false
  //   },
  //   scaleLabel: {
  //     display: true,
  //     labelString: 'CSS[IN]'
  //   }
  // }],
  // yAxes: [{
  //   stacked: true,
  //   scaleLabel: {
  //     display: false,
  //     labelString: 'Procesamiento Mton'
  //   }
  // }],
  // },
  // responsive: true,
  //   legend: {
  //     display: false,
  //     position: 'right',
  //     labels: {
  //       fontColor: '#91929b',
  //       padding: 20
  //     }
  //   }
  // }

  return (
    <div>
      <Bar data={cloneDeep(data)} options={options}/>
    </div>
  )
}

export { BarChartSettingsDistributionHistogram }