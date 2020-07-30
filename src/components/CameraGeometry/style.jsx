import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  imgCenter: {
    textAlign: 'center',
  },
  table: {
    minWidth: 700,
  },
  tableTitle: {
    color: '#fff',
    background: '#0057B8',
    font: 'Bold 23px/25px Arial'
  },
  tableBody: {
    borderTop: '5px solid #f3f3f3',
  },
  tableStatus: {
    background: '#EDEDED',
    font: 'Bold 23px/25px Arial'
  },
  Dinformation: {
    padding: theme.spacing(3) + 'px !important'
  }
}))
