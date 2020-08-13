import React from "react"
import { Grid, Typography, Paper, Button, TextField, Link,FormControl,
  Select,
  MenuItem,
  InputBase } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from "./style"
import clsx from "clsx";

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

const SimManto = props => {
  const classes = useStyles()

  const [date, setDate] = React.useState(1);
  const [manto, setManto] = React.useState(1);

  const handleChangeDate = event => {
    setDate(event.target.value);
  }

  const handleChangeManto = event => {
    setManto(event.target.value);
  }


  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.root}>
        <Grid container  spacing={2}>
            <Grid item xs={12} sm={2} className={clsx(classes.InputContent, classes.BorderSeparation)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography className={classes.InputLabel}>Fecha y/o tonelaje proyectado:</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Link className={clsx(classes.Link, classes.active)}>Fecha</Link>
                  <Link className={clsx(classes.Link)}>Tonelaje</Link>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl variant="outlined" className={classes.formControl} >
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
                      <MenuItem value={1}>30-05-2020</MenuItem>
                      <MenuItem value={2}>30-06-2020</MenuItem>
                      <MenuItem value={3}>30-07-2020</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    placeholder="Tonelaje"
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography className={classes.InputLabel}>TPD:</Typography>
                  <TextField
                    placeholder=""
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={2} className={clsx(classes.InputContent, classes.BorderSeparation)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography className={classes.InputLabel}>Setting objetivo:</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Link className={clsx(classes.Link, classes.active)}>OSS</Link>
                  <Link className={clsx(classes.Link)}>CSS</Link>
                </Grid>
                
                <Grid item xs={12} sm={12}>
                  <TextField
                    placeholder=""
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={2} className={clsx(classes.InputContent, classes.BorderSeparation)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography className={classes.InputLabel}>Selección de manto:</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl variant="outlined" className={classes.formControl} >
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={manto}
                      onChange={handleChangeManto}
                      input={<BootstrapInput />}
                      inputProps={{
                        classes: {
                            icon: classes.icon
                        },
                      }}
                    >
                      <MenuItem value={1}>Manto</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.InputContent}>
              <Typography className={classes.InputLabel}>Recorrido de manto:</Typography>
              <Grid container spacing={2}  direction="row" justify="center" alignItems="center" style={{height: '100%'}}>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.InputLabel} style={{fontSize:12}}>Recorrido Mecanico:</Typography>
                  <TextField
                    placeholder=""
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.BorderSeparationLeft} >
                  <Typography className={clsx(classes.InputLabel,  classes.SeparationRecorridoManto)} >Margen de seguridad superior:</Typography>
                  <TextField
                    placeholder=""
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                  />
                  <Typography className={clsx(classes.InputLabel,  classes.SeparationRecorridoManto)} >Recorrido electronico:</Typography>
                  <TextField
                    placeholder=""
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                  />
                  <Typography className={clsx(classes.InputLabel,  classes.SeparationRecorridoManto)}>Margen de Seguridad inferior:</Typography>
                  <TextField
                    placeholder=""
                    fullWidth
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                    }} 
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={2} className={classes.InputContent} >
              <Grid container spacing={2} direction="row" justify="center" alignItems="flex-end" style={{height: '100%'}}>
                <Grid item xs={12} sm={12} align={'left'} className={classes.MarginLeft}>
                  <Button variant="contained" size="medium" color="primary" className={classes.Button}>
                    Simular
                  </Button>
                  <Typography className={clsx(classes.InputLabel,  classes.SeparationRecorridoManto)}>Altura Simulada:</Typography>
                  <TextField
                    placeholder=""
                    fullWidth
                    value="8,88'"
                    margin="normal"
                    className={classes.InputText}
                    InputProps={{
                      className: classes.input,
                      readOnly: true,
                    }} 
                  />
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

SimManto.propTypes = {
  
}

export { SimManto }
