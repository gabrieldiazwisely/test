import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'
import { Grid, Button, Link, Box } from "@material-ui/core"
import { useStyles } from "../SubMenu/IncrementoPoste/style"
import clsx from "clsx";
import { useDispatch } from 'react-redux'
import { settingsPoleIncrementActions } from '../../../redux/actions'

const LineChartSettingPoleIncrement = ({ settingPoleIncrementData }) => {

<<<<<<< HEAD
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
=======
  const dispatch = useDispatch()
  const [type, setType] = useState('Fecha')
>>>>>>> 43924fa30594e25551bb843a5de026fe02a40604

  let xLabel = 
    (settingPoleIncrementData && settingPoleIncrementData.xlabel) 
      ? settingPoleIncrementData.xlabel 
      : 'no data'
  let yLabel = 
    (settingPoleIncrementData && settingPoleIncrementData.ylabel) 
      ? settingPoleIncrementData.ylabel 
      : 'no data'

<<<<<<< HEAD
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
=======
  const getOptions = () => {
    return {
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
          labelString: xLabel,
        }
      }],
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: yLabel,
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
>>>>>>> 43924fa30594e25551bb843a5de026fe02a40604
    }
  }

  const getCurveXData = () => {
    if (!settingPoleIncrementData) return []
    const { curves } = settingPoleIncrementData
    if (!curves) return []
    if (curves.lenght === 0) return []
    const curve = curves[0]
    const curveName = Object.keys(curve)[0]
    return curve[curveName].x
  }

  const getCurveYData = () => {
    if (!settingPoleIncrementData) return []
    const { curves } = settingPoleIncrementData
    if (!curves) return []
    if (curves.lenght === 0) return []
    const curve = curves[0]
    const curveName = Object.keys(curve)[0]
    return curve[curveName].y
  }

  const getData = () => {
    return {
      labels:[...getCurveXData()],
      datasets: [
        {
          label: xLabel,
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
  }

  const onHandleCleanButtonClick = () => {
    dispatch(
      settingsPoleIncrementActions.resetSettingsPoleIncrement()
    )
  }

	const classes = useStyles()
	return (
		<Grid container>
			<Grid item xs={12} >
				<Box 
					display='flex' 
					flexDirection='row' 
					justifyContent="flex-end"
					className={ classes.MarginBottom }>
          <Button 
            variant="contained" size="medium" color="primary"  
						className={clsx(classes.Button, classes.MarginTopCero)}
            onClick={ onHandleCleanButtonClick }>
						Borrar
					</Button>
          <Link 
            className={ clsx({[classes.Link]: true, [classes.active]: type == 'Fecha' })}
            onClick={ () => setType('Fecha') }
            >Fecha
          </Link>
          <Link 
            className={ clsx({[classes.Link]: true, [classes.active]: type == 'Tonelaje' })}
            onClick={ () => setType('Tonelaje') }
            >Tonelaje
          </Link>
				</Box>
			</Grid>
			<Grid item xs={12}>
        <Line redraw={ true } options={ getOptions() } data={cloneDeep(getData())}/>
      </Grid>
		</Grid>
	) 
}

export default LineChartSettingPoleIncrement