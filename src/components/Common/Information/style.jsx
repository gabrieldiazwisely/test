import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        border: '3px solid #0057B8',
        borderRadius: '7px 25px 25px 0px',
        textAlign: 'left'
    },
    icon: {
        background: '#0057B8',
        color: '#fff',
        font: 'Bold 23px/25px Arial'
    },
    items: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }, 
    item: {
        color: '#707070',
        marginBottom: theme.spacing(1),
    },
    title: {
        color: '#0057B8',
    }
}))