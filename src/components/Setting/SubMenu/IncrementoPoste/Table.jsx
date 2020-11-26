import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from "../../style";
import PropTypes from 'prop-types'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },

  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: theme.spacing(1, 3, 1, 2),
    '&:focus': {
      background: '#efeded'
    }
    
  },
}))(InputBase);

const SpanningTable = ({ frecuencyDays, x, y }) => {

  //only show the first 10 entries
  const newX = x.slice(0, 10)
  const newY = y.slice(0, 10)

  const classes = useStyles();
  const [date, setDate] = React.useState(frecuencyDays[0])

  const handleChangeDate = event => {
    setDate(event.target.value);
  }

  const getFrecuencyDaysMenuItems = () => {
    return frecuencyDays.map( d => <MenuItem key={ d } value={ d } >{ d }</MenuItem> )
  }

  const getBody = () => {
    return newX.map( (x, i) => (
      <TableRow key={ i }>
        <TableCell align="center" className={classes.tableItemKey}>
          { x }
        </TableCell>
        <TableCell align="center" className={classes.tableItemValue}>
          { y[i] }
        </TableCell>
      </TableRow>
    ))
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.tableTitle}>
              <FormControl fullWidth variant="outlined" className={classes.formControl} >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={date}
                  onChange={handleChangeDate}
                  input={<BootstrapInput />}
                  inputProps={{
                    classes: {
                        icon: classes.icon
                    },
                  }}
                >
                  <MenuItem value='' disabled>
                    Frecuencia de días para incremento poste
                  </MenuItem>

                  { getFrecuencyDaysMenuItems() }
                
                </Select>
              </FormControl>
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              Altura de manto
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { getBody() }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

SpanningTable.propTypes = {
  frecuencyDays: PropTypes.array.isRequired,
  x: PropTypes.array.isRequired,
  y: PropTypes.array.isRequired
}

export default SpanningTable
