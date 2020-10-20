import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none",
    background: "#0057B8",
    top: "auto",
    bottom: 0,
    marginTop: theme.spacing(3),
    height: "100%"
  },
  logo: {
    height: 150
  },
  options: {
    color: "#fff"
  },
  NavAll: {
    background: "#0057B8",
    padding: theme.spacing(3)
  },
  links: {
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: '18px'
  }
}));
