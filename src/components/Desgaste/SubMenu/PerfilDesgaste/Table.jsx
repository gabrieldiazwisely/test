import React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper 
} from '@material-ui/core';

import { useStyles } from '../../style'

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.tableTitle}>Fila</TableCell>
            <TableCell align="center" className={classes.tableTitle}>Pto de medición</TableCell>
            <TableCell align="center" className={classes.tableTitle}>Ubicación desde pie concava inferior [mm]</TableCell>
            <TableCell align="center" className={classes.tableTitle}>Espesor nominal [mm]</TableCell>
            <TableCell align="center" className={classes.tableTitle}>Espesor remanente [mm]</TableCell>
            <TableCell align="center" className={classes.tableTitle}>Desgaste [mm]</TableCell>
            <TableCell align="center" className={classes.tableTitle}>Rango [mm]</TableCell>
            <TableCell align="center" className={classes.tableTitle}>Tasa de desgaste [mm/Mton]</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={1}>
                <TableCell className={classes.tableTitle}>Concavas</TableCell>
                <TableCell align="center">Fila 4</TableCell>
                <TableCell align="center">64.8</TableCell>
                <TableCell align="center">63</TableCell>
                <TableCell align="center">6.1</TableCell>
                <TableCell align="center">5.9</TableCell>
                <TableCell align="center">40</TableCell>
            </TableRow>
            <TableRow key={2}>
                <TableCell className={classes.tableTitle}>Concavas</TableCell>
                <TableCell align="center">Fila 3</TableCell>
                <TableCell align="center">64.8</TableCell>
                <TableCell align="center">63</TableCell>
                <TableCell align="center">6.1</TableCell>
                <TableCell align="center">5.9</TableCell>
                <TableCell align="center">40</TableCell>
            </TableRow>
            <TableRow key={3}>
                <TableCell className={classes.tableTitle}>Concavas</TableCell>
                <TableCell align="center">Fila 2</TableCell>
                <TableCell align="center">64.8</TableCell>
                <TableCell align="center">63</TableCell>
                <TableCell align="center">6.1</TableCell>
                <TableCell align="center">5.9</TableCell>
                <TableCell align="center">40</TableCell>
            </TableRow>
            <TableRow key={4}>
                <TableCell className={classes.tableTitle}>Concavas</TableCell>
                <TableCell align="center">Fila 1</TableCell>
                <TableCell align="center">64.8</TableCell>
                <TableCell align="center">63</TableCell>
                <TableCell align="center">6.1</TableCell>
                <TableCell align="center">5.9</TableCell>
                <TableCell align="center">40</TableCell>
            </TableRow>
        </TableBody>
        <TableBody className={classes.tableBody}>
            <TableRow key={1}>
                <TableCell className={classes.tableTitle}>Manto</TableCell>
                <TableCell align="center">Inferior</TableCell>
                <TableCell align="center">64.8</TableCell>
                <TableCell align="center">63</TableCell>
                <TableCell align="center">6.1</TableCell>
                <TableCell align="center">5.9</TableCell>
                <TableCell align="center">40</TableCell>
            </TableRow>
            <TableRow key={2}>
                <TableCell className={classes.tableTitle}>Manto</TableCell>
                <TableCell align="center">Intermedio</TableCell>
                <TableCell align="center">64.8</TableCell>
                <TableCell align="center">63</TableCell>
                <TableCell align="center">6.1</TableCell>
                <TableCell align="center">5.9</TableCell>
                <TableCell align="center">40</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}