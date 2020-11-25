import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'
import { Grid, Button, Link, Box } from "@material-ui/core"
import { useStyles } from "../SubMenu/IncrementoPoste/style"
import clsx from "clsx";
import { useDispatch } from 'react-redux'
import { settingsPoleIncrementActions } from '../../../redux/actions'

const LineChartSettingPoleIncrement = ({ settingPoleIncrementData }) => {

  const dispatch = useDispatch()
  const [type, setType] = useState('Fecha')

  let xLabel = 
    (settingPoleIncrementData && settingPoleIncrementData.xlabel) 
      ? settingPoleIncrementData.xlabel 
      : 'no data'
  let yLabel = 
    (settingPoleIncrementData && settingPoleIncrementData.ylabel) 
      ? settingPoleIncrementData.ylabel 
      : 'no data'

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