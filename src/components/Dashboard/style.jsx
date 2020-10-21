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
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    color: '#fff',
    fontSize: 21,
    textAlign: "left"
  },
  recomendationInfoDescription : {
    fontWeight: 'bold'
  }
}));
