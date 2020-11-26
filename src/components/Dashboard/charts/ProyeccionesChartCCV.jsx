import React, { Component } from 'react'
import { HorizontalBar, Bar } from 'react-chartjs-2'

const moment = require('moment')

class ProyeccionesChart extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const data = (canvas) => {
      const ctx = canvas.getContext("2d")
      const gradient = ctx.createLinearGradient(0,0,1430,0);
      gradient.addColorStop(0.6, "#26a028"); // Rojo
      gradient.addColorStop(0.8, "#FFF600"); // Amarillo
      gradient.addColorStop(0.9, "#FF0000"); // Verde
      
      return {
        labels: ['Desgaste ccv         '],
        datasets: [
          {
            label: 'Manto 110"',
            backgroundColor: '#d3e4f6',
            borderColor: '#d3e4f6',
            borderWidth: 1,
            stack: 1,
            order: 1,
            data: [moment('2020-05-10').valueOf()]
          },
          {
            label: 'Manto 113"',
            backgroundColor: '#ABC8E8',
            borderColor: '#ABC8E8',
            borderWidth: 1,
            stack: 1,
            order: 2,
            data: [moment('2020-05-10').valueOf()]
          },
          {
            label: 'Manto 115"',
            backgroundColor: '#71A3DA',
            borderColor: '#71A3DA',
            borderWidth: 1,
            stack: 1,
            order: 3,
            data: [moment('2020-05-10').valueOf()]
          },
          {
            label: 'Dias Operacion',
            data: [moment('2020-10-20').valueOf()],
            backgroundColor: 'rgb(240, 240, 240)',
            borderColor: 'rgb(240, 240, 240)',
            borderWidth: 1,
            stack: 1,
            order: 4
          },
          {
            label: 'Dias Proyectados',
            data: [moment('2020-11-18').valueOf()],
            backgroundColor: gradient,
            borderColor: gradient,
            borderWidth: 1,
            stack: 1,
            order: 5
          },
        ]
      }
    }


    const options = {
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: moment('2020-05-11').valueOf(),
            backgroundColor: 'rgba(178, 204, 234, 1)',
            borderWidth: 3,
            fill: true,
            showLine: true,
            label: {
              content: "Fecha Instalacion Concava: 10-05-2020",
              enabled: true,
              position: "top",
              xAdjust: -120,
            }
          },
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: moment('2020-10-20').valueOf(),
            backgroundColor: 'rgba(178, 204, 234, 1)',
            borderWidth: 3,
            fill: true,
            showLine: true,
            label: {
              content: "Fecha Actual: 19-20-2020",
              enabled: true,
              position: "top",
            }
          }
        ]
      },
      scales: {
        xAxes: [
          {
            stacked: false,
            gridLines: {
              display: false
            },
            time: {
              unit: 'day',
              unitStepSize: 1,
            },
            ticks: {
              display: false,
              min: moment('2020-05-10').valueOf(),
              max: moment('2020-12-10').valueOf(),
              callback: value => {
                let date = moment(value); 
                return date.format('D-M-YYYY');
              }
            }
          }
        ],
        yAxes: [
          {
            stacked: true,
            gridLines: {
              display: false
            },
          }
        ],
      },
      responsive: true,
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          display: false,
          fontColor: '#91929b',
          padding: 20
        },
        onClick: null
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            console.log(tooltipItem)
            let index = tooltipItem.index;      
            let datasetIndex = tooltipItem.datasetIndex;      
            let date = moment(data.datasets[datasetIndex].data[index]);            
            if (date != moment('2020-05-10').valueOf()) // si el valor igual al minimo no mostrar!
              return data.datasets[datasetIndex].label + ': ' + date.format('D-M-YYYY')
          }
        }
      }
    }
  
    return (<HorizontalBar data={data} options={options} height={30} />)
  }
}

export default ProyeccionesChart
