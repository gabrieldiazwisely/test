import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none",
    background: "#0057B8 !important",
  },
  flexGrow: {
    flexGrow: 1
  },
  NavButton: {
    borderRadius: "0",
    color: "#fff !important",
    padding: theme.spacing(2, 1), 
  },
  NavLink: {
    padding: "10px 10px",
    borderRight: "2px solid #fff",
    "&:last-child": {
      borderRight: "none"
    }
  },
  NabButtonMobile: {
    color: "#0057B8",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "transparent"
    }
  },
  logo: {
    height: 55,
    width: 209
  },
  logo_small: {
    height: 55
  },
  NavAll: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  NavList: {
    textAlign: "right"
  },
  NavPersonalConfig: {
    display: "flex",
    justifyContent: "flex-end",
    color: "#bdbdbd",
    alignItems: 'center',
  },
  NavAlert: {
    color: "#DAD7D6",
    paddingTop: "5px",
    "&:hover": {
      background: "none",
      color: "#2BB38B"
    }
  },
  NavAlertBadge: {},
  NavName: {
    marginTop: "10px",
    marginLeft: "5px",
    color: "#888888",
    fontWeight: "bold",
    cursor: "pointer",
    height: "35px"
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  badge: {
    background: "blue"
  },
  navMenuItem: {
    color: "#333333 !important"
  },
  removeOver: {
    "&:hover": {
      background: "none",
      cursor: "auto"
    }
  },
  progress: {
    position: "absolute",
    top: "70px",
    left: "5px"
  }
}));
