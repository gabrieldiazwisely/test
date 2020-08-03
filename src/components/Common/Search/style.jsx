import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
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
  }
}));
