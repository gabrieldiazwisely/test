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

import { useStyles } from "./style";

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.tableTitle}>
              COMPONENTE
            </TableCell>
            <TableCell align="center" className={classes.tableTitle}>
              CONDICION
            </TableCell>
            <TableCell align="center" className={classes.tableTitle}>
              ESTADO
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={1}>
            <TableCell align="center" className={classes.tableTitle}>
              Cóncava
            </TableCell>
            <TableCell align="center" className={classes.tableTitle}>
              Aplanamiento
            </TableCell>
            <TableCell align="center" className={classes.tableTitle}>
              NO
            </TableCell>
          </TableRow>
          <TableRow key={2}>
            <TableCell align="center" className={classes.tableTitle}>
              Cóncava
            </TableCell>
            <TableCell align="center" className={classes.tableTitle}>
              Continuidad de ángulo
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              SI
            </TableCell>
          </TableRow>
          <TableRow key={3}>
            <TableCell align="center" className={classes.tableTitle}>
              Manto
            </TableCell>
            <TableCell align="center" className={classes.tableTitle}>
              Deformación
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              SI
            </TableCell>
          </TableRow>
          <TableRow key={4}>
            <TableCell align="center" className={classes.tableTitle}>
              Cámara
            </TableCell>
            <TableCell align="center" className={classes.tableTitle}>
              Flujo de carga
            </TableCell>
            <TableCell align="center" className={classes.tableStatus}>
              Correcto
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
