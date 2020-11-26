import React, { Component } from 'react'
import { HorizontalBar, Bar } from 'react-chartjs-2'

const moment = require('moment')

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
}

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
        labels: ['Desgaste de Manto'],
        datasets: [
          {
            label: 'Manto 110"',
            backgroundColor: '#d3e4f6',
            borderColor: '#d3e4f6',
            borderWidth: 1,
            stack: 1,
            order: 1,
            data: [moment('2020-06-07').valueOf()]
          },
          {
            label: 'Manto 113"',
            backgroundColor: '#ABC8E8',
            borderColor: '#ABC8E8',
            borderWidth: 1,
            stack: 1,
            order: 2,
            data: [moment('2020-09-07').valueOf()]
          },
          {
            label: 'Manto 115"',
            backgroundColor: '#71A3DA',
            borderColor: '#71A3DA',
            borderWidth: 1,
            stack: 1,
            order: 3,
            data: [moment('2020-10-18').valueOf()]
          },
          {
            label: 'Dias Operacion',
            data: [ moment('2020-10-20').valueOf()],
            backgroundColor: 'rgb(240, 240, 240)',
            borderColor: 'rgb(240, 240, 240)',
            borderWidth: 1,
            stack: 1,
            order: 4
          },
          {
            label: 'Dias Proyectados',
            data: [moment('2020-12-12').valueOf()],
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
              enabled: false,
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
              enabled: false,
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

// import React, { Component } from 'react'

// import { makeStyles } from '@material-ui/core/styles';
// import pattern from "patternomaly"

// import { HorizontalBar, Bar } from 'react-chartjs-2'
// import cloneDeep from 'lodash/cloneDeep'

// import { CondicionSalidaModal } from '../CondicionDesgasteModal/CondicionSalidaModal'

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(0, 4, 3),
//     margin: theme.spacing(2, 4, 3),
//     overflow:'scroll',
//     height:'100%',
//   },
// }));







// const ProyeccionesChart = (props) => {


//   const data = { 
//     labels: ['Desgaste CCV', 'desgaste de manto', 'Perdida de Setting'],
//     datasets: [
//       {
//         label: 'manto 107" Mton',
//         backgroundColor: gradient,
//         borderColor: 'rgba(255,99,132)',
//         borderWidth: 1,
//         stack: 1,
//         hoverBackgroundColor: gradient,
//         hoverBorderColor: 'rgba(255,99,132)',
//         data: [7.50, 6.76, 9.70]
//       },
//       {
//         label: 'manto 110" Mton',
//         backgroundColor: 'rgba(155,231,91,0.2)',
//         borderColor: 'rgba(155,231,91,1)',
//         borderWidth: 1,
//         stack: 1,
//         hoverBackgroundColor: 'rgba(155,231,91,0.4)',
//         hoverBorderColor: 'rgba(155,231,91,1)',
//         data: [0, 7.21, 5.30]
//       }
//     ]
//   }

//   const options = {
//     layout: {
//       padding: {
//         bottom: 0,
//         top: 0
//       }
//     },
//     scales: {
//     xAxes: [{
//       stacked: true,
//       gridLines: {
//         display: false
//       },
//       scaleLabel: {
//         display: false,
//         labelString: ''
//       }
//     }],
//     yAxes: [{
//       stacked: true,
//       scaleLabel: {
//         display: false,
//         labelString: ''
//       }
//     }],
//     },
//     responsive: true,
//     legend: {
//       display: true,
//       position: 'right',
//       labels: {
//         fontColor: '#91929b',
//         padding: 20
//       }
//     },
//   }
  
//   return (
//     <div>
//       <Bar data={cloneDeep(data)} options={options} />
//     </div>
//   )
// }

// export { ProyeccionesChart };
