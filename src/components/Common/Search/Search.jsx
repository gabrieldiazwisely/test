import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { useStyles } from "./style";

const Search = props => {
  const classes = useStyles();

  const [equipment, setEquipment] = React.useState(1);
  const [campaign, setCampaign] = React.useState(7);
  const [measurement, setMeasurement] = React.useState(7);

  const handleChangeEquipment = event => {
    setEquipment(event.target.value);
  };

  const handleChangeCampaign = event => {
    setCampaign(event.target.value);
  };

  const handleChangeMeasurement = event => {
    setMeasurement(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Equipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={equipment}
              onChange={handleChangeEquipment}
            >
              <MenuItem value={1}>Equipo 1</MenuItem>
              <MenuItem value={2}>Equipo 2</MenuItem>
              <MenuItem value={3}>Equipo 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Campaña</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={campaign}
              onChange={handleChangeCampaign}
            >
              <MenuItem value={7}>Julio - 2019</MenuItem>
              <MenuItem value={6}>Junio - 2019</MenuItem>
              <MenuItem value={5}>Mayo - 2019</MenuItem>
              <MenuItem value={4}>Abril - 2019</MenuItem>
              <MenuItem value={3}>Marzo - 2019</MenuItem>
              <MenuItem value={2}>Febrero - 2019</MenuItem>
              <MenuItem value={1}>Enero - 2019</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Medición</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={measurement}
              onChange={handleChangeMeasurement}
            >
              <MenuItem value={7}>Julio - 2019</MenuItem>
              <MenuItem value={6}>Junio - 2019</MenuItem>
              <MenuItem value={5}>Mayo - 2019</MenuItem>
              <MenuItem value={4}>Abril - 2019</MenuItem>
              <MenuItem value={3}>Marzo - 2019</MenuItem>
              <MenuItem value={2}>Febrero - 2019</MenuItem>
              <MenuItem value={1}>Enero - 2019</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { Search };
