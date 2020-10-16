import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    border: "3px solid #0057B8",
    borderRadius: "7px 25px 25px 0px",
    textAlign: "left",
    width: '100%',
    marginLeft: 0
  },
  icon: {
    background: "#0057B8",
    color: "#fff",
    font: "Bold 23px/25px Arial"
  },
  items: {
    marginTop: theme.spacing(0.3),
    marginBottom: theme.spacing(3)
  },
  item: {
    color: "#707070",
    marginBottom: theme.spacing(1)
  },
  title: {
    color: "#0057B8",
    marginBottom: theme.spacing(2)
  },
  keyValueContainer: {
    marginBottom: theme.spacing(0.5)
  },
  key: {
    font: "Bold 16px Arial",
    color: '#000',
  },
  value: {
    font: "14px Arial",
    color: '#555555',
    textAlign: 'right'
  },
  divider: {
    background: '#5A9EEB',
    width: '2px'
  }
}));
