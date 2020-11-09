import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  imgCenter: {
    textAlign: "center"
  },
  tableTitle: {
    color: "#fff",
    background: "#0057B8",
    font: "Bold 23px/25px Arial"
  },
  tableBody: {
    borderTop: "5px solid #f3f3f3"
  },
  tableStatus: {
    background: "#EDEDED",
    font: "Bold 23px/25px Arial"
  },
  Dinformation: {
    padding: theme.spacing(3) + "px !important"
  },
  defaultTitle: {
    paddingTop: theme.spacing(1) + 'px !important',
    paddingBottom: theme.spacing(2),
    color: '#0057B8',
    fontSize: '2.125rem',
  }
}));
