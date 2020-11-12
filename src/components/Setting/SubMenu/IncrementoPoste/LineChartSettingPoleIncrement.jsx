import React from 'react'
import { Line } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'
import { Grid, Typography, Paper, Button, TextField, Link, Box } from "@material-ui/core"
import { useStyles } from "./style"
import clsx from "clsx";


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
      data: [260, 245, 180, 159, 143, 120, 99, 80,40,1]
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
  }

const LineChartSettingPoleIncrement = () => {
	const classes = useStyles()
	return (
		<Grid container>
			<Grid item xs={12} >
				<Box 
					display='flex' 
					flexDirection='row' 
					justifyContent="flex-end"
					className={ classes.MarginBottom }>
					<Button variant="contained" size="medium" color="primary"  
						className={clsx(classes.Button, classes.MarginTopCero)}>
						Borrar
					</Button>
					<Link className={clsx(classes.Link, classes.active)}>Fecha</Link>
					<Link className={clsx(classes.Link)}>Tonelaje</Link>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Line data={cloneDeep(data)} options={options}/>
			</Grid>
		</Grid>
	) 
}

export default LineChartSettingPoleIncrement