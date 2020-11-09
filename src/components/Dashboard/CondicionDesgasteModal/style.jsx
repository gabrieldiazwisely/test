import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  imgCenter: {
    textAlign: "center"
  },
  table: {
    minWidth: 700
  },
  tableTitle: {
    color: "#fff",
    background: "#0057B8",
    font: "Bold 23px/25px Arial",
    padding: theme.spacing(2,1,1,1),
  },
  tableTitleBotton: {
    padding: theme.spacing(2,1,0,1)
  },
  tableSubTitle: {
    color: "#000",
    background: "#A6C6EA",
    padding: theme.spacing(2,1,0,1), 
  },
  tableBody: {
    margin: 0,
    padding: theme.spacing(1),
    borderBottom: 'none'
  },
  tableSubBody: {
    border: 'none',
    paddingTop: 0,
    paddingBottom: 0,
  },
  PDinformation: {
    padding: theme.spacing(3) + "px !important"
  },
  tableFila: {
    background: '#B4B4B4',
    color: '#fff',
  },
  tableBackgroundOne: {
    background: '#E9EDF4',
  },
  tableBackgroundTwo: {
    background: '#D1D8E4',
  },
  subTitle: {
    color: "#0057B8",
    fontWeight: 'bold',
    paddingBottom: theme.spacing(1)
  }
}));
