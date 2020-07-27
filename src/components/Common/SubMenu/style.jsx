import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
    },
    navLink: {
        color: '#fff',
        background: '#7E7E7E',
        padding: theme.spacing(2,3,2,3),
        font: 'Normal 21px/22px sans-serif',
        '&:nth-child(1)': {
            borderRadius: '23px 0 0 23px',
        },
        '&:nth-child(even)': {
            background: '#707070',
        },
        '&:hover': {
            color: '#e7e7e7'
        }
    },
    active: {
        background: '#009FE3 !important',
        textTransform: 'uppercase',
    }
}))