import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

import { useStyles } from "../../style";


export default function SpanningTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" ></TableCell>
            <TableCell align="center" className={classes.tableTitle}>
              A
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              B
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={1}>
            <TableCell align="center" className={classes.tableTitle}>
              1
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              27,5°
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              25,8°
            </TableCell>
          </TableRow>
          <TableRow key={2}>
            <TableCell align="center" className={classes.tableTitle}>
              2
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              27,5°
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              25,8°
            </TableCell>
          </TableRow>
          <TableRow key={3}>
            <TableCell align="center" className={classes.tableTitle}>
              3
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              27,5°
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              25,8°
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table className={classes.table} aria-label="spanning table">
        <TableBody>
          <TableRow key={3}>
            <TableCell align="center" className={classes.tableTitle}>
              Fecha Escaneo
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              19 - 11 - 2019
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
