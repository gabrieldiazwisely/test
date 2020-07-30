import React from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  TextField,
  Button,
  Grid,
  Paper,
  Typography
} from "@material-ui/core";
import { useStyles } from "./style";
import NearMeIcon from "@material-ui/icons/NearMe";

const SignInForm = props => {
  const classes = useStyles();
  const { userNameError, username } = props;
  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="baseline">
        <Grid item xs={12} md={8}>
          <Paper className={classes.formContainer}>
            <Typography variant="h4" className={classes.title}>
              Recuperar Contraseña
            </Typography>

            <NearMeIcon className={classes.iconAccount} />

            <form
              onSubmit={props.handleSubmit}
              noValidate
              autoComplete="off"
              className={classes.form}
            >
              <FormGroup row>
                <TextField
                  className={classes.textInput}
                  placeholder="Usuario"
                  error={userNameError}
                  id="user-name"
                  label="Usuario"
                  name="username"
                  type="text"
                  variant="filled"
                  value={username}
                  onChange={props.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup row>
                <Button
                  className={classes.submitButton}
                  type="submit"
                  variant="contained"
                >
                  Enviar
                </Button>
              </FormGroup>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

SignInForm.propTypes = {
  checked: PropTypes.bool.isRequired,
  userNameError: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  passwordError: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheckBoxChange: PropTypes.func.isRequired,
  handleRedirect: PropTypes.func.isRequired
};

export default SignInForm;
