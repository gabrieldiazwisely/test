import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        border: '3px solid #0057B8',
        borderRadius: '7px 25px 25px 0px',
    },
    icon: {
        color: '#0057B8'
    },
    items: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }, 
    item: {
        color: '#707070',
        marginBottom: theme.spacing(1),
    }
}))