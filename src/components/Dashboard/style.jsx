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

  paperDesk: {
    width: '100%',
    background: 'red',
    color: '#fff',
    padding: theme.spacing(2, 0),
    marginTop: theme.spacing(3),
    '@media (max-width: 1344px)': {
      padding: theme.spacing(1, 0, 2, 0),
    },
  },
  paperDesk1: {
    // marginTop: theme.spacing(2),
    '@media (max-width: 1865px)': {
      marginTop: theme.spacing(2)
    },
    // '@media (max-width: 1820px)': {
    //   marginTop: theme.spacing(5)
    // },
    // '@media (max-width: 1585px)': {
    //   marginTop: theme.spacing(3)
    // },
    // '@media (max-width: 1460px)': {
    //   marginTop: theme.spacing(2)
    // }
  },
  paperDesk2: {
    marginTop: theme.spacing(5),
    '@media (max-width: 1880px)': {
      marginTop: theme.spacing(4)
    },
    '@media (max-width: 1760px)': {
      marginTop: theme.spacing(5)
    },
    '@media (max-width: 1730px)': {
      marginTop: theme.spacing(5)
    },
    '@media (max-width: 1650px)': {
      marginTop: theme.spacing(3)
    },
    '@media (max-width: 1620px)': {
      marginTop: theme.spacing(4)
    },
    '@media (max-width: 1585px)': {
      marginTop: theme.spacing(4)
    },
    '@media (max-width: 1535px)': {
      marginTop: theme.spacing(4)
    },
    '@media (max-width: 1440px)': {
      marginTop: theme.spacing(3)
    },
    '@media (max-width: 1400px)': {
      marginTop: theme.spacing(2)
    },
    '@media (max-width: 1385px)': {
      marginTop: theme.spacing(2)
    },
    '@media (max-width: 1345px)': {
      marginTop: theme.spacing(3)
    }
  },
  paperDesk3: {
    marginTop: theme.spacing(5),
    '@media (max-width: 1880px)': {
      marginTop: theme.spacing(5)
    },
    '@media (max-width: 1817px)': {
      marginTop: theme.spacing(4)
    },
    '@media (max-width: 1730px)': {
      marginTop: theme.spacing(5)
    },
    '@media (max-width: 1650px)': {
      marginTop: theme.spacing(3)
    },
    '@media (max-width: 1620px)': {
      marginTop: theme.spacing(4)
    },
    '@media (max-width: 1585px)': {
      marginTop: theme.spacing(3)
    },
    '@media (max-width: 1535px)': {
      marginTop: theme.spacing(4)
    },
    '@media (max-width: 1440px)': {
      marginTop: theme.spacing(2)
    },
    '@media (max-width: 1400px)': {
      marginTop: theme.spacing(2)
    },
    '@media (max-width: 1345px)': {
      marginTop: theme.spacing(3)
    }
    
  },
  paperDeskDate: {
    '@media (max-width: 1760px)': {
      fontSize: '1.2rem'
    },
    '@media (max-width: 1620px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 1535px)': {
      fontSize: '0.8rem',
    }
  },
  paperDeskMton: {
    fontWeight: 'bold',
    '@media (max-width: 1760px)': {
      fontSize: '1.2rem',
    },
    '@media (max-width: 1620px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 1535px)': {
      fontSize: '0.8rem',
    }
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
