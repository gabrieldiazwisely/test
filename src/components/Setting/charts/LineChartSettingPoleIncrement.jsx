import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'
import { Grid, Button, Link, Box } from "@material-ui/core"
import { useStyles } from "../SubMenu/IncrementoPoste/style"
import clsx from "clsx";

// //By ton
// const tonData = {
// 	"curves": [
// 		{
// 			"OSS:8[in] -TPD:40.000[Ton]": {
// 			"x": [2.09, 2.18, 2.27, 2.36, 2.45, 2.54, 2.63, 2.72, 2.81, 2.9, 2.99, 3.08, 3.17, 3.26, 3.35, 3.44, 3.53, 3.62, 3.71, 3.8, 3.89, 3.98, 4.07, 4.16, 4.25, 4.34, 4.43, 4.52, 4.61, 4.7, 4.79, 4.88, 4.97, 5.06, 5.15, 5.24, 5.33, 5.42, 5.51, 5.6, 5.69, 5.78, 5.87, 5.96, 6.05, 6.14, 6.23, 6.32, 6.41, 6.5, 6.59, 6.68, 6.77, 6.86, 6.95, 7.04, 7.13, 7.22, 7.31, 7.4, 7.49, 7.58, NaN], 
// 			"y": [50.0, 53.1, 56.2, 59.3, 62.4, 65.5, 68.6, 71.7, 74.8, 77.9, 81.0, 84.1, 87.2, 90.3, 93.4, 96.5, 99.6, 102.7, 105.8, 108.9, 112.0, 115.1, 118.2, 121.3, 124.4, 127.5, 130.6, 133.7, 136.8, 139.9, 143.0, 146.1, 149.2, 152.3, 155.4, 158.5, 161.6, 164.7, 167.8, 170.9, 174.0, 177.1, 180.2, 183.3, 186.4, 189.5, 192.6, 195.7, 198.8, 201.9, 205.0, 208.1, 211.2, 214.3, 217.4, 220.5, 223.6, 226.7, 229.8, 232.9, 236.0, 239.1, NaN]
// 			}
// 		}, {
// 			"OSS:8.5[in] -TPD:40.000[Ton]": {
// 				"x": [2.09, 2.18, 2.27, 2.36, 2.45, 2.54, 2.63, 2.72, 2.81, 2.9, 2.99, 3.08, 3.17, 3.26, 3.35, 3.44, 3.53, 3.62, 3.71, 3.8, 3.89, 3.98, 4.07, 4.16, 4.25, 4.34, 4.43, 4.52, 4.61, 4.7, 4.79, 4.88, 4.97, 5.06, 5.15, 5.24, 5.33, 5.42, 5.51, 5.6, 5.69, 5.78, 5.87, 5.96, 6.05, 6.14, 6.23, 6.32, 6.41, 6.5, 6.59, 6.68, 6.77, 6.86, 6.95, 7.04, 7.13, 7.22, 7.31, 7.4, 7.49, 7.58, NaN], 
// 				"y": [35.0, 38.1, 41.2, 44.3, 47.4, 50.5, 53.599999999999994, 56.7, 59.8, 62.900000000000006, 66.0, 69.1, 72.2, 75.3, 78.4, 81.5, 84.6, 87.7, 90.8, 93.9, 97.0, 100.1, 103.2, 106.3, 109.4, 112.5, 115.6, 118.69999999999999, 121.80000000000001, 124.9, 128.0, 131.1, 134.2, 137.3, 140.4, 143.5, 146.6, 149.7, 152.8, 155.9, 159.0, 162.1, 165.2, 168.3, 171.4, 174.5, 177.6, 180.7, 183.8, 186.9, 190.0, 193.1, 196.2, 199.3, 202.4, 205.5, 208.6, 211.7, 214.8, 217.9, 221.0, 224.1, NaN]
// 			}
// 		}
// 	], 
// 	"xlabel": "Tonelaje [MTon]", 
// 	"ylabel": "Altura de poste [mm]"
// }

// //By date
const dataByDate = {
	"curves" : [
		{
			"OSS:8.5[in] -TPD:40.000[Ton]": {
				"x": ["15-04-2020", "16-04-2020", "17-04-2020", "18-04-2020", "19-04-2020", "20-04-2020", "21-04-2020", "22-04-2020", "23-04-2020", "24-04-2020", "25-04-2020", "26-04-2020", "27-04-2020", "28-04-2020", "29-04-2020", "30-04-2020", "01-05-2020", "02-05-2020", "03-05-2020", "04-05-2020", "05-05-2020", "06-05-2020", "07-05-2020", "08-05-2020", "09-05-2020", "10-05-2020", "11-05-2020", "12-05-2020", "13-05-2020", "14-05-2020", "15-05-2020", "16-05-2020", "17-05-2020", "18-05-2020", "19-05-2020", "20-05-2020", "21-05-2020", "22-05-2020", "23-05-2020", "24-05-2020", "25-05-2020", "26-05-2020", "27-05-2020", "28-05-2020", "29-05-2020", "30-05-2020", "31-05-2020", "01-06-2020", "02-06-2020", "03-06-2020", "04-06-2020", "05-06-2020", "06-06-2020", "07-06-2020", "08-06-2020", "09-06-2020", "10-06-2020", "11-06-2020", "12-06-2020", "13-06-2020", "14-06-2020", "15-06-2020", NaN], 
				"y": [50.0, 53.1, 56.2, 59.3, 62.4, 65.5, 68.6, 71.7, 74.8, 77.9, 81.0, 84.1, 87.2, 90.3, 93.4, 96.5, 99.6, 102.7, 105.8, 108.9, 112.0, 115.1, 118.2, 121.3, 124.4, 127.5, 130.6, 133.7, 136.8, 139.9, 143.0, 146.1, 149.2, 152.3, 155.4, 158.5, 161.6, 164.7, 167.8, 170.9, 174.0, 177.1, 180.2, 183.3, 186.4, 189.5, 192.6, 195.7, 198.8, 201.9, 205.0, 208.1, 211.2, 214.3, 217.4, 220.5, 223.6, 226.7, 229.8, 232.9, 236.0, 239.1, NaN]
			}
		}
	], 
	"xlabel": "Fecha [dd-mm-aaaa]", 
	"ylabel": "Altura de poste [mm]"
}


// get x curve data
const getCurveXData = () => {
	const curve = dataByDate.curves[0]
	const curveName = Object.keys(curve)[0]
	return curve[curveName].x
}

const getCurveYData = () => {
	const curve = dataByDate.curves[0]
	const curveName = Object.keys(curve)[0]
	return curve[curveName].y
}

const getXLabel = () => {
	return dataByDate.xlabel
}

const getYLabel = () => {
	return dataByDate.ylabel
}

const data = {
	labels:[...getCurveXData()],
  datasets: [
    {
      label: getXLabel(),
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			
			borderDash: [10,5],
			borderDashOffset: 0.0,
			
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 0,
			data: [...getCurveYData()],
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
      labelString: getXLabel(),
    }
  }],
  yAxes: [{
    stacked: true,
    scaleLabel: {
      display: true,
      labelString: getYLabel(),
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

	const [chartData, setChartData] = useState({})



	const classes = useStyles()
	getCurveXData()
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