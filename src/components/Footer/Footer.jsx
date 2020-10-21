import React from "react";
import { connect } from "react-redux";
import { BottomNavigation, Grid, Typography, Hidden } from "@material-ui/core";

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
        <Hidden xsDown>
          <Grid item sm={3} style={{ textAlign: 'start' }}>
            <Scale />
          </Grid>
          <Grid
            item
            sm={6}
            style={{ textAlign: 'center', color: '#fff' }}
          >
            <Typography style={{ fontSize: '15px' }}>
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
          <Grid item sm={3} style={{ textAlign: 'end' }}>
            <MultiLanguage />
          </Grid>
        </Hidden>
        <Hidden only={[ 'sm', 'md', 'lg', 'xl' ]}>
          <Grid
            item
            xs={12}
            style={{ 
              textAlign: 'center',
              color: '#fff', 
              marginBottom: '16px',
              display: 'flex',
              flexDirection: 'row',
            }}>
              <Grid item xs={6}>
                <Scale />
              </Grid>

              <Grid item xs={6}>
                <MultiLanguage />
              </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ textAlign: 'center', color: '#fff' }}
          >
            <Typography style={{ fontSize: '15px' }}>
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
        </Hidden>
      </Grid>
    </BottomNavigation>
  );
};

const connected = connect()(Footer);
export { connected as Footer };
