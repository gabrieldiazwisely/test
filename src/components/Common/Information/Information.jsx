import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Avatar, Divider, Hidden } from "@material-ui/core";
import { useStyles } from "./style";

const Information = props => {
  const classes = useStyles();
  const { title = "", machineBackground, icon = "" } = props;

  const getItemsByColumn = col => {
    let data = []
    for ( const key in machineBackground ) {
      data.push(
        <Grid container className={classes.keyValueContainer}>
          <Hidden smDown>
            <Grid item xs={4}>
              <Typography className={classes.key}>
                {`${key}: `}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.value}>
                ${machineBackground[key]}
              </Typography>
            </Grid>
          </Hidden>

          <Hidden only={[ 'md', 'lg', 'xl' ]}>
            <Grid item>
              <Typography className={classes.key}>
                {`${key}: `}
              </Typography>
              <Typography className={classes.valueResponsive}>
                ${machineBackground[key]}
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      )
    }
    switch ( col ) {
      case 1: return data.slice( 0, data.length / 2 + 1)
      case 2: return data.slice( data.length / 2 + 1 )
      default: return data
    } 
  }

  const getEmptyData = () => <Typography className={classes.item}>{'No Data'}</Typography>

  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={1} className={classes.iconContainer}>
          {icon !== "" && <Avatar className={classes.icon}>{icon}</Avatar>}
        </Grid>
        <Grid item xs={12} sm={11} className={classes.items}>
          {title !== "" && (
            <Typography className={classes.title} variant={"h4"}>
              {title}
            </Typography>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {Object.keys(machineBackground).length === 0 
                ? getEmptyData()
                : getItemsByColumn(1)}
            </Grid>
            <Divider orientation="vertical" flexItem className={classes.divider} />
            <Grid item xs={12} sm={5}>
              {Object.keys(machineBackground).length === 0 
                ? getEmptyData()
                : getItemsByColumn(2)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Information.propTypes = {
  machineBackground: PropTypes.object.isRequired
};

export { Information };
