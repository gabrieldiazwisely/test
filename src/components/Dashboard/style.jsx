import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  imgCenter: {
    textAlign: "center"
  },
  recomendationInfo: {
    background: '#0057B8 !important',
    boxShadow: 'none',
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    color: '#fff',
    fontSize: 21,
    textAlign: "left"
  },
  recomendationInfoDescription : {
    fontWeight: 'bold'
  },
  defaultTitle: {
    paddingTop: theme.spacing(1) + 'px !important',
    paddingBottom: theme.spacing(2),
    color: '#0057B8',
    fontSize: '2.125rem',
  },
  paper: {
    height: 150,
    width: 150,
    background: 'red',
    color: '#fff',
    padding: theme.spacing(3, 1)
  },
  paperBlue: {
    height: 75,
    width: 150,
    background: '#0057B8',
    color: '#fff',
    padding: theme.spacing(1)
  },
}));
