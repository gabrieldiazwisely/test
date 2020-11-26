import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { Bar } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

import { CondicionSalidaModal } from '../CondicionDesgasteModal/CondicionSalidaModal'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 4, 3),
    margin: theme.spacing(2, 4, 3),
    overflow:'scroll',
    height:'100%',
  },
}));

const data = {
  labels: [
    'Campaña 1 05-03-2019 19.07', 
    'Campaña 2 14-05-2019 13.96', 
    'Campaña 3 24-07-2019 15.04', 
    'Campaña 4 06-09-2019 11.82',
    'Campaña 5 05-11-2019 19.07', 
    'Campaña 6 14-12-2019 17.66', 
    'Campaña 7 24-04-2020 12.24', 
    'Campaña 8 06-06-2020 10.00', 
    'Campaña 9 24-08-2020 12.04', 
    'Campaña 10 06-10-2020 11.22', 
    'Campaña 11 24-12-2020 16.04'],
  datasets: [
    {
      label: 'manto 107" Mton',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132)',
      borderWidth: 1,
      stack: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.2)',
      hoverBorderColor: 'rgba(255,99,132)',
      data: [7.50, 6.76, 9.70, 9.00, 8.22, 7.50, 6.76, 9.70, 9.00, 8.22, 6.30]
    },
    {
      label: 'manto 110" Mton',
      backgroundColor: 'rgba(155,231,91,0.2)',
      borderColor: 'rgba(155,231,91,1)',
      borderWidth: 1,
      stack: 1,
      hoverBackgroundColor: 'rgba(155,231,91,0.4)',
      hoverBorderColor: 'rgba(155,231,91,1)',
      data: [0, 7.21, 5.30, 4.32, 9.00, 8.22, 7.50, 6.76, 9.70, 9.00, 8.22]
    },
    {
      label: 'manto 113" Mton',
      backgroundColor: 'rgba(0, 101, 255,0.2)',
      borderColor: 'rgba(0, 101, 255,1)',
      borderWidth: 1,
      stack: 1,
      hoverBackgroundColor: 'rgba(0, 101, 255,0.4)',
      hoverBorderColor: 'rgba(0, 101, 255,1)',
      data: [0, 7.21, 5.30, 4.32, 9.00, 8.22, 7.50, 6.76, 6.76, 9.70, 9.00,]
    }
  ]
}



const BarChart = (props) => {

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
      },
      onClick: () => {
        alert('a')
      }
    },
    onClick: (e, item) => {
      handleOpen()
    }
  }

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState({top: '50%', left: '50%', transform: `translate(-50%, -50%)`,});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CondicionSalidaModal />
    </div>
  );
  
  return (
    <div>
      <Bar data={cloneDeep(data)} options={options}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

export { BarChart };
