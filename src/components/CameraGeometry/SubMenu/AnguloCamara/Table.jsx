import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";

import { useStyles } from "../../style";

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableBody>
          <TableRow key={1}>
            <TableCell align="center" className={classes.tableTitle}>
              1
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              450
            </TableCell>
          </TableRow>
          <TableRow key={2}>
            <TableCell align="center" className={classes.tableTitle}>
              2
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              450
            </TableCell>
          </TableRow>
          <TableRow key={3}>
            <TableCell align="center" className={classes.tableTitle}>
              3
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              450
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
