import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Avatar } from "@material-ui/core";
import { useStyles } from "./style";

const Information = props => {
  const classes = useStyles();
  const { title = "", machineBackground, icon = "" } = props;

  const getItems = () => {
    let data = []
    for ( const key in machineBackground ) {
      data.push(
        <Typography className={classes.item}>
          {`${key}: ${machineBackground[key]}`}
        </Typography>
      )
    }
    return data
  }

  const getEmptyData = () => <Typography className={classes.item}>{'No Data'}</Typography>

  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={1}>
          {icon !== "" && <Avatar className={classes.icon}>{icon}</Avatar>}
        </Grid>
        <Grid item xs={11} className={classes.items}>
          {title !== "" && (
            <Typography className={classes.title} variant={"h4"}>
              {title}
            </Typography>
          )}
          {/* {items.map((item, i) => (
            <Typography className={classes.item} key={i}>
              {item}
            </Typography>
          ))} */}
          {Object.keys(machineBackground).length === 0 
            ? getEmptyData()
            : getItems()}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Information.propTypes = {
  machineBackground: PropTypes.object.isRequired
};

export { Information };
