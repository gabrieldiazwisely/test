import { makeStyles } from "@material-ui/core/styles";
import { FullscreenExit } from "@material-ui/icons";

export const useStyles = makeStyles(theme => ({
  root: {
      background: '#4F5159',
      padding: theme.spacing(2),
      borderRadius: 10,
      margin: theme.spacing(1)
  },
  ButtonsGrid: {
    display: 'flex'
  },
  Button: {
    marginTop: theme.spacing(),
    marginRight: theme.spacing(2),
    padding: theme.spacing(1,3,1,3),
    background: '#0057B8 0% 0% no-repeat padding-box',
    border: '1px solid #707070',
    borderRadius: '10px',
    opacity: '1',
    color: '#fff',
    font: 'Normal 16px/16px sans-serif',
    '&:hover': {
      background:'#0057B8',
      color: '#e7e7e7',
    }
  },
  MarginTopCero: {
    marginTop: 0,
  },
  MarginBottom: {
    marginBottom: theme.spacing(2)
  },
  // Link: {
  //   cursor: 'pointer',
  //   color: "#575756",
  //   background: '#fff 0% 0% no-repeat padding-box',
  //   borderRadius: '16px 0px 0px 16x',
  //   opacity: 1,
  //   padding: theme.spacing(1, 2, 1, 2),
  //   font: "Normal 16px/16px sans-serif",
  //   "&:nth-child(1)": {
  //     borderRadius: "0 16px 16px 0"
  //   },
  //   "&:nth-child(2)": {
  //     borderRadius: "16px 0 0 16px"
  //   },
  //   "&:hover": {
  //     color: "#e7e7e7"
  //   }
  // },
  // active: {
  //   background: "#0057B8 !important",
  //   color: '#fff',
  //   textTransform: "uppercase"
  // },
  Link: {
    cursor: 'pointer',
    color: "#575756",
    background: '#fff 0% 0% no-repeat padding-box',
    borderRadius: '0 20px 20px 0',
    opacity: 1,
    padding: theme.spacing(1, 2, 1, 2),
    font: "Normal 21px/22px sans-serif",
    "&:nth-child(1)": {
      borderRadius: "0 23px 23px 0"
    },
    "&:nth-child(2)": {
      borderRadius: "23px 0 0 23px"
    },
    "&:hover": {
      color: "#e7e7e7"
    }
  },
  active: {
    background: "#0057B8 !important",
    color: '#fff',
    textTransform: "uppercase"
  },
  // LinkSelectRight: {
  //   paddingRight: '6px'
  // },
  // LinkSelectLeft: {
  //   paddingLeft: '3px'
  // }
}));