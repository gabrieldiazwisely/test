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
      >
        <Grid item xs={12} sm={3} style={{ textAlign: 'start' }}>
          <Scale />
        </Grid>
        <Grid
          item
          xs={12} sm={6}
          style={{ textAlign: 'center', color: '#fff' }}
        >
          <Typography style={{ fontSize: '16px' }}>
            <a
              className={classes.links}
              href="http://me-elecmetal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ME Elecmetal
            </a>{" "}
            © Todos los derechos reservados. Powered by{" "}
            <a
              className={classes.links}
              href="https://wisely.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wisely
            </a>
            .
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} style={{ textAlign: 'end' }}>
          <MultiLanguage />
        </Grid>
      </Grid>
    </BottomNavigation>
  );
};

const connected = connect()(Footer);
export { connected as Footer };
