import React from "react"
import clsx from "clsx"

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
            <TableCell align="center" className={clsx(classes.tableTitle, classes.tableTitleBotton)}>
              Fila
            </TableCell>
            <TableCell align="center" className={clsx(classes.tableTitle, classes.tableTitleBotton)}>
              Pto de medición
            </TableCell>
            <TableCell align="center" className={clsx(classes.tableTitle, classes.tableTitleBotton)}>
              Ubicación desde pie concava inferior [mm]
            </TableCell>
            <TableCell align="center" className={clsx(classes.tableTitle, classes.tableTitleBotton)}>
              Espesor nominal [mm]
            </TableCell>
            <TableCell align="center" className={clsx(classes.tableTitle, classes.tableTitleBotton)}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tableTitle}>
                      Espesor remanente [mm]
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tableSubTitle}>
                      mínimo
                    </TableCell>
                    <TableCell align="center" className={classes.tableSubTitle}>
                      promedio
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableCell>
            <TableCell align="center" className={clsx(classes.tableTitle, classes.tableTitleBotton)}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tableTitle}>
                      Desgaste [mm] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tableSubTitle}>
                      máximo
                    </TableCell>
                    <TableCell align="center" className={classes.tableSubTitle}>
                      promedio
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableCell>
            <TableCell align="center" className={clsx(classes.tableTitle, classes.tableTitleBotton)}>
              Rango [mm]
            </TableCell>
            <TableCell align="center" className={clsx(classes.tableTitle, classes.tableTitleBotton)}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tableTitle}>
                      Tasa de desgaste [mm/Mton]
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tableSubTitle}>
                      máximo
                    </TableCell>
                    <TableCell align="center" className={classes.tableSubTitle}>
                      promedio
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBackgroundOne}>
          {/* ****************** */}
          <TableRow key={1}>
            <TableCell className={clsx(classes.tableFila, classes.tableBody)} align="center">1</TableCell>
            <TableCell className={classes.tableBody} align="center">2</TableCell>
            <TableCell className={classes.tableBody} align="center">3150</TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* max */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          {/* ****************** */}
          {/* ****************** */}
          <TableRow key={2}>
            <TableCell className={clsx(classes.tableFila, classes.tableBody)} align="center">1</TableCell>
            <TableCell className={classes.tableBody} align="center">2</TableCell>
            <TableCell className={classes.tableBody} align="center">3150</TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* max */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          {/* ****************** */}
          {/* ****************** */}
          <TableRow key={3}>
            <TableCell className={clsx(classes.tableFila, classes.tableBody)} align="center">1</TableCell>
            <TableCell className={classes.tableBody} align="center">2</TableCell>
            <TableCell className={classes.tableBody} align="center">3150</TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* max */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          {/* ****************** */}
          <TableRow key={1} className={classes.tableBackgroundTwo}>
            <TableCell className={clsx(classes.tableFila, classes.tableBody)} align="center">1</TableCell>
            <TableCell className={classes.tableBody} align="center">2</TableCell>
            <TableCell className={classes.tableBody} align="center">3150</TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* max */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          {/* ****************** */}
          {/* ****************** */}
          <TableRow key={2} className={classes.tableBackgroundTwo}>
            <TableCell className={clsx(classes.tableFila, classes.tableBody)} align="center">1</TableCell>
            <TableCell className={classes.tableBody} align="center">2</TableCell>
            <TableCell className={classes.tableBody} align="center">3150</TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* max */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          {/* ****************** */}
          {/* ****************** */}
          <TableRow key={3} className={classes.tableBackgroundTwo}>
            <TableCell className={clsx(classes.tableFila, classes.tableBody)} align="center">1</TableCell>
            <TableCell className={classes.tableBody} align="center">2</TableCell>
            <TableCell className={classes.tableBody} align="center">3150</TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* max */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          {/* ****************** */}
          {/* ****************** */}
          <TableRow key={1} className={classes.tableBackgroundOne}>
            <TableCell className={clsx(classes.tableFila, classes.tableBody)} align="center">1</TableCell>
            <TableCell className={classes.tableBody} align="center">2</TableCell>
            <TableCell className={classes.tableBody} align="center">3150</TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* max */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          {/* ****************** */}
          {/* ****************** */}
          <TableRow key={2} className={classes.tableBackgroundOne}>
            <TableCell className={clsx(classes.tableFila, classes.tableBody)} align="center">1</TableCell>
            <TableCell className={classes.tableBody} align="center">2</TableCell>
            <TableCell className={classes.tableBody} align="center">3150</TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody} align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* max */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell className={classes.tableBody} align="center"></TableCell>
            <TableCell className={classes.tableBody} align="center">
              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* min */}
                    </TableCell>
                    <TableCell className={classes.tableSubBody}  align="center">
                      {/* pro */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          {/* ****************** */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
