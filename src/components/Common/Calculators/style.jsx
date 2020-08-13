import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
      background: '#4F5159',
      padding: theme.spacing(2),
      borderRadius: 10,
      margin: theme.spacing(1)
  },
  Button: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2,2,2,2),
    background: '#0057B8 0% 0% no-repeat padding-box',
    border: '1px solid #707070',
    borderRadius: '10px',
    opacity: '1',
    color: '#fff',
    font: 'Normal 21px/22px sans-serif',
    '&:hover': {
      background:'#0057B8',
      color: '#e7e7e7',
    }
  },
  InputContent: {
    textAlign: 'left',
  },
  InputText: {
    background: '#fff',
    borderRadius: 10,
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 2, 1, 2)
  },
  InputLabel: {
    textAlign: 'left',
    font: 'Bold 20px/25px Arial',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: '1',
  },
  Link: {
    cursor: 'pointer',
    color: "#575756",
    background: '#fff 0% 0% no-repeat padding-box',
    borderRadius: '20px 0px 0px 20px',
    opacity: 1,
    padding: theme.spacing(1, 2, 1, 2),
    font: "Normal 21px/22px sans-serif",
    "&:nth-child(1)": {
      borderRadius: "23px 0 0 23px"
    },
    "&:nth-child(2)": {
      borderRadius: "0 23px 23px 0"
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
  MarginTopCero: {
    marginTop: 0,
  },
  MarginTop: {
    marginTop: theme.spacing(4)
  },
  BorderSeparation: {
    borderRight: '2px solid #fff'
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
  SeparationRecorridoManto: {
    fontSize: 12,
    marginTop: theme.spacing(2),
  },
  MarginLeft: {
    marginLeft: theme.spacing(3)
  },
  BorderSeparationLeft: {
    borderLeft: '2px solid #fff',
    marginBottom: theme.spacing(2)
  }
}));
