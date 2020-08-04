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

export default function SpanningTable() {
  const classes = useStyles();

  const [date, setDate] = React.useState(1);

  const handleChangeDate = event => {
    setDate(event.target.value);
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
                  <MenuItem value="" disabled>
                    Frecuencia de días para incremento poste
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              Altura de manto
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={1}>
            <TableCell align="center" className={classes.tableTitle}>
              12 - dic
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              172
            </TableCell>
          </TableRow>
          <TableRow key={2}>
            <TableCell align="center" className={classes.tableTitle}>
              15 - dic
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              220
            </TableCell>
          </TableRow>
          <TableRow key={3}>
            <TableCell align="center" className={classes.tableTitle}>
              17 - dic
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              248
            </TableCell>
          </TableRow>
          <TableRow key={4}>
            <TableCell align="center" className={classes.tableTitle}>
              21 - dic
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              260
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
