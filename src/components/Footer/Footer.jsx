import React from "react";
import { connect } from "react-redux";
import { BottomNavigation, Grid, Typography } from "@material-ui/core";

import { useStyles } from "./style";

import { MultiLanguage, Scale } from "../Common/";

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <Grid
        container
        className={classes.NavAll}
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={4} sm={6} style={{ paddingLeft: 50 }}>
          <MultiLanguage />
          <Scale />
        </Grid>
        <Grid
          item
          xs={4}
          sm={6}
          style={{ textAlign: "right", paddingRight: 50 }}
        >
          <Typography>
            <a
              href="http://me-elecmetal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ME Elecmetal
            </a>{" "}
            © Todos los derechos reservados. Powered by{" "}
            <a
              href="https://wisely.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wisely
            </a>
            .
          </Typography>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
};

const connected = connect()(Footer);
export { connected as Footer };
