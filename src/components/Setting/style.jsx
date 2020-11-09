import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  imgCenter: {
    textAlign: "center"
  },
  CSinformation: {
    padding: theme.spacing(3) + "px !important"
  },
  icon: {
    color: '#0057B8',
    fontSize: '55px',
    right: '-10px',
    top: '-10px',
  },
  formControl: {
    padding: theme.spacing(1)
  },
  label: {
    textAlign: 'right', 
    paddingRight: 0, 
    color: '#707070'
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
  boxRight: {
    textAlign: 'right'
  },
  defaultTitle: {
    paddingTop: theme.spacing(1) + 'px !important',
    paddingBottom: theme.spacing(2),
    color: '#0057B8',
    fontSize: '2.125rem',
  }
}));
