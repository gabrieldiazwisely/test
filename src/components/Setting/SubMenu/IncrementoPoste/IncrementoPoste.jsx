import React from "react"
import { Information } from "../../../Common"
import { 
  Grid, 
  Typography, 
  Paper, 
  Box,
  FormControl,
  Select,
  MenuItem,
  InputBase } from "@material-ui/core"

import { withStyles } from '@material-ui/core/styles';
import { useStyles } from "../../style"

import Table from "./Table";

import incrementoposte0 from "../../../../assets/img/fake/incrementoposte0.png"
import incrementoposte1 from "../../../../assets/img/fake/incrementoposte1.png"

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

const IncrementoPoste = props => {
  const classes = useStyles()

  const [simulation, setSimulation] = React.useState(1);

  const handleChangeSimulation = event => {
    setSimulation(event.target.value);
  }

  return (
    <React.Fragment>
      <Grid
        container
        className={classes.root}
        direction="row"
        justify="center"
        spacing={2}
      >
        <Grid item xs={12} sm={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">
              Recomendación incremento de poste
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <img
                  src={incrementoposte0}
                  alt={"incrementoposte0"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.CSinformation}>
                <Information
                  title={"Antecedentes del equipo"}
                  icon={"i"}
                  items={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
                    "Tempor incididunt ut labore et dolore magna aliqua. ",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  ]}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper elevation={3} className={classes.imgCenter}>
            <Typography variant="h3">
              Recomendación de altura del poste del manto
            </Typography>
            <img
              src={incrementoposte1}
              alt={"incrementoposte1"}
              style={{ width: "90%" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Box  className={classes.boxRight}>
              <FormControl variant="outlined" className={classes.formControl} >
                  <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={simulation}
                  onChange={handleChangeSimulation}
                  input={<BootstrapInput />}
                  inputProps={{
                    classes: {
                        icon: classes.icon
                    },
                  }}
                >
                  <MenuItem value={1}>Simulación 1</MenuItem>
                  <MenuItem value={2}>Simulación 2</MenuItem>
                  <MenuItem value={3}>Simulación 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Table />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { IncrementoPoste }
